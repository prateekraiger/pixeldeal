'use client'
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets"; // Removed orderDummyData import
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Loading from "@/components/Loading";

const MyOrders = () => {

    // Get user from context
    const { currency, user } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Define fetchOrders to accept userId or get it from context
    const fetchOrders = async () => {
        // Check if user and user._id exist before fetching
        if (!user?._id) {
            console.log("User not logged in, cannot fetch orders.");
            setLoading(false);
            setOrders([]); // Clear orders if user logs out
            return;
        }
        setLoading(true); // Set loading true before fetch
        try {
            // Use user._id in the fetch URL
            const res = await fetch(`/api/orders?userId=${user._id}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setOrders(data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            setOrders([]); // Clear orders on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch orders when the component mounts or user changes
        fetchOrders();
    }, [user]); // Add user as a dependency

    return (
        <>
            {/* Adjusted padding for different screen sizes */}
            <div className="flex flex-col justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-6 min-h-screen bg-gray-50">
                <div className="space-y-5">
                    <h2 className="text-xl md:text-2xl font-semibold mt-6 text-gray-800">My Orders</h2>
                    {!user && !loading && <p className="text-center text-gray-600 py-4">Please log in to see your orders.</p>}
                    {loading ? <Loading /> : (
                        <div className="max-w-5xl mx-auto border-t border-gray-200 text-sm">
                            {user && orders.length === 0 && !loading && <p className="p-5 text-center text-gray-500">You have no orders yet.</p>}
                            {orders.map((order, index) => (
                                // Use flex-col on small screens, md:flex-row for medium and up
                                <div key={order._id || index} className="flex flex-col md:flex-row gap-4 md:gap-5 justify-between p-4 md:p-5 border-b border-gray-200 bg-white rounded-md shadow-sm mb-4">
                                    {/* Section 1: Icon and Items */}
                                    <div className="flex items-start gap-3 md:gap-4 flex-grow md:flex-none md:w-2/5">
                                        <Image
                                            className="w-10 h-10 md:w-12 md:h-12 object-contain mt-1"
                                            src={assets.parcel_icon}
                                            alt="order_icon"
                                            width={48} height={48} // Added width/height for Image component
                                        />
                                        <div className="flex flex-col gap-1">
                                            {order.items?.map((item, itemIndex) => (
                                                <p key={itemIndex} className="text-gray-700 text-xs sm:text-sm">
                                                    {item.product?.name || 'Product Name Missing'} x {item.quantity}
                                                </p>
                                            ))}
                                            {(!order.items || order.items.length === 0) && <p className="text-gray-500 text-xs sm:text-sm">No items in this order.</p>}
                                        </div>
                                    </div>
                                    {/* Section 2: Item Count and Amount */}
                                    {/* Adjusted text size and alignment */}
                                    <div className="flex justify-between md:flex-col md:justify-start md:items-start md:flex-none md:w-1/5 text-xs sm:text-sm pt-2 md:pt-0 border-t md:border-none mt-2 md:mt-0">
                                        <p className="text-gray-600">Items: <span className='font-medium text-gray-800'>{order.items?.length || 0}</span></p>
                                        <p className="text-gray-800 font-semibold">{currency}{order.amount}</p>
                                    </div>
                                    {/* Section 3: Status and Track Button */}
                                    {/* Adjusted text size and alignment */}
                                    <div className="flex justify-between items-center md:flex-col md:items-end md:justify-start md:flex-none md:w-1/5 pt-2 md:pt-0 border-t md:border-none mt-2 md:mt-0">
                                        <p className="text-orange-600 font-semibold text-xs sm:text-sm">● {order.status}</p>
                                        <button className="mt-1 md:mt-3 bg-orange-100 text-orange-600 px-3 py-1 rounded text-xs font-medium hover:bg-orange-200 whitespace-nowrap">Track Order</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MyOrders;
