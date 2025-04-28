import { CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="w-full py-8 min-h-screen">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">About NextGadget</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto px-2">
          Your Trusted Destination for Premium Electronics
        </p>
        
        {/* Company Story */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl mb-8 w-full max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&auto=format" 
              alt="NextGadget Team" 
              className="w-full h-auto object-cover"
              style={{ minHeight: '180px', maxHeight: '400px' }}
            />
          </div>
          <div className="max-w-5xl mx-auto px-2 md:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              NextGadget was founded in 2018 with a simple mission: to provide tech enthusiasts with premium electronic products at competitive prices. What began as a small online store has grown into a trusted destination for quality electronics, serving customers across the country.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              Our founder, Sarah Chen, recognized a gap in the market for an electronics retailer that combines technical expertise with exceptional customer service. Drawing from her background in tech and e-commerce, she assembled a team of passionate tech lovers who share her vision of making the latest technology accessible to everyone.
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Today, NextGadget offers a carefully curated selection of electronic products, from cutting-edge laptops and smartphones to high-performance peripherals and accessories. We continue to grow and evolve, but our core values remain the same: quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto px-2 md:px-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              At NextGadget, our mission is to empower people through technology by providing premium electronic products, expert guidance, and exceptional customer service. We believe that the right tech tools can enhance productivity, creativity, and enjoyment in everyday life.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              We envision a future where everyone has access to quality technology that enhances their lives. By curating the best products and providing excellent service, we aim to be the most trusted name in electronics retail, known for our integrity, expertise, and customer-focused approach.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16 max-w-5xl mx-auto px-2 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Quality</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  We rigorously test and select only the highest-quality products for our customers.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Expertise</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Our team consists of tech enthusiasts who are knowledgeable about our products.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Customer Focus</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  We're dedicated to providing exceptional service and support at every step.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 text-brand-primary">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  We stay ahead of technology trends to offer the most innovative products.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16 max-w-5xl mx-auto px-2 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format" 
                  alt="Sarah Chen - CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Sarah Chen</h3>
              <p className="text-gray-500 text-sm sm:text-base">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format" 
                  alt="David Rodriguez - CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">David Rodriguez</h3>
              <p className="text-gray-500 text-sm sm:text-base">CTO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format" 
                  alt="Lisa Patel - COO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">Lisa Patel</h3>
              <p className="text-gray-500 text-sm sm:text-base">COO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
