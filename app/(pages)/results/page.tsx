"use client";

import { useState } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { Calendar, Trophy, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample results data
const years = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
  2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
  2004, 2003, 2002, 2001, 2000, 1999
];

const eventResults = {
  2024: [
    {
      id: "csc-43",
      name: "Combat Sports Challenge 43",
      date: "November 16, 2024",
      location: "Richmond, VA",
      fights: [
        { red: "Wilson", blue: "Urena", result: "Wilson def. Urena via KO R2 2:34", discipline: "MMA" },
        { red: "VanPoots", blue: "EdgeVille", result: "VanPoots def. EdgeVille via Decision", discipline: "Muay Thai" },
        { red: "Hicks", blue: "Truss", result: "Hicks def. Truss via TKO R1", discipline: "Kickboxing" },
        { red: "Islam", blue: "Andrews", result: "Islam def. Andrews via Submission R2", discipline: "MMA" },
        { red: "Karzai", blue: "He", result: "Karzai def. He via Decision", discipline: "K1" },
        { red: "Kincaid", blue: "Hunt", result: "Kincaid def. Hunt via TKO R3", discipline: "Muay Thai" },
        { red: "Asedighi", blue: "McCarthy", result: "Asedighi def. McCarthy via Decision", discipline: "MMA" },
        { red: "BZongo", blue: "Palombo", result: "BZongo def. Palombo via KO R1", discipline: "Kickboxing" },
      ],
    },
    {
      id: "scrimmage-11",
      name: "WKA Scrimmage League #11",
      date: "October 26, 2024",
      location: "Richmond, VA",
      fights: [],
    },
    {
      id: "csc-42",
      name: "Combat Sports Challenge 42",
      date: "September 21, 2024",
      location: "Richmond, VA",
      fights: [
        { red: "Johnson", blue: "Smith", result: "Johnson def. Smith via Decision", discipline: "MMA" },
        { red: "Williams", blue: "Brown", result: "Williams def. Brown via TKO R2", discipline: "Muay Thai" },
      ],
    },
  ],
  2023: [
    {
      id: "csc-38",
      name: "Combat Sports Challenge 38",
      date: "December 9, 2023",
      location: "Richmond, VA",
      fights: [
        { red: "Davis", blue: "Miller", result: "Davis def. Miller via KO R1", discipline: "Kickboxing" },
      ],
    },
    {
      id: "csc-37",
      name: "Combat Sports Challenge 37",
      date: "October 14, 2023",
      location: "Richmond, VA",
      fights: [],
    },
  ],
};

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [expandedEvent, setExpandedEvent] = useState<string | null>("csc-43");

  const results = eventResults[selectedYear as keyof typeof eventResults] || [];

  return (
    <>
      <PageBanner
        title="Results"
        subtitle="Historical fight results from WKA USA sanctioned events dating back to 1999."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Year Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-wka-red" />
                  Select Year
                </h3>
                <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setExpandedEvent(null);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        selectedYear === year
                          ? "bg-wka-red text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="heading-3">{selectedYear} Results</h2>
                <span className="badge-gray">
                  {results.length} event{results.length !== 1 ? "s" : ""}
                </span>
              </div>

              {results.length === 0 ? (
                <div className="card p-12 text-center">
                  <Trophy className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No results available for {selectedYear}.</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Results may still be processing or events may not have occurred yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((event) => (
                    <div key={event.id} className="card overflow-hidden">
                      {/* Event Header */}
                      <button
                        onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-left">
                          <h3 className="font-bold text-gray-900">{event.name}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            <span>{event.date}</span>
                            <span>•</span>
                            <span>{event.location}</span>
                            <span>•</span>
                            <span>{event.fights.length} bout{event.fights.length !== 1 ? "s" : ""}</span>
                          </div>
                        </div>
                        {expandedEvent === event.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </button>

                      {/* Expanded Content */}
                      {expandedEvent === event.id && event.fights.length > 0 && (
                        <div className="border-t border-gray-200">
                          <div className="p-6">
                            <table className="w-full">
                              <thead>
                                <tr className="text-left text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                                  <th className="pb-3">Result</th>
                                  <th className="pb-3">Discipline</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100">
                                {event.fights.map((fight, index) => (
                                  <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-3 pr-4">
                                      <span className="font-medium text-gray-900">
                                        {fight.result}
                                      </span>
                                    </td>
                                    <td className="py-3">
                                      <span className="badge-gray">{fight.discipline}</span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {expandedEvent === event.id && event.fights.length === 0 && (
                        <div className="border-t border-gray-200 p-6">
                          <p className="text-sm text-gray-500 text-center">
                            Detailed results not yet available for this event.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-4">Want to See These Athletes in Action?</h2>
          <p className="text-body mb-6 max-w-xl mx-auto">
            Don&apos;t miss our upcoming events. Purchase tickets or tune in via live stream.
          </p>
          <Link href="/events" className="btn-primary">
            View Upcoming Events
          </Link>
        </div>
      </section>
    </>
  );
}
