import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-orange-50">
      <div className="relative mb-7">
        <div className="animate-spin rounded-full h-20 w-20 border-8 border-t-orange-500 border-gray-200 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2 border-orange-100"></div>
      </div>
      <h2 className="text-3xl font-extrabold text-orange-600 drop-shadow-lg tracking-wide">
        NextGadget
      </h2>
      <p className="text-lg text-orange-500 mt-2 italic animate-pulse">
        Loading the best deals for you...
      </p>
    </div>
  );
};

export default Preloader;
