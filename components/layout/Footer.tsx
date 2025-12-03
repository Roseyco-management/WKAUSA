import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const quickLinksLeft = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Sports", href: "/sports" },
  { name: "Athletes", href: "/rankings" },
  { name: "News", href: "/events" },
  { name: "Events", href: "/events" },
  { name: "Registration", href: "/contact" },
];

const quickLinksRight = [
  { name: "Sponsorship", href: "/contact#sponsorship" },
  { name: "Training", href: "/sports#training" },
  { name: "Regulations", href: "/sports#regulations" },
  { name: "Store", href: "/shop" },
  { name: "Links", href: "/links" },
  { name: "Contact Us", href: "/contact" },
  { name: "Refund Policy", href: "/contact#refund" },
];

const sponsors = [
  { name: "Glory", logo: "GLORY" },
  { name: "Athlon Rub", logo: "athlon" },
  { name: "Combat Corner", logo: "COMBATCRNR" },
  { name: "Upper", logo: "UPPER" },
  { name: "Sucker Punch", logo: "SuckerPunch" },
  { name: "Muay Thai Addict", logo: "MTA" },
];

export function Footer() {
  return (
    <footer>
      {/* Sponsors Section */}
      <div className="bg-white py-8 border-t-4 border-wka-red">
        <div className="container-custom">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8 uppercase">
            Sponsors
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="text-gray-600 font-bold text-lg hover:text-wka-red transition-colors cursor-pointer"
              >
                {sponsor.logo}
              </div>
            ))}
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>

      {/* Main Footer - White background */}
      <div className="bg-white border-t-4 border-wka-red">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & Social */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/logos/wka-logo.png"
                alt="WKA USA"
                width={120}
                height={120}
                className="mb-4"
              />
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-wka-red hover:text-white transition-colors text-gray-600"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-wka-red hover:text-white transition-colors text-gray-600"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded hover:bg-wka-red hover:text-white transition-colors text-gray-600"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {quickLinksLeft.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-wka-red transition-colors flex items-center gap-1"
                      >
                        <span className="text-wka-red">›</span> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {quickLinksRight.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-wka-red transition-colors flex items-center gap-1"
                      >
                        <span className="text-wka-red">›</span> {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-wka-red font-semibold">WKA USA Home Office</p>
                  <p className="text-gray-600">8032-C West Broad Street Richmond, VA 23294 USA</p>
                </div>
                <div>
                  <p className="text-wka-red font-semibold">Telephone:</p>
                  <p className="text-gray-600">804-525-4780</p>
                </div>
                <div>
                  <p className="text-wka-red font-semibold">Fax:</p>
                  <p className="text-gray-600">(804) 977-6249</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-wka-red py-3">
          <div className="container-custom">
            <p className="text-center text-sm text-white">
              © 2018 - {new Date().getFullYear()}{" "}
              <span className="font-semibold">WKA USA</span>. Web Design by{" "}
              <a href="https://www.roseyco.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                RoseyCo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
