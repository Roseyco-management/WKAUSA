"use client";

import { useState } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { AthleteCard } from "@/components/cards/AthleteCard";
import { Trophy, Filter, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const disciplines = [
  { id: "all", name: "All Disciplines" },
  { id: "muay-thai", name: "Muay Thai" },
  { id: "mma", name: "MMA" },
  { id: "kickboxing", name: "Kickboxing" },
  { id: "k1", name: "K1" },
  { id: "grappling", name: "Submission Grappling" },
];

const weightClasses = [
  { id: "all", name: "All Weight Classes" },
  { id: "flyweight", name: "Flyweight (125 lbs)" },
  { id: "bantamweight", name: "Bantamweight (135 lbs)" },
  { id: "featherweight", name: "Featherweight (145 lbs)" },
  { id: "lightweight", name: "Lightweight (155 lbs)" },
  { id: "welterweight", name: "Welterweight (170 lbs)" },
  { id: "middleweight", name: "Middleweight (185 lbs)" },
  { id: "light-heavyweight", name: "Light Heavyweight (205 lbs)" },
  { id: "heavyweight", name: "Heavyweight (265 lbs)" },
];

// Sample athletes data
const athletes = [
  {
    id: "1",
    name: "Antwan Britt",
    nickname: "The Pitbull",
    gym: "HybRit Academy",
    location: "Virginia Beach, VA",
    record: "9-1-0",
    weightClass: "Lightweight",
    discipline: "MMA",
    ranking: 1,
    isChampion: true,
  },
  {
    id: "2",
    name: "Marcus Wilson",
    gym: "Richmond MMA",
    location: "Richmond, VA",
    record: "8-2-0",
    weightClass: "Welterweight",
    discipline: "MMA",
    ranking: 2,
  },
  {
    id: "3",
    name: "Tyler VanPoots",
    nickname: "Thunder",
    gym: "Combat Sports Center",
    location: "Richmond, VA",
    record: "12-3-0",
    weightClass: "Middleweight",
    discipline: "Muay Thai",
    ranking: 1,
    isChampion: true,
  },
  {
    id: "4",
    name: "Jake Hicks",
    gym: "Crenshaw Martial Arts",
    location: "Richmond, VA",
    record: "7-1-0",
    weightClass: "Lightweight",
    discipline: "Kickboxing",
    ranking: 1,
  },
  {
    id: "5",
    name: "Sarah Islam",
    gym: "Elite Combat",
    location: "Norfolk, VA",
    record: "6-2-0",
    weightClass: "Flyweight",
    discipline: "MMA",
    ranking: 3,
  },
  {
    id: "6",
    name: "David Karzai",
    gym: "HybRit Academy",
    location: "Virginia Beach, VA",
    record: "5-1-0",
    weightClass: "Featherweight",
    discipline: "K1",
    ranking: 2,
  },
  {
    id: "7",
    name: "Mike Kincaid",
    nickname: "The Machine",
    gym: "Combat Sports Center",
    location: "Richmond, VA",
    record: "10-2-1",
    weightClass: "Welterweight",
    discipline: "Muay Thai",
    ranking: 2,
  },
  {
    id: "8",
    name: "Chris Asedighi",
    gym: "Richmond MMA",
    location: "Richmond, VA",
    record: "4-1-0",
    weightClass: "Bantamweight",
    discipline: "MMA",
    ranking: 4,
  },
];

export default function RankingsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("all");
  const [selectedWeight, setSelectedWeight] = useState("all");

  const filteredAthletes = athletes.filter((athlete) => {
    if (selectedDiscipline !== "all" && athlete.discipline.toLowerCase().replace(" ", "-") !== selectedDiscipline) {
      return false;
    }
    if (selectedWeight !== "all" && athlete.weightClass.toLowerCase() !== selectedWeight) {
      return false;
    }
    return true;
  });

  return (
    <>
      <PageBanner
        title="Athletes & Rankings"
        subtitle="WKA USA ranked athletes across all weight classes and disciplines."
      />

      {/* Fighter of the Month Banner */}
      <section className="bg-gradient-to-r from-wka-red to-red-700 text-white">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Award className="h-8 w-8" />
              <div>
                <div className="text-sm font-medium opacity-90">Fighter of the Month - December 2024</div>
                <div className="text-xl font-bold">Antwan Britt - HybRit Academy</div>
              </div>
            </div>
            <Link href="/athletes/1" className="btn-secondary bg-white text-wka-red hover:bg-gray-100">
              View Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-[104px] z-40">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
              >
                {disciplines.map((discipline) => (
                  <option key={discipline.id} value={discipline.id}>
                    {discipline.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
              >
                {weightClasses.map((weight) => (
                  <option key={weight.id} value={weight.id}>
                    {weight.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
              <Users className="h-4 w-4" />
              <span>{filteredAthletes.length} athletes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredAthletes.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No athletes found matching your filters.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAthletes.map((athlete) => (
                <AthleteCard key={athlete.id} {...athlete} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-3 mb-4">Ranking System</h2>
            <p className="text-body mb-8">
              WKA USA rankings are determined by fight results, activity level, and competition quality.
              Athletes must remain active with at least one sanctioned bout every 12 months to maintain
              their ranking. Champions are determined through title bouts at WKA sanctioned events.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="card p-6">
                <Trophy className="h-8 w-8 mx-auto text-yellow-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Champion</h4>
                <p className="text-sm text-gray-600">
                  Title holders in each weight class and discipline
                </p>
              </div>
              <div className="card p-6">
                <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-full bg-wka-red text-white font-bold mb-3">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Top Contender</h4>
                <p className="text-sm text-gray-600">
                  #1 ranked fighter eligible for title shot
                </p>
              </div>
              <div className="card p-6">
                <div className="flex h-8 w-8 mx-auto items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold mb-3">
                  10
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ranked Fighter</h4>
                <p className="text-sm text-gray-600">
                  Top 10 fighters in each division
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-wka-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Want to Get Ranked?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Register as a WKA USA fighter and compete in sanctioned events to earn your ranking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Register Now
            </Link>
            <Link href="/events" className="btn-outline">
              Find Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
