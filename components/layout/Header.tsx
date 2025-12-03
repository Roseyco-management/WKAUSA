"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, User, Shield, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "About WKA USA", href: "/about" },
      { name: "WKA History", href: "/about#history" },
      { name: "Brian Crenshaw", href: "/about#representative" },
    ],
  },
  { name: "Sports", href: "/sports" },
  {
    name: "Events",
    href: "/events",
    children: [
      { name: "Upcoming Events", href: "/events" },
      { name: "Results", href: "/results" },
      { name: "Sanctioning", href: "/events#sanctioning" },
    ],
  },
  { name: "Athletes", href: "/rankings" },
  { name: "Championships", href: "/championships" },
  { name: "Suspensions", href: "/suspensions" },
  { name: "Store", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "Links", href: "/links" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="container-custom" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/wka-logo.png"
                alt="WKA USA"
                width={70}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-gray-700 hover:text-wka-red transition-colors flex items-center gap-1",
                    item.children && "pr-1"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute left-0 top-full z-10 mt-0 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wka-red"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Login Button with Dropdown */}
            <div
              className="relative ml-4 pl-4 border-l border-gray-200"
              onMouseEnter={() => setLoginDropdownOpen(true)}
              onMouseLeave={() => setLoginDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-wka-red hover:bg-red-700 rounded-lg transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Login
                <ChevronDown className="h-3 w-3" />
              </button>

              {loginDropdownOpen && (
                <div className="absolute right-0 top-full z-10 pt-2 w-48">
                  <div className="rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5">
                    <Link
                      href="/client/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wka-red"
                    >
                      <User className="h-4 w-4" />
                      Fighter Login
                    </Link>
                    <Link
                      href="/admin/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wka-red"
                    >
                      <Shield className="h-4 w-4" />
                      Admin Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-wka-red"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-500 hover:text-wka-red"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Login Section */}
              <div className="border-t border-gray-200 pt-4 mt-4 px-3">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">Login</p>
                <Link
                  href="/client/login"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-wka-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  Fighter Login
                </Link>
                <Link
                  href="/admin/login"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-wka-red"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Shield className="h-5 w-5" />
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
