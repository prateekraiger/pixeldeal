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

  const handlePlaceOrder = async () => {
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
          body: JSON.stringify({ products: cartData, totalPrice }),
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
      window.sessionStorage.setItem("orderDetails", JSON.stringify({ method, totalPrice }));
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
          <input type="text" placeholder="First Name" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <input type="email" placeholder="Enter your email" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <input type="text" placeholder="Street" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
        <div className="flex gap-3">
          <input type="text" placeholder="City" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="State" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div className="flex gap-3">
          <input type="number" placeholder="PinCode" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
          <input type="text" placeholder="Country" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <input type="tel" placeholder="Phone" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
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
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
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
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
