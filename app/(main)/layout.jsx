"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/common/background";

export default function MainLayout({ children }) {
  return (
    <Background>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Background>
  );
}
