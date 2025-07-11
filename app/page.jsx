"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import ContactUs from "@/components/ContactUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import HeaderSlider from "@/components/HeaderSlider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-6 md:px-16 lg:px-32 relative z-10"
      >
        {/* Hero / Slider */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          className="mb-8"
        >
          <HeaderSlider />
        </motion.section>

        {/* Products */}
        <motion.section
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12"
        >
          <motion.h2
            variants={fadeLeft}
            className="text-2xl md:text-3xl font-semibold mb-6 text-center"
          >
            Popular Products
          </motion.h2>
          <HomeProducts />
        </motion.section>

        {/* Featured Product */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12"
        >
          <FeaturedProduct />
        </motion.section>

        {/* Banner */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12"
        >
          <Banner />
        </motion.section>

        {/* Contact Us */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12"
        >
          <ContactUs />
        </motion.section>

        {/* Newsletter */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16"
        >
          <motion.h2
            variants={fadeLeft}
            className="text-2xl md:text-3xl font-semibold mb-4 text-center"
          >
            Join Our Newsletter
          </motion.h2>
          <NewsLetter />
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Home;
