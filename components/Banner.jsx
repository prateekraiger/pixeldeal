import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Banner = () => {
  const { addToCart, router, products } = useAppContext();
  

  const getProductId = () => {
    const product = products.find(p => 
      p.name.toLowerCase().includes('jbl') || 
      p.name.toLowerCase().includes('sound') ||
      p.category.toLowerCase().includes('speaker')
    );

    return product ? product._id : (products.length > 0 ? products[0]._id : null);
  };
  
  const handleBuyNow = () => {
    const productId = getProductId();
    if (productId) {
      addToCart(productId);
      router.push("/cart");
    } else {

      router.push("/all-products");
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-10 py-8 md:py-0 bg-[#E6E9F2] my-10 rounded-lg overflow-hidden">
      <Image
        className="max-w-36"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-2 md:px-0">
        <h2 className="text-xl md:text-2xl font-semibold max-w-[220px]">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[260px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button 
          onClick={handleBuyNow}
          className="group flex items-center justify-center gap-1 px-8 py-2 bg-orange-600 rounded text-white hover:bg-orange-700 transition"
        >
          Buy now
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-52"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />
      <Image
        className="md:hidden max-w-36"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;
