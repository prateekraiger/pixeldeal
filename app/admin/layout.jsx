"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if user is logged in as admin
    const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    
    // If not on login page and not logged in, redirect to login
    if (!isAdminLoggedIn && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setIsLoading(false);
    }
  }, [pathname, router]);

  // Show loading state while checking authentication
  if (isLoading && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}
