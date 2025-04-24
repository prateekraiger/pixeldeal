import { ClerkProvider } from "@clerk/nextjs";

import { AppContextProvider } from "@/context/AppContext";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "NextGadget ",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700 text-base`}>
          <Toaster />
          <AppContextProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
