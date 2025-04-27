import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 via-white to-blue-100">
      <div className="animate-spin rounded-full h-20 w-20 border-8 border-t-orange-500 border-blue-400 mb-6"></div>
      <h2 className="text-2xl font-bold text-orange-600 drop-shadow-lg">NextGadget</h2>
      <p className="text-lg text-blue-700 mt-2">Loading the best deals for you...</p>
    </div>
  );
};

export default Preloader;
