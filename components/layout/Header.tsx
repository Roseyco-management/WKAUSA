"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, User, Shield, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
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
  { name: "Store", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

// Secondary links shown only on desktop or in mobile "More" section
const secondaryNav: NavItem[] = [
  { name: "Suspensions", href: "/suspensions" },
  { name: "Links", href: "/links" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
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
            {[...navigation, ...secondaryNav].map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => 'children' in item && item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-gray-700 hover:text-wka-red transition-colors flex items-center gap-1",
                    'children' in item && item.children && "pr-1"
                  )}
                >
                  {item.name}
                  {'children' in item && item.children && (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </Link>

                {/* Dropdown menu */}
                {'children' in item && item.children && openDropdown === item.name && (
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
            <div className="pb-4 pt-3">
              {/* Prominent Login Button */}
              <div className="px-4 pb-4 mb-3 border-b border-gray-100">
                <Link
                  href="/client/login"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-white bg-wka-red hover:bg-red-700 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  Fighter Login
                </Link>
              </div>

              {/* Main Navigation - Simplified */}
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-3 py-2.5 text-base font-medium text-gray-700 hover:text-wka-red hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              mobileDropdown === item.name && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileDropdown === item.name && (
                          <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-wka-red transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:text-wka-red hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Secondary Links */}
              <div className="mt-3 pt-3 border-t border-gray-100 px-2">
                <div className="flex gap-2">
                  {secondaryNav.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex-1 text-center px-3 py-2 text-sm text-gray-500 hover:text-wka-red hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/admin/login"
                    className="flex-1 text-center px-3 py-2 text-sm text-gray-500 hover:text-wka-red hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
