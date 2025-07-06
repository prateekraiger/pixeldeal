"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useState, useEffect } from "react";
// Correct import for useRouter
import { useRouter } from "next/navigation";
import Background from "@/components/common/background";

const OrderPlaced = () => {
  // Correct way to get the router instance
  const router = useRouter();
  const { products } = useAppContext();

  const [orderDetails, setOrderDetails] = useState(null);
  // Initialize orderItems as an array since that's the structure
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const details = window.sessionStorage.getItem("orderDetails");
    const items = window.sessionStorage.getItem("orderItems");
    console.log("orderDetails from sessionStorage:", details);
    console.log("orderItems from sessionStorage:", items);
    if (details && items) {
      try {
        setOrderDetails(JSON.parse(details));
        // Ensure items are parsed correctly, default to empty array if error
        setOrderItems(JSON.parse(items) || []);
      } catch (error) {
        console.error("Error parsing sessionStorage data:", error);
        setOrderItems([]); // Set to empty array on error
      }
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Now router should be defined
      router.push("/my-orders");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]); // Add router to dependency array

  // Check if orderDetails exists AND orderItems is an array
  if (!orderDetails || !Array.isArray(orderItems)) {
    return (
      <Background>
        <div className="flex justify-center items-center h-screen">
          Loading order details or order not found...
        </div>
      </Background>
    );
  }

  return (
    <Background>
      <div className="min-h-screen flex flex-col justify-center items-center gap-5 p-4">
        <div className="flex justify-center items-center relative mb-4">
          <Image
            className="absolute p-5"
            src={assets.checkmark}
            alt=""
            width={80}
            height={80}
          />
          <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-green-500 border-gray-200"></div>
        </div>
        <div className="text-center text-2xl font-semibold text-green-700 mb-4">
          Order Placed Successfully!
        </div>

        {/* Main Content Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          {/* Order Summary Table */}
          <h2 className="text-xl font-bold mb-3 text-orange-600 border-b pb-2">
            Order Summary
          </h2>
          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left font-semibold">Product</th>
                <th className="py-2 font-semibold">Qty</th>
                <th className="py-2 font-semibold">Price</th>
                <th className="py-2 font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* Check array length */}
              {orderItems.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No products found in your order.
                  </td>
                </tr>
              )}
              {/* Map directly over the orderItems array */}
              {orderItems.map((item) => {
                // Find product using item.productId
                const product = products.find((p) => p._id === item.productId);
                // Check quantity from item.quantity
                if (!product || item.quantity <= 0) return null;
                return (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 flex items-center gap-3">
                      <Image
                        src={product.image[0]}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="rounded w-10 h-10 object-cover border"
                      />
                      <span className="font-medium">{product.name}</span>
                    </td>
                    {/* Use item.quantity */}
                    <td className="py-2 text-center">{item.quantity}</td>
                    <td className="py-2 text-center">₹{product.offerPrice}</td>
                    {/* Use item.quantity */}
                    <td className="py-2 text-center font-semibold">
                      ₹{product.offerPrice * item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end text-lg font-bold mb-6">
            Total:{" "}
            <span className="ml-2 text-orange-600">
              ₹
              {orderItems.reduce((sum, item) => {
                const product = products.find((p) => p._id === item.productId);
                // Use item.quantity
                return sum + (product ? product.offerPrice * item.quantity : 0);
              }, 0)}
            </span>
          </div>

          {/* Delivery Details - No changes needed here if phone fix was applied */}
          {/* ... */}
        </div>
        {/* End Main Content Card */}

        <div className="text-gray-500 mt-4 text-sm">
          You will be redirected to My Orders in a few seconds...
        </div>
      </div>
    </Background>
  );
};

export default OrderPlaced;
