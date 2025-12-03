"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import ChatBot from "@/components/admin/ChatBot";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check if we're on the login page
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    // Skip auth check for login page
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    // Check for auth cookie
    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const authCookie = cookies.find((c) => c.trim().startsWith("wka_admin_auth="));

      if (authCookie) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/admin/login");
      }
    };

    checkAuth();
  }, [pathname, router, isLoginPage]);

  // Show nothing while checking auth
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wka-red"></div>
      </div>
    );
  }

  // Login page renders just children (no sidebar)
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Protected pages render with full admin layout
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="xl:ml-[280px]">
        <AdminHeader />
        <main className="p-4 md:p-6">{children}</main>
      </div>
      <ChatBot />
    </div>
  );
}
