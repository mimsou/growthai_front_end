import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { aiAsk } from 'store/actions/aiAsk';
import DOMPurify from 'dompurify'; // Optional, for security reasons
import html2canvas from 'html2canvas'; // Import html2canvas
import jsPDF from 'jspdf'; // Import jsPDF

interface AskButtonProps {
  seoSubject: string;
  responseType: string;
}

const AskButton: React.FC<AskButtonProps> = ({ seoSubject, responseType }) => {
  const dispatch = useDispatch();
  const sessionId = useSelector((state: any) => state.ai.sessionId);
  const [showTooltip, setShowTooltip] = useState(false);
  const answer = useSelector((state: any) => state.ai.answer);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [arrowPosition, setArrowPosition] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null); // Ref for the tooltip

  useEffect(() => {
    if (buttonRef.current && showTooltip) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setArrowPosition(buttonRect.width / 2);
    }
  }, [showTooltip]);

  const handleAskClick = async () => {
    try {
      aiAsk(seoSubject, responseType, dispatch, sessionId);
      setShowTooltip(true);
    } catch (error) {
      console.error(error);
    }
  };

  const prettifyAnswer = (rawAnswer: string) => {
    // Escape and sanitize HTML
    const sanitizedAnswer = DOMPurify.sanitize(rawAnswer);

    // Replace '**' for bold, and insert <br> for line breaks
    const formattedAnswer = sanitizedAnswer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold for **text**
      .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>') // Code block for ```code```
      .replace(/\n/g, '<br>'); // Newline breaks for readability

    return formattedAnswer;
  };

  const exportToPDF = () => {
    const input = tooltipRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190; // Width of the PDF
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const heightLeft = imgHeight;

        let position = 0;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        position += heightLeft;

        // Check if another page is needed
        if (heightLeft >= pageHeight) {
          position = 0;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        }

        pdf.save('tooltip-content.pdf');
      });
    }
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        className="bg-blue-400 hover:bg-blue-500 text-white font-semibold text-xs py-1 px-2 rounded-lg m-1"
        onClick={handleAskClick}
      >
        AI Assistant : How to improve?
      </button>
      {showTooltip && (
        <div
          ref={tooltipRef}
          className="absolute z-10 p-4 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-w-5xl w-screen"
          style={{ height: '60vh', overflowY: 'auto' }}
        >
    
          <button
            className="mt-2 text-sm text-blue-500 hover:text-blue-700"
            onClick={() => setShowTooltip(false)}
          >
            Close
          </button>
          <button
            className="mt-2 text-sm text-blue-500 hover:text-blue-700 float-right"
            onClick={exportToPDF} // Export to PDF button
          >
            Export to PDF
          </button>
          <div
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{ __html: prettifyAnswer(answer) }} // Inject HTML safely
          ></div>
        </div>
      )}
    </div>
  );
};

export default AskButton;
