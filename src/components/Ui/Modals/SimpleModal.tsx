import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    title: string;
}
  
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content, title }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
  
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
  
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {title}
                </h3>
  
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <pre className="whitespace-pre-wrap">
                      {content}
                    </pre>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border
                  border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-blue-600
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-500
                  sm:ml-3
                  sm:w-auto
                  sm:text-sm
                "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Modal;