import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 } },
};

const Footer = React.memo(function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="bg-white/80 backdrop-blur-sm shadow-inner"
      suppressHydrationWarning
    >
      <motion.div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 md:gap-8 lg:gap-14 py-10 md:py-14 border-b border-gray-500/30 text-gray-500 text-base md:text-lg" variants={fadeUp}>
        <motion.div className="w-full md:w-2/5 mb-8 md:mb-0 flex flex-col items-start" variants={fadeUp}>
          <Image className="w-36 md:w-40" src={assets.logo} alt="NextGadget logo" />
          <motion.p className="mt-6 text-base md:text-lg" variants={fadeUp}>
            NextGadget is your one-stop shop for the latest electronics, offering everything from headphones and cameras to smartphones and laptops. We are committed to providing top-quality products at competitive prices with fast and reliable shipping. Connect with us to stay updated on the newest deals and technologies.
          </motion.p>
        </motion.div>
        <motion.div className="w-full md:w-1/4 mb-8 md:mb-0 flex items-start justify-start md:justify-center" variants={fadeUp}>
          <div>
            <motion.h2 className="font-semibold text-gray-900 mb-5 text-xl md:text-2xl" variants={fadeUp}>Quick Links</motion.h2>
            <ul className="text-base md:text-lg space-y-2">
              <motion.li variants={fadeUp}><Link className="hover:underline transition" href="/">Home</Link></motion.li>
              <motion.li variants={fadeUp}><Link className="hover:underline transition" href="/about">About us</Link></motion.li>
              <motion.li variants={fadeUp}><Link className="hover:underline transition" href="/contact">Contact us</Link></motion.li>
              <motion.li variants={fadeUp}><Link className="hover:underline transition" href="#">Privacy policy</Link></motion.li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="w-full md:w-1/4 flex items-start justify-start md:justify-center" variants={fadeUp}>
          <div>
            <motion.h2 className="font-semibold text-gray-900 mb-5 text-xl md:text-2xl" variants={fadeUp}>Get in touch</motion.h2>
            <div className="text-base md:text-lg space-y-2">
              <motion.p variants={fadeUp}>+91-9876543210</motion.p>
              <motion.p variants={fadeUp}>support@nextgadget.in</motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.p className="py-3 md:py-4 text-center text-sm md:text-lg lg:text-xl text-gray-600" variants={fadeUp}>
        Copyright 2025 NextGadget. All Right Reserved.
      </motion.p>
    </motion.footer>
  );
});

export default Footer;
