"use client";
import { motion } from "framer-motion";
import ContactUs from "@/components/ContactUs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="px-6 md:px-16 lg:px-32 py-12 relative z-10"
      >
        <div className="w-full">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 text-center mb-12"
          >
            We'd love to hear from you. Get in touch with our team.
          </motion.p>

          <motion.div variants={itemVariants}>
            <ContactUs />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
