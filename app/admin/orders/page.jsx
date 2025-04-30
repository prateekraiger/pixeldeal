"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerOrders = async () => {
    setOrders([
      {
        _id: "order1",
        items: [
          {
            product: {
              name: "Apple AirPods Pro",
              offerPrice: 19999,
              image: [assets.box_icon],
            },
            quantity: 1,
          },
          {
            product: {
              name: "Sony WF-1000XM5",
              offerPrice: 24990,
              image: [assets.box_icon],
            },
            quantity: 2,
          },
        ],
        amount: 19999 + 2 * 24990,
        address: {
          fullName: "Rahul Sharma",
          area: "Sector 21, Noida",
          city: "Noida",
          state: "UP",
          phoneNumber: "+91 9876543210",
        },
        date: Date.now(),
      },
      {
        _id: "order2",
        items: [
          {
            product: {
              name: "MacBook Pro 16",
              offerPrice: 289900,
              image: [assets.box_icon],
            },
            quantity: 1,
          },
        ],
        amount: 289900,
        address: {
          fullName: "Aditi Verma",
          area: "MG Road, Bengaluru",
          city: "Bengaluru",
          state: "KA",
          phoneNumber: "+91 9123456780",
        },
        date: Date.now() - 86400000,
      },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  return (
    <div className="flex-1 min-h-screen w-full overflow-x-auto flex flex-col justify-between text-sm">
      {loading ? <div>Loading...</div> : <div className="md:p-10 p-4 space-y-5">
        <h2 className="text-lg font-medium">Orders</h2>
        <div className="max-w-4xl rounded-md">
          {orders.map((order, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-gray-300 w-full min-w-[320px]">
              <div className="flex-1 flex gap-5 max-w-80">
                <Image
                  className="max-w-16 max-h-16 object-cover w-full h-auto"
                  src={order.items[0].product.image[0]}
                  alt={order.items[0].product.name}
                  width={64}
                  height={64}
                />
                <p className="flex flex-col gap-3">
                  <span className="font-medium">
                    {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                  </span>
                  <span>Items : {order.items.length}</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="font-medium">{order.address.fullName}</span>
                  <br />
                  <span >{order.address.area}</span>
                  <br />
                  <span>{`${order.address.city}, ${order.address.state}`}</span>
                  <br />
                  <span>{order.address.phoneNumber}</span>
                </p>
              </div>
              <p className="font-medium my-auto">
                {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(order.amount)}
              </p>
              <div>
                <p className="flex flex-col">
                  <span>Method : COD</span>
                  <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                  <span>Payment : Pending</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default Orders;
