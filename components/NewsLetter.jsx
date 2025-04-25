import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-bold text-orange-600 mb-2">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-lg text-base text-gray-600 pb-8 max-w-xl mx-auto">
        Join our NextGadget family and unlock exclusive deals, early access to sales, and the latest tech news delivered straight to your inbox. Don’t miss out on your chance to save 20% on your first order—sign up today and stay ahead in the world of gadgets!
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500 text-lg"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="md:px-12 px-8 h-full text-white bg-orange-600 rounded-md rounded-l-none text-lg font-semibold hover:bg-orange-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
