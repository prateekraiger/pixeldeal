'use client'
import React from "react";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import ContactUs from "@/components/ContactUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import HeaderSlider from "@/components/HeaderSlider";


const Home = () => {
  return (
    <>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <ContactUs />
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
