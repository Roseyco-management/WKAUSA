import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Trophy, Crown, Medal, Calendar } from "lucide-react";

// Sample championships data
const championships = [
  {
    id: 1,
    title: "WKA USA National MMA Championship",
    weightClass: "Lightweight (155 lbs)",
    discipline: "MMA",
    champion: "Antwan Britt",
    gym: "HybRit Academy",
    record: "9-1-0",
    championSince: "September 2024",
    defenses: 1,
    region: "National",
  },
  {
    id: 2,
    title: "WKA USA National Muay Thai Championship",
    weightClass: "Middleweight (185 lbs)",
    discipline: "Muay Thai",
    champion: "Tyler VanPoots",
    gym: "Combat Sports Center",
    record: "12-3-0",
    championSince: "November 2024",
    defenses: 0,
    region: "National",
  },
  {
    id: 3,
    title: "WKA USA National Kickboxing Championship",
    weightClass: "Welterweight (170 lbs)",
    discipline: "Kickboxing",
    champion: "VACANT",
    gym: null,
    record: null,
    championSince: null,
    defenses: 0,
    region: "National",
  },
  {
    id: 4,
    title: "WKA USA Regional K1 Championship",
    weightClass: "Featherweight (145 lbs)",
    discipline: "K1",
    champion: "David Karzai",
    gym: "HybRit Academy",
    record: "5-1-0",
    championSince: "August 2024",
    defenses: 2,
    region: "Regional",
  },
  {
    id: 5,
    title: "WKA USA Regional MMA Championship",
    weightClass: "Welterweight (170 lbs)",
    discipline: "MMA",
    champion: "Marcus Wilson",
    gym: "Richmond MMA",
    record: "8-2-0",
    championSince: "October 2024",
    defenses: 0,
    region: "Regional",
  },
  {
    id: 6,
    title: "WKA USA National Muay Thai Championship",
    weightClass: "Welterweight (170 lbs)",
    discipline: "Muay Thai",
    champion: "Mike Kincaid",
    gym: "Combat Sports Center",
    record: "10-2-1",
    championSince: "July 2024",
    defenses: 1,
    region: "National",
  },
];

const titleHistory = [
  {
    title: "WKA USA National MMA Championship - Lightweight",
    history: [
      { champion: "Antwan Britt", period: "Sep 2024 - Present", defenses: 1 },
      { champion: "James Rodriguez", period: "Mar 2024 - Sep 2024", defenses: 0 },
      { champion: "Kevin Thompson", period: "Nov 2023 - Mar 2024", defenses: 2 },
    ],
  },
  {
    title: "WKA USA National Muay Thai Championship - Middleweight",
    history: [
      { champion: "Tyler VanPoots", period: "Nov 2024 - Present", defenses: 0 },
      { champion: "VACANT", period: "Aug 2024 - Nov 2024", defenses: 0 },
      { champion: "Ryan Mitchell", period: "Jan 2024 - Aug 2024", defenses: 1 },
    ],
  },
];

export default function ChampionshipsPage() {
  const activeChampions = championships.filter((c) => c.champion !== "VACANT").length;
  const vacantTitles = championships.filter((c) => c.champion === "VACANT").length;

  return (
    <>
      <PageBanner
        title="Championships"
        subtitle="WKA USA title holders and championship history across all disciplines."
      />

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-wka-red">{championships.length}</div>
              <div className="text-sm text-gray-500">Total Titles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{activeChampions}</div>
              <div className="text-sm text-gray-500">Active Champions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600">{vacantTitles}</div>
              <div className="text-sm text-gray-500">Vacant Titles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Champions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Current Champions"
            subtitle="WKA USA title holders across all weight classes and disciplines."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {championships.map((title) => (
              <div
                key={title.id}
                className={`card overflow-hidden ${title.champion === "VACANT" ? "border-dashed border-2" : ""}`}
              >
                {/* Header */}
                <div className="bg-wka-black p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge bg-wka-red text-white text-xs">{title.region}</span>
                    <span className="badge bg-gray-700 text-white text-xs">{title.discipline}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm">{title.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{title.weightClass}</p>
                </div>

                {/* Champion Info */}
                <div className="p-6">
                  {title.champion === "VACANT" ? (
                    <div className="text-center py-4">
                      <Trophy className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                      <p className="text-lg font-bold text-gray-400">VACANT</p>
                      <p className="text-sm text-gray-500 mt-2">Title available at next event</p>
                      <Link href="/events" className="btn-primary mt-4 text-sm">
                        View Upcoming Events
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-20 rounded-lg bg-gray-200 shrink-0 flex items-center justify-center">
                          <Crown className="h-8 w-8 text-yellow-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{title.champion}</h4>
                          <p className="text-sm text-gray-500">{title.gym}</p>
                          <p className="text-sm font-semibold text-wka-red mt-1">{title.record}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Champion Since</span>
                          <p className="font-medium text-gray-900">{title.championSince}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Defenses</span>
                          <p className="font-medium text-gray-900">{title.defenses}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Title History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Title History"
            subtitle="Historical lineage of WKA USA championships."
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {titleHistory.map((title, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Medal className="h-5 w-5 text-wka-red" />
                    {title.title}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {title.history.map((reign, reignIndex) => (
                    <div
                      key={reignIndex}
                      className={`px-6 py-4 flex items-center justify-between ${
                        reignIndex === 0 ? "bg-yellow-50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {reignIndex === 0 && (
                          <Crown className="h-5 w-5 text-yellow-500" />
                        )}
                        <div>
                          <p className={`font-medium ${reign.champion === "VACANT" ? "text-gray-400" : "text-gray-900"}`}>
                            {reign.champion}
                          </p>
                          <p className="text-sm text-gray-500">{reign.period}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="badge-gray">
                          {reign.defenses} defense{reign.defenses !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-wka-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Want to Compete for a Title?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Earn your ranking by competing in WKA USA sanctioned events. Top contenders get title shots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rankings" className="btn-primary">
              View Rankings
            </Link>
            <Link href="/events" className="btn-outline">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
