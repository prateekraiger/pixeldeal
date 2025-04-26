import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-lg mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="bg-white rounded shadow-lg p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
