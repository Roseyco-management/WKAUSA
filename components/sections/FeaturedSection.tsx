import Image from "next/image";
import Link from "next/link";

export function FeaturedSection() {
  return (
    <section className="bg-white py-8">
      {/* Red banner header */}
      <div className="bg-wka-red py-3 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          Featured Event, Fighter & Gym of the Month
        </h2>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Featured Event */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-wka-red mb-4 uppercase">Featured Event</h3>
            <Link href="/events" className="block group">
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/logos/csc-logo.png"
                  alt="Featured Event - CSC"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform"
                />
              </div>
              <h4 className="font-bold text-gray-900">CSC Combat Sports Challenge</h4>
              <p className="text-gray-600 text-sm">January 2025 - Richmond, VA</p>
            </Link>
          </div>

          {/* Fighter of the Month */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-wka-red mb-4 uppercase">Fighter of the Month</h3>
            <Link href="/rankings" className="block group">
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Image
                    src="/logos/wka-logo.png"
                    alt="Fighter of the Month"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <span className="text-white text-lg font-bold">Coming Soon</span>
                </div>
              </div>
              <h4 className="font-bold text-gray-900">To Be Announced</h4>
              <p className="text-gray-600 text-sm">Check back for updates</p>
            </Link>
          </div>

          {/* Gym of the Month */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-wka-red mb-4 uppercase">Gym of the Month</h3>
            <Link href="/contact" className="block group">
              <div className="relative aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Image
                    src="/logos/wka-logo.png"
                    alt="Gym of the Month"
                    width={100}
                    height={100}
                    className="mb-4"
                  />
                  <span className="text-white text-lg font-bold">Coming Soon</span>
                </div>
              </div>
              <h4 className="font-bold text-gray-900">To Be Announced</h4>
              <p className="text-gray-600 text-sm">Check back for updates</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
