"use client";
import { motion } from 'framer-motion';
import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const AllProducts = () => {
  const { products } = useAppContext();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-start px-6 md:px-16 lg:px-32"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-end pt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-medium"
        >
          All products
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "64px" }}
          transition={{ duration: 0.6 }}
          className="h-0.5 bg-orange-600 rounded-full"
        />
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AllProducts;
