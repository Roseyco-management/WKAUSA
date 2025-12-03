import Image from "next/image";
import Link from "next/link";

const scrimmageImages = [
  { src: "/images/scrimmage/scrimmage-1.jpg", alt: "WKA Scrimmage League Action 1" },
  { src: "/images/scrimmage/scrimmage-2.jpg", alt: "WKA Scrimmage League Action 2" },
  { src: "/images/scrimmage/scrimmage-3.jpg", alt: "WKA Scrimmage League Action 3" },
  { src: "/images/scrimmage/scrimmage-4.jpg", alt: "WKA Scrimmage League Action 4" },
  { src: "/images/scrimmage/scrimmage-5.jpg", alt: "WKA Scrimmage League Action 5" },
  { src: "/images/scrimmage/scrimmage-6.jpg", alt: "WKA Scrimmage League Action 6" },
];

export function ScrimmageLeague() {
  return (
    <section className="bg-white py-8">
      {/* Red banner header */}
      <div className="bg-wka-red py-3 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          WKA Scrimmage League
        </h2>
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            The WKA Scrimmage League provides a development platform for amateur fighters to gain
            experience in a controlled, educational environment. These events focus on skill
            development and technique refinement.
          </p>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {scrimmageImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-block bg-wka-black text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-wka-red transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
