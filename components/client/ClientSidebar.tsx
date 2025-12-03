"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  FileText,
  Shield,
  Calendar,
  Trophy,
  Settings,
  Menu,
  X,
  HelpCircle,
} from "lucide-react";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    name: "Dashboard",
    path: "/client",
  },
  {
    icon: <User className="w-5 h-5" />,
    name: "My Profile",
    path: "/client/profile",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    name: "My Medicals",
    path: "/client/medicals",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    name: "My License",
    path: "/client/license",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    name: "Events",
    path: "/client/events",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    name: "Fight Record",
    path: "/client/record",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    name: "Support",
    path: "/client/support",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    name: "Settings",
    path: "/client/settings",
  },
];

export default function ClientSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

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
        className={`fixed top-0 left-0 z-50 h-full w-[260px] bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <Link href="/client">
            <Image
              src="/logos/wka-logo.png"
              alt="WKA USA"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-wka-red rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">Fighter Account</p>
              <p className="text-xs text-gray-500">Active Member</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-160px)]">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-wka-red text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
