import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields");
      return;
    }
    
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our products or services? Reach out to our team and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 7890123456</p>
                <p className="text-gray-600">+91 7890123456</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">support@nextgadget.com</p>
                <p className="text-gray-600">info@nextgadget.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  123 Tech Street, Suite 100<br />
                  New Market 7<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <Image src={assets.facebook_icon || "/facebook-icon.svg"} alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <Image src={assets.twitter_icon || "/twitter-icon.svg"} alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <Image src={assets.instagram_icon || "/instagram-icon.svg"} alt="Instagram" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          {success ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
              Thank you for your message! We'll get back to you soon.
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your message here..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      

    </div>
  );
};

export default ContactUs;