"use client";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Placeorder = () => {
  const [method, setMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { products, cartItems, getCartAmount, getCartCount } = useAppContext();

  // Delivery information state
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({});

  // Validate delivery information
  const validateDeliveryInfo = () => {
    const errors = {};
    if (!deliveryInfo.firstName.trim()) errors.firstName = 'First Name is required.';
    if (!deliveryInfo.lastName.trim()) errors.lastName = 'Last Name is required.';
    if (!deliveryInfo.email.trim()) errors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(deliveryInfo.email.trim())) errors.email = 'Enter a valid email.';
    if (!deliveryInfo.street.trim()) errors.street = 'Street is required.';
    if (!deliveryInfo.city.trim()) errors.city = 'City is required.';
    if (!deliveryInfo.state.trim()) errors.state = 'State is required.';
    if (!deliveryInfo.pincode.trim()) errors.pincode = 'PinCode is required.';
    else if (!/^\d{6}$/.test(deliveryInfo.pincode.trim())) errors.pincode = 'Enter a valid 6-digit PinCode.';
    if (!deliveryInfo.country.trim()) errors.country = 'Country is required.';
    if (!deliveryInfo.phone.trim()) errors.phone = 'Phone is required.';
    else if (!/^\d{10}$/.test(deliveryInfo.phone.trim())) errors.phone = 'Enter a valid 10-digit phone number.';
    return errors;
  };

  const handleDeliveryInput = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: undefined });
  };

  // Convert cartItems to array of products for backend
  const cartData = [];
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const productData = products.find((p) => p._id === itemId);
      if (productData) {
        cartData.push({
          productId: productData._id,
          name: productData.name,
          quantity: cartItems[itemId],
          price: productData.offerPrice || productData.price,
        });
      }
    }
  }

  // Calculate total price
  const totalPrice = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const isDeliveryInfoValid = () => {
    const errors = validateDeliveryInfo();
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async () => {
    const errors = validateDeliveryInfo();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      // Scroll to the first error field for better UX
      const firstErrorField = Object.keys(errors)[0];
      const el = document.getElementsByName(firstErrorField)[0];
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (cartData.length === 0) {
      alert("Cart is empty");
      return;
    }
    setLoading(true);
    try {
      if (method === "stripe") {
        // Call backend to create Stripe Checkout session
        const response = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ products: cartData, totalPrice, deliveryInfo }),
        });
        const data = await response.json();
        if (data.sessionId) {
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({ sessionId: data.sessionId });
          return;
        } else {
          alert(data.error || "Stripe session error");
        }
        setLoading(false);
        return;
      }
      // COD fallback
      window.sessionStorage.setItem("orderDetails", JSON.stringify({ method, totalPrice, deliveryInfo }));
      window.sessionStorage.setItem("orderItems", JSON.stringify(cartData));
      router.push("/order-placed");
    } catch (err) {
      alert("Order placement failed");
      console.error("Order error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* left side - delivery information */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <div className="text-xl sm:text-2xl my-3 font-bold text-orange-600">DELIVERY INFORMATION</div>
        <div className="flex gap-3">
          <input type="text" name="firstName" placeholder="First Name" value={deliveryInfo.firstName} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.firstName ? 'border-red-500' : ''}`} />
          <input type="text" name="lastName" placeholder="Last Name" value={deliveryInfo.lastName} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.lastName ? 'border-red-500' : ''}`} />
        </div>
        {formErrors.firstName && <span className="text-red-500 text-sm">{formErrors.firstName}</span>}
        {formErrors.lastName && <span className="text-red-500 text-sm">{formErrors.lastName}</span>}
        <input type="email" name="email" placeholder="Enter your email" value={deliveryInfo.email} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.email ? 'border-red-500' : ''}`} />
        {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
        <input type="text" name="street" placeholder="Street" value={deliveryInfo.street} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.street ? 'border-red-500' : ''}`} />
        {formErrors.street && <span className="text-red-500 text-sm">{formErrors.street}</span>}
        <div className="flex gap-3">
          <input type="text" name="city" placeholder="City" value={deliveryInfo.city} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.city ? 'border-red-500' : ''}`} />
          <input type="text" name="state" placeholder="State" value={deliveryInfo.state} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.state ? 'border-red-500' : ''}`} />
        </div>
        {formErrors.city && <span className="text-red-500 text-sm">{formErrors.city}</span>}
        {formErrors.state && <span className="text-red-500 text-sm">{formErrors.state}</span>}
        <div className="flex gap-3">
          <input type="number" name="pincode" placeholder="PinCode" value={deliveryInfo.pincode} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.pincode ? 'border-red-500' : ''}`} />
          <input type="text" name="country" placeholder="Country" value={deliveryInfo.country} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.country ? 'border-red-500' : ''}`} />
        </div>
        {formErrors.pincode && <span className="text-red-500 text-sm">{formErrors.pincode}</span>}
        {formErrors.country && <span className="text-red-500 text-sm">{formErrors.country}</span>}
        <input type="tel" name="phone" placeholder="Phone" value={deliveryInfo.phone} onChange={handleDeliveryInput} className={`border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${formErrors.phone ? 'border-red-500' : ''}`} />
        {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
      </div>

      {/* right side - cart total and payment */}
      <div className="w-full sm:w-1/2 flex flex-col gap-8">
        <div className="shadow-md rounded-lg p-4 bg-gray-50">
          <div className="text-lg font-semibold mb-2">Order Summary</div>
          <table className="w-full text-sm mb-2">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Product</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Price</th>
                <th className="py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.productId} className="border-b">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-center">₹{item.price}</td>
                  <td className="py-2 text-center">₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end text-lg font-semibold">
            Total: <span className="ml-2 text-orange-600">₹{totalPrice}</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xl sm:text-2xl my-3 font-bold text-orange-600">PAYMENT INFORMATION</div>

          {/* payment method selection */}
          <div className="flex flex-col gap-3 mt-4">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all ${method === "stripe" ? "border-blue-500 bg-blue-50" : ""}`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${method === "stripe" ? "border-blue-500" : "border-gray-400"}`}
              >
                {method === "stripe" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
              </div>
              <span className="font-medium">Stripe</span>
            </div>

            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all ${method === "cod" ? "border-blue-500 bg-blue-50" : ""}`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${method === "cod" ? "border-blue-500" : "border-gray-400"}`}
              >
                {method === "cod" && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
              </div>
              <p className="font-medium">Cash on Delivery</p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className={`w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Placing Order...
              </span>
            ) : (
              "Place Order"
            )}
          </button>
          {Object.keys(formErrors).length > 0 && (
            <div className="mt-2 text-red-600 text-sm font-semibold">
              Please fill all required delivery information correctly: {Object.values(formErrors).join(', ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
