"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { useClerk, UserButton } from "@clerk/nextjs";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { isSeller, router, user, getCartCount } = useAppContext();
  const { openSignIn } = useClerk();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/all-products?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-36 md:w-40"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="NextGadget logo"
      />

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition text-base">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition text-base">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-900 transition text-base">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition text-base">
          Contact
        </Link>
        <button
          onClick={() => router.push("/admin/login")}
          className="text-sm border px-4 py-1.5 rounded-full ml-1"
        >
          Admin Panel
        </button>
      </div>
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
        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
          <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900 transition" />
          {getCartCount() > 0 && (
            <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </div>
          )}
        </div>
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Cart"
                labelIcon={<ShoppingCart />}
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<ShoppingBag />}
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      {/* Mobile View */}
      <div className="flex items-center md:hidden gap-3">
        {/* Mobile Cart Icon with Count */}
        <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
          <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900 transition" />
          {getCartCount() > 0 && (
            <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </div>
          )}
        </div>
        <button
          onClick={() => router.push("/admin")}
          className="text-xs border px-4 py-1.5 rounded-full"
        >
          Admin Panel
        </button>
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 hover:text-gray-900 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
