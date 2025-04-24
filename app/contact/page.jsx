"use client";
import ContactUs from "@/components/ContactUs";

const ContactPage = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          We'd love to hear from you. Get in touch with our team.
        </p>
        
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactPage;
