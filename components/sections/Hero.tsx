import Link from "next/link";
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-wka-black overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('/images/hero-ring.jpg')`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-wka-red/20 blur-[100px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-wka-red/10 blur-[120px]" />
      </div>

      <div className="container-custom relative flex min-h-[80vh] items-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-wka-red/10 px-4 py-2 text-sm font-medium text-wka-red mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wka-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-wka-red"></span>
              </span>
              Next Event: CSC 44 - December 14, 2024
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              World Kickboxing
              <span className="block text-wka-red">Association USA</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              The oldest and largest kickboxing organization of its kind, with over 107 countries
              in its membership. Sanctioning amateur and professional combat sports across
              Light Contact, Full Contact, Kickboxing, Muay Thai, MMA, and Submission Grappling.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/events" className="btn-primary flex items-center justify-center gap-2">
                Upcoming Events
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About WKA
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
              <div>
                <div className="text-3xl font-bold text-wka-red">107+</div>
                <div className="mt-1 text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wka-red">47+</div>
                <div className="mt-1 text-sm text-gray-400">Years Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-wka-red">6</div>
                <div className="mt-1 text-sm text-gray-400">Disciplines</div>
              </div>
            </div>
          </div>

          {/* Featured Event Card */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="rounded-xl bg-gray-900 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge bg-wka-red text-white">Featured Event</span>
                  <span className="text-sm text-gray-400">Combat Sports Challenge</span>
                </div>

                <h3 className="text-2xl font-bold text-white">CSC 44</h3>
                <p className="text-gray-400 mt-1">Professional & Amateur Fight Card</p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="h-5 w-5 text-wka-red" />
                    <span>December 14, 2024 @ 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="h-5 w-5 text-wka-red" />
                    <span>Richmond, VA</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Trophy className="h-5 w-5 text-wka-red" />
                    <span>Muay Thai, MMA, Kickboxing</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="btn-primary flex-1 text-center"
                  >
                    Get Tickets
                  </a>
                  <Link href="/events/csc-44" className="btn-secondary">
                    Details
                  </Link>
                </div>

                {/* Mini fight card preview */}
                <div className="mt-6 border-t border-gray-800 pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Main Event</p>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-white font-semibold">Wilson</div>
                      <div className="text-xs text-gray-500">8-2-0</div>
                    </div>
                    <div className="text-wka-red font-bold">VS</div>
                    <div className="text-center">
                      <div className="text-white font-semibold">Urena</div>
                      <div className="text-xs text-gray-500">6-1-0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
