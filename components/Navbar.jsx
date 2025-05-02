"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { ShoppingBag, ShoppingCart, Menu, X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Navbar = () => {
  const { isSeller, router, user, getCartCount } = useAppContext();
  const { openSignIn } = useClerk();
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/all-products?search=${encodeURIComponent(search.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 relative"
      >
        {/* Logo - mobile and desktop */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Image
            className="cursor-pointer w-28 sm:w-36 md:w-40"
            onClick={() => router.push("/")}
            src={assets.logo}
            alt="NextGadget logo"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex items-center gap-4 lg:gap-8" variants={fadeIn}>
          <Link href="/" className="hover:text-gray-900 transition text-base">Home</Link>
          <Link href="/all-products" className="hover:text-gray-900 transition text-base">Shop</Link>
          <Link href="/about" className="hover:text-gray-900 transition text-base">About Us</Link>
          <Link href="/contact" className="hover:text-gray-900 transition text-base">Contact</Link>
          <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} onClick={() => router.push("/admin/login")} className="text-sm border px-4 py-1.5 rounded-full ml-1">Admin Panel</motion.button>
        </motion.div>

        {/* Desktop Search and User Controls */}
        <ul className="hidden md:flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full px-2 py-1 shadow-md border border-gray-200">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-transparent px-2 py-1 text-sm w-36 focus:w-56 transition-all duration-200"
            />
            <button type="submit" className="p-1 text-sky-700 hover:text-sky-900">
              <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
            </button>
          </form>
          {/* Cart Icon with Count */}
          <motion.div whileHover={{ scale: 1.13 }} whileTap={{ scale: 0.95 }} className="relative cursor-pointer" onClick={() => router.push("/cart")}> 
            <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900 transition" />
            {getCartCount() > 0 && (
              <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{getCartCount()}</div>
            )}
          </motion.div>
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Cart" labelIcon={<ShoppingCart />} onClick={() => router.push("/cart")}/>
                <UserButton.Action label="My Orders" labelIcon={<ShoppingBag />} onClick={() => router.push("/my-orders")}/>
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
              <Image src={assets.user_icon} alt="user icon" />
              Account
            </motion.button>
          )}
        </ul>

        {/* Mobile Hamburger Only */}
        <motion.button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ml-auto"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Search Overlay - slides down when activated */}
      {searchOpen && (
        <div className="md:hidden w-full bg-white shadow-md py-3 px-4 animate-slideDown">
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full px-3 py-2 border border-gray-300">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-transparent flex-1 text-sm"
              autoFocus
            />
            <button type="submit" className="p-1 text-sky-700 hover:text-sky-900">
              <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu - slides down when activated */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full absolute z-50 animate-slideDown">
          <div className="flex flex-col py-3">
            <Link 
              href="/" 
              className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/all-products" 
              className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => handleNavigation("/admin/login")}
              className="px-6 py-3 text-left hover:bg-gray-50 transition"
            >
              Admin Panel
            </button>
            {!user && (
              <button
                onClick={() => {
                  openSignIn();
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-3 text-left flex items-center gap-2 hover:bg-gray-50 transition"
              >
                <Image src={assets.user_icon} alt="user icon" className="w-4 h-4" />
                Sign In
              </button>
            )}
          </div>
        </div>
      )}

      {/* Add necessary styles for animations */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;