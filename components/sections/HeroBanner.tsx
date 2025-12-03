import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/scrimmage/scrimmage-1.jpg"
          alt="WKA Fight Action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            The World<br />
            <span className="text-wka-red">Kickboxing</span><br />
            Association
          </h1>
          <p className="text-gray-300 mt-6 text-lg md:text-xl">
            The oldest and largest kickboxing sanctioning body in the United States. Over 107 countries worldwide.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/events"
              className="bg-wka-red text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-wka-red-dark transition-colors"
            >
              View Events
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-white hover:text-wka-black transition-colors"
            >
              Get Sanctioned
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
