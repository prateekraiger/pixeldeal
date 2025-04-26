"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51RIAFTPbT13EgNjQbu5RoViaKKqpGA1qboAdtg3ZJNeQkY12wE1mSzgw2zC2jvpyq6bQopcSjwhtyDzNjIZqVZ7b00SnzDfZi9");

const StripeCheckoutForm = ({ orderDetails, cartItems, onPaymentSuccess }) => {

  return (
    <div className="my-4">
      <button
        type="button"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={() => {

          onPaymentSuccess();
        }}
      >
        Pay with Card (Stripe)
      </button>
      <p className="text-xs mt-2 text-gray-500">Stripe test mode. No real payment processed.</p>
    </div>
  );
};

const OrderPage = () => {
  const router = useRouter();
  const { cartItems, products, getCartAmount, getCartCount } = useAppContext();
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    phone: "",
    paymentMode: "COD",
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [showStripe, setShowStripe] = useState(false);

  useEffect(() => {
    setShowStripe(orderDetails.paymentMode === "Card");
  }, [orderDetails.paymentMode]);

  const handleOrderInput = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setIsPlacingOrder(true);
    window.sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    window.sessionStorage.setItem("orderItems", JSON.stringify(cartItems));
    setTimeout(() => {
      setIsPlacingOrder(false);
      router.push("/order-placed");
    }, orderDetails.paymentMode === "COD" ? 800 : 2000);
  };

  const handleStripeSuccess = () => {
    // Simulate storing and redirecting after Stripe payment
    window.sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    window.sessionStorage.setItem("orderItems", JSON.stringify(cartItems));
    router.push("/order-placed");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">Review Your Order</h1>
        {/* Cart Items Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Items in your order ({getCartCount()})</h2>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Product</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Price</th>
                <th className="py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartItems).map((itemId) => {
                const product = products.find((product) => product._id === itemId);
                if (!product || cartItems[itemId] <= 0) return null;
                return (
                  <tr key={itemId} className="border-b">
                    <td className="py-2 flex items-center gap-2">
                      <Image src={product.image[0]} alt={product.name} width={48} height={48} className="rounded w-12 h-12 object-cover" />
                      <span>{product.name}</span>
                    </td>
                    <td className="py-2 text-center">{cartItems[itemId]}</td>
                    <td className="py-2 text-center">₹{product.offerPrice}</td>
                    <td className="py-2 text-center">₹{product.offerPrice * cartItems[itemId]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end text-lg font-semibold">
            Total: <span className="ml-2 text-orange-600">₹{getCartAmount()}</span>
          </div>
        </div>
        {/* Order Details Form */}
        <form onSubmit={handleOrderSubmit} className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Shipping & Payment Details</h2>
          <label className="block mb-3 font-medium">Name
            <input required name="name" value={orderDetails.name} onChange={handleOrderInput} className="w-full border p-2 mt-1 rounded" />
          </label>
          <label className="block mb-3 font-medium">Address
            <textarea required name="address" value={orderDetails.address} onChange={handleOrderInput} className="w-full border p-2 mt-1 rounded" />
          </label>
          <label className="block mb-3 font-medium">Phone Number
            <input required name="phone" value={orderDetails.phone} onChange={handleOrderInput} className="w-full border p-2 mt-1 rounded" />
          </label>
          <label className="block mb-3 font-medium">Mode of Payment
            <select name="paymentMode" value={orderDetails.paymentMode} onChange={handleOrderInput} className="w-full border p-2 mt-1 rounded">
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Credit/Debit Card</option>
            </select>
          </label>
          {/* Show Stripe when Card is selected */}
          {showStripe ? (
            <Elements stripe={stripePromise}>
              <StripeCheckoutForm orderDetails={orderDetails} cartItems={cartItems} onPaymentSuccess={handleStripeSuccess} />
            </Elements>
          ) : (
            <button type="submit" disabled={isPlacingOrder} className="w-full bg-orange-600 text-white py-2 mt-4 rounded hover:bg-orange-700">
              {isPlacingOrder ? (orderDetails.paymentMode === "COD" ? "Placing Order..." : "Processing Payment...") : "Confirm & Pay"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
