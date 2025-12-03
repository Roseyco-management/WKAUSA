"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Shield,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Settings,
  Bell,
} from "lucide-react";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    name: "Dashboard",
    path: "/admin",
  },
  {
    icon: <Users className="w-5 h-5" />,
    name: "Fighters",
    subItems: [
      { name: "All Fighters", path: "/admin/fighters" },
      { name: "Add Fighter", path: "/admin/fighters/add" },
      { name: "Onboarding", path: "/admin/fighters/onboarding" },
    ],
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "Medicals",
    subItems: [
      { name: "Submit Medicals", path: "/admin/medicals/submit" },
      { name: "Medical Records", path: "/admin/medicals" },
      { name: "Pending Review", path: "/admin/medicals/pending" },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    name: "Licenses",
    subItems: [
      { name: "Apply for License", path: "/admin/licenses/apply" },
      { name: "All Licenses", path: "/admin/licenses" },
      { name: "Renewals", path: "/admin/licenses/renewals" },
    ],
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    name: "Support",
    path: "/admin/support",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Settings",
    path: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const isSubmenuActive = (subItems: { path: string }[]) =>
    subItems.some((item) => pathname === item.path);

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md xl:hidden"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <Link href="/admin">
            <Image
              src="/logos/wka-logo.png"
              alt="WKA USA"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-80px)]">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleSubmenuToggle(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isSubmenuActive(item.subItems) || openSubmenu === item.name
                          ? "bg-wka-red/10 text-wka-red"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.name && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              href={subItem.path}
                              onClick={() => setIsMobileOpen(false)}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                isActive(subItem.path)
                                  ? "bg-wka-red text-white"
                                  : "text-gray-600 hover:bg-gray-100"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path!}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path!)
                        ? "bg-wka-red text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
