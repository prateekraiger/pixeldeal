import React from 'react';
import Link from 'next/link';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname()
    const menuItems = [
        { name: 'Add Product', path: '/admin', icon: assets.add_icon },
        { name: 'Product List', path: '/admin/product-list', icon: assets.product_list_icon },
        { name: 'Orders', path: '/admin/orders', icon: assets.order_icon },
    ];

    return (
        <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col'>
            {menuItems.map((item) => {

                const isActive = pathname === item.path;

                return (
                    <Link href={item.path} key={item.name} passHref>
                        <div
                            className={
                                `flex items-center py-3 px-4 gap-3 ${isActive
                                    ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }
                        >
                            <Image
                                src={item.icon}
                                alt={`${item.name.toLowerCase()}_icon`}
                                className="w-7 h-7"
                            />
                            <p className='md:block hidden text-center'>{item.name}</p>
                        </div>
                    </Link>
                );
            })}
            {/* Logout Button */}
            <button
                onClick={() => {
                    if (typeof window !== "undefined") {
                        localStorage.removeItem("adminLoggedIn");
                        window.location.href = "/admin/login";
                    }
                }}
                className="mt-8 mx-4 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm"
            >
                Logout
            </button>
        </div>
    );
};

export default SideBar;
