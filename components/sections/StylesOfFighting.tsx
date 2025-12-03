import Link from "next/link";
import { Swords, Target, Flame, Shield, Zap, Users } from "lucide-react";

const disciplines = [
  {
    name: "Full Contact",
    description: "Original American kickboxing format with above-the-waist kicks",
    icon: Swords,
  },
  {
    name: "International Rules",
    description: "K-1 style kickboxing with low kicks allowed",
    icon: Target,
  },
  {
    name: "Muay Thai",
    description: "The art of eight limbs - punches, kicks, elbows, and knees",
    icon: Flame,
  },
  {
    name: "MMA",
    description: "Mixed Martial Arts combining striking and grappling",
    icon: Shield,
  },
  {
    name: "K-1 Kickboxing",
    description: "Japanese-style kickboxing with powerful striking",
    icon: Zap,
  },
  {
    name: "Semi-Contact",
    description: "Point-based fighting with controlled techniques",
    icon: Users,
  },
];

export function StylesOfFighting() {
  return (
    <section className="bg-wka-black py-12">
      {/* Section header */}
      <div className="border-b-4 border-wka-red pb-3 mb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          Styles of Fighting
        </h2>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {disciplines.map((discipline) => (
            <Link
              key={discipline.name}
              href="/sports"
              className="group text-center p-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-wka-red/20 flex items-center justify-center group-hover:bg-wka-red transition-colors">
                <discipline.icon className="h-8 w-8 text-wka-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{discipline.name}</h3>
              <p className="text-gray-400 text-xs leading-tight">{discipline.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/sports"
            className="inline-block bg-wka-red text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-wka-red-dark transition-colors"
          >
            View All Sports
          </Link>
        </div>
      </div>
    </section>
  );
}
