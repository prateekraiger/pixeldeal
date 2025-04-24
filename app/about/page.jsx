import { CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-12">
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-6">About NextGadget</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Your Trusted Destination for Premium Electronics
        </p>
        
        {/* Company Story */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl mb-8 max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&auto=format" 
              alt="NextGadget Team" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              NextGadget was founded in 2018 with a simple mission: to provide tech enthusiasts with premium electronic products at competitive prices. What began as a small online store has grown into a trusted destination for quality electronics, serving customers across the country.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Sarah Chen, recognized a gap in the market for an electronics retailer that combines technical expertise with exceptional customer service. Drawing from her background in tech and e-commerce, she assembled a team of passionate tech lovers who share her vision of making the latest technology accessible to everyone.
            </p>
            <p className="text-gray-700">
              Today, NextGadget offers a carefully curated selection of electronic products, from cutting-edge laptops and smartphones to high-performance peripherals and accessories. We continue to grow and evolve, but our core values remain the same: quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At NextGadget, our mission is to empower people through technology by providing premium electronic products, expert guidance, and exceptional customer service. We believe that the right tech tools can enhance productivity, creativity, and enjoyment in everyday life.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We envision a future where everyone has access to quality technology that enhances their lives. By curating the best products and providing excellent service, we aim to be the most trusted name in electronics retail, known for our integrity, expertise, and customer-focused approach.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Our Core Values</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality</h3>
                <p className="text-gray-600">
                  We rigorously test and select only the highest-quality products for our customers.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Our team consists of tech enthusiasts who are knowledgeable about our products.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  We're dedicated to providing exceptional service and support at every step.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of technology trends to offer the most innovative products.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Meet Our Leadership</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format" 
                  alt="Sarah Chen - CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Sarah Chen</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format" 
                  alt="David Rodriguez - CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">David Rodriguez</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format" 
                  alt="Lisa Patel - COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Lisa Patel</h3>
              <p className="text-gray-500">COO</p>
            </div>
          </div>
        </div>
        
        {/* Join Us CTA */}
        <div className="bg-brand-light rounded-xl p-8 text-center max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join the NextGadget Community</h2>
          <p className="text-gray-700 mb-6">
            Stay updated on the latest tech trends, product launches, and exclusive deals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-l-md border border-r-0 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            <button
              type="submit"
              className="bg-brand-primary text-white px-6 py-2 rounded-r-md hover:bg-brand-secondary transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
