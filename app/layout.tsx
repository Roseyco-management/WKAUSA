import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WKA USA | World Kickboxing Association",
  description:
    "The World Kickboxing Association (WKA) USA - The oldest and largest kickboxing organization with over 107 countries. Sanctioning amateur and professional combat sports including Kickboxing, Muay Thai, MMA, and more.",
  keywords: [
    "WKA",
    "World Kickboxing Association",
    "kickboxing",
    "muay thai",
    "MMA",
    "combat sports",
    "martial arts",
    "USA",
  ],
  authors: [{ name: "WKA USA" }],
  openGraph: {
    title: "WKA USA | World Kickboxing Association",
    description:
      "The oldest and largest kickboxing organization with over 107 countries.",
    url: "https://wkausa.com",
    siteName: "WKA USA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
