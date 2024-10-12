import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const messages = [
  "Welcome, please enter the URL of your online business.",
  "After that, we dive into improving your website.",
  "So your business can flourish."
];

interface MovingDotCircleInterface {
  className?: string;
}

const MovingDotCircle: React.FC<MovingDotCircleInterface> = (props) => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const WarDotRef = useRef<HTMLDivElement | null>(null);
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const auditMode = useSelector((state: RootState) => state.search.auditMode);
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);

  // Handle the mouse movement to move the dot in normal mode
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current && !isLoading ) {
        const circle = dotRef.current.parentElement!;
        const circleRect = circle.getBoundingClientRect();
        const circleRadius = circleRect.width / 2;
        const maxMovement = circleRadius * 0.05;

        const x = e.clientX - (circleRect.left + circleRadius);
        const y = e.clientY - (circleRect.top + circleRadius);

        const scaledX = (x / circleRadius) * maxMovement;
        const scaledY = (y / circleRadius) * maxMovement;

        dotRef.current.style.transform = `translate(${scaledX}px, ${scaledY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoading, auditMode]);

  // Handle the changes when loading or audit mode changes
  useEffect(() => {
    if (dotRef.current && WarDotRef.current) {
      if (isLoading) {
        dotRef.current.classList.add('animate-ai-pulse');
      } else {
        dotRef.current.classList.remove('animate-ai-pulse');
      }

      if (isLoading) {
        dotRef.current.classList.add('bg-blue-500');
        dotRef.current.classList.add('position_animation');
        dotRef.current.classList.add('animate-spinner');
        dotRef.current.classList.remove('bg-red-500');
        WarDotRef.current.classList.add('w-full');
        WarDotRef.current.classList.add('h-full');
        WarDotRef.current.classList.add('animate-spin-fast'); 
      } else {
        WarDotRef.current.classList.remove('w-full');
        WarDotRef.current.classList.remove('h-full');
        WarDotRef.current.classList.remove('animate-spin-fast');
        dotRef.current.classList.remove('bg-blue-500');
        dotRef.current.classList.add('bg-red-500');
        dotRef.current.classList.remove('position_animation');
        dotRef.current.classList.remove('animate-spinner');
      }
    }
  }, [isLoading, auditMode]);

  // Handle message transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFadeIn(true);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  {...props}>
      <div className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm mb-4 relative">
      <div 
        ref={WarDotRef} 
        className="absolute animate-spinner">
        <div
          ref={dotRef}
          className="w-4 h-4 bg-red-500 rounded-full transition-transform duration-75"
        ></div>
      </div>
      </div>

      {!auditMode && (
        <p
          className={`text-3xl font-bold tracking-tight text-gray-900 text-center leading-tight transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          {messages[currentMessageIndex]}
        </p>
      )}
    </div>
  );
};

export default MovingDotCircle;
