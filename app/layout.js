"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from "react";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700 text-base bg-gradient-to-br from-orange-50 via-white to-blue-50`}>
          <Toaster />
          {loading && <Preloader />}
          <AppContextProvider>
            <Navbar />
            <main className={loading ? "opacity-0" : "transition-opacity duration-700 opacity-100"}>{children}</main>
            <Footer />
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
