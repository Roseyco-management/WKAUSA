import Link from "next/link";

export function AboutSection() {
  return (
    <section className="bg-white py-12">
      {/* Red banner header */}
      <div className="bg-wka-red py-3 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          About Us
        </h2>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed mb-6">
            The WKA was founded in 1976 and has established itself as the oldest and largest kickboxing
            sanctioning body in the United States. We are the only American organization to hold world
            titles in Full Contact Kickboxing (the original American format), International Rules
            (Unified/K-1 style), Muay Thai, and MMA.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            It is our goal to help further the development of kickboxing and MMA in the United States
            through educational events, development leagues, and world-class professional events. We
            provide a platform for fighters of all levels to compete in a safe and professionally
            sanctioned environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            The WKA USA is headquartered in Richmond, Virginia, and provides sanctioning services,
            fighter rankings, and event support across the nation. Led by Brian Crenshaw, WKA USA
            continues the legacy of excellence established by the organization's founders.
          </p>
          <Link
            href="/about"
            className="inline-block bg-wka-red text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-wka-red-dark transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
