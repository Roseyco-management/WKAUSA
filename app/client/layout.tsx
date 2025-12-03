"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ClientSidebar from "@/components/client/ClientSidebar";
import ClientHeader from "@/components/client/ClientHeader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const isLoginPage = pathname === "/client/login";

  useEffect(() => {
    if (isLoginPage) {
      setIsAuthenticated(true);
      return;
    }

    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const authCookie = cookies.find((c) => c.trim().startsWith("wka_client_auth="));

      if (authCookie) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/client/login");
      }
    };

    checkAuth();
  }, [pathname, router, isLoginPage]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wka-red"></div>
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ClientSidebar />
      <div className="xl:ml-[260px]">
        <ClientHeader />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
