"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "backOut" } },
};

const popIcon = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.2 } },
};

const AboutPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full py-8 min-h-screen"
    >
      <div className="w-full">
        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
        >
          About NextGadget
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto px-2"
        >
          Your Trusted Destination for Premium Electronics
        </motion.p>
        {/* Company Story */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16"
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative overflow-hidden rounded-xl mb-8 w-full max-w-5xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&auto=format"
              alt="NextGadget Team"
              className="w-full h-auto object-cover"
              style={{ minHeight: "180px", maxHeight: "400px" }}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-5xl mx-auto px-2 md:px-8"
          >
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
            >
              Our Story
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              NextGadget was founded in 2018 with a simple mission: to provide tech enthusiasts with premium electronic products at competitive prices. What began as a small online store has grown into a trusted destination for quality electronics, serving customers across the country.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              Our founder, Sarah Chen, recognized a gap in the market for an electronics retailer that combines technical expertise with exceptional customer service. Drawing from her background in tech and e-commerce, she assembled a team of passionate tech lovers who share her vision of making the latest technology accessible to everyone.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-700 text-sm sm:text-base md:text-lg">
              Today, NextGadget offers a carefully curated selection of electronic products, from cutting-edge laptops and smartphones to high-performance peripherals and accessories. We continue to grow and evolve, but our core values remain the same: quality, innovation, and customer satisfaction.
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Mission & Values */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto px-2 md:px-8"
        >
          <motion.div variants={scaleIn} className="bg-white rounded-lg p-4 md:p-6 shadow-sm border">
            <motion.h2 variants={fadeLeft} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 text-sm sm:text-base md:text-lg">
              At NextGadget, our mission is to empower people through technology by providing premium electronic products, expert guidance, and exceptional customer service. We believe that the right tech tools can enhance productivity, creativity, and enjoyment in everyday life.
            </motion.p>
          </motion.div>
          <motion.div variants={scaleIn} className="bg-white rounded-lg p-4 md:p-6 shadow-sm border">
            <motion.h2 variants={fadeLeft} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Our Vision
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 text-sm sm:text-base md:text-lg">
              We envision a future where everyone has access to quality technology that enhances their lives. By curating the best products and providing excellent service, we aim to be the most trusted name in electronics retail, known for our integrity, expertise, and customer-focused approach.
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Core Values */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 max-w-5xl mx-auto px-2 md:px-8"
        >
          <motion.h2 variants={fadeLeft} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
            Our Core Values
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[{
              title: "Quality",
              desc: "We rigorously test and select only the highest-quality products for our customers.",
            }, {
              title: "Expertise",
              desc: "Our team consists of tech enthusiasts who are knowledgeable about our products.",
            }, {
              title: "Customer Focus",
              desc: "We're dedicated to providing exceptional service and support at every step.",
            }, {
              title: "Innovation",
              desc: "We stay ahead of technology trends to offer the most innovative products.",
            }].map((val, idx) => (
              <motion.div
                key={val.title}
                variants={fadeUp}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="flex bg-white rounded-lg p-4 md:p-6 shadow-sm border items-start"
              >
                <motion.div
                  variants={popIcon}
                  className="mr-4 text-brand-primary mt-1"
                >
                  <CheckCircle2 className="h-7 w-7" />
                </motion.div>
                <div>
                  <motion.h3 variants={fadeLeft} className="font-semibold text-base sm:text-lg mb-2">
                    {val.title}
                  </motion.h3>
                  <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base md:text-lg">
                    {val.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Team */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 max-w-5xl mx-auto px-2 md:px-8"
        >
          <motion.h2 variants={fadeLeft} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
            Our Team
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                img: "https://images.unsplash.com/photo-1573497019305-1c2e363016cb?w=400&auto=format",
              },
              {
                name: "Lisa Patel",
                role: "COO",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format",
              },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ scale: 1.04, borderColor: "#6366f1" }}
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm border text-center transition-all duration-200"
              >
                <motion.div
                  variants={scaleIn}
                  className="relative w-full h-48 mb-4"
                  style={{ overflow: "hidden", borderRadius: "1rem" }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3 variants={fadeLeft} className="text-base sm:text-lg font-semibold">
                  {member.name}
                </motion.h3>
                <motion.p variants={fadeUp} className="text-gray-500 text-sm sm:text-base">
                  {member.role}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
