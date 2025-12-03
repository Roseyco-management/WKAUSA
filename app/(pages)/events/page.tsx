"use client";

import { useState } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/sections/PageBanner";
import { EventCard } from "@/components/cards/EventCard";
import { Calendar, Filter, MapPin, Ticket, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample events data
const allEvents = [
  {
    id: "csc-44",
    name: "Combat Sports Challenge 44",
    date: "December 14, 2024",
    time: "6:00 PM",
    venue: "Combat Sports Center",
    location: "Richmond, VA",
    type: "csc" as const,
    featured: true,
    ticketUrl: "https://app.promotix.com",
  },
  {
    id: "scrimmage-12",
    name: "WKA Scrimmage League #12",
    date: "December 21, 2024",
    time: "2:00 PM",
    venue: "John's Fit Meals Arena",
    location: "Richmond, VA",
    type: "scrimmage" as const,
    ticketUrl: "#",
  },
  {
    id: "wka-regionals-2025",
    name: "WKA Regional Championships 2025",
    date: "January 5, 2025",
    time: "5:00 PM",
    venue: "Greater Richmond Convention Center",
    location: "Richmond, VA",
    type: "sanctioned" as const,
    ticketUrl: "#",
  },
  {
    id: "csc-45",
    name: "Combat Sports Challenge 45",
    date: "January 18, 2025",
    time: "6:00 PM",
    venue: "Combat Sports Center",
    location: "Richmond, VA",
    type: "csc" as const,
    ticketUrl: "#",
  },
  {
    id: "scrimmage-13",
    name: "WKA Scrimmage League #13",
    date: "January 25, 2025",
    time: "2:00 PM",
    venue: "HybRit Academy",
    location: "Virginia Beach, VA",
    type: "scrimmage" as const,
    ticketUrl: "#",
  },
  {
    id: "proven-boxers",
    name: "Proven Boxers - WKA Sanctioned",
    date: "February 1, 2025",
    time: "7:00 PM",
    venue: "Sports Complex",
    location: "Raleigh, NC",
    type: "sanctioned" as const,
    ticketUrl: "#",
  },
  {
    id: "csc-46",
    name: "Combat Sports Challenge 46",
    date: "February 15, 2025",
    time: "6:00 PM",
    venue: "Combat Sports Center",
    location: "Richmond, VA",
    type: "csc" as const,
    ticketUrl: "#",
  },
  {
    id: "stellar-fights-72",
    name: "Stellar Fights 72",
    date: "February 22, 2025",
    time: "6:00 PM",
    venue: "Stellar Arena",
    location: "Charlotte, NC",
    type: "sanctioned" as const,
    ticketUrl: "#",
  },
];

const eventTypes = [
  { id: "all", name: "All Events" },
  { id: "sanctioned", name: "WKA Sanctioned" },
  { id: "csc", name: "CSC Events" },
  { id: "scrimmage", name: "Scrimmage League" },
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = activeFilter === "all"
    ? allEvents
    : allEvents.filter((event) => event.type === activeFilter);

  return (
    <>
      <PageBanner
        title="Upcoming Events"
        subtitle="View our upcoming sanctioned events, Combat Sports Challenge fight cards, and educational scrimmage league sessions."
      />

      {/* Quick Actions */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-500">Quick Links:</span>
              <Link href="/results" className="text-sm text-wka-red hover:underline flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Results Archive
              </Link>
              <Link href="#sanctioning" className="text-sm text-wka-red hover:underline flex items-center gap-1">
                <Ticket className="h-4 w-4" />
                Sanctioning Info
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Video className="h-4 w-4" />
              <span>Live streams available for select events</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeFilter === type.id
                      ? "bg-wka-red text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  )}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No events found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Sanctioning Info */}
      <section id="sanctioning" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">Event Sanctioning</h2>

            <div className="prose prose-gray max-w-none mb-8">
              <h3>Promoter&apos;s License</h3>
              <p>
                In order to promote a professional or amateur event under the WKA you will need a promoter&apos;s license and sanctioning from WKA USA.
                It is our policy that no WKA USA member gym be allowed to fight at events that are not sanctioned by WKA USA. Promoters must agree to all the
                terms and conditions of the WKA USA before any sanctioning will be permitted.
              </p>

              <h3>Sanctioning Request Form</h3>
              <p>
                If you are an established promoter and would like to sanction your event with WKA USA, please complete our sanctioning request form.
                You can also email the WKA USA home office at{" "}
                <a href="mailto:admin@wkausa.com" className="text-wka-red">admin@wkausa.com</a>.
              </p>
            </div>

            {/* Sanctioning Fees */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="card p-6">
                <h4 className="font-bold text-wka-red mb-4">Amateur Sanctioning Fees</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Single Day Event</span>
                    <span className="font-medium text-gray-900">$150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Multi-Day Event</span>
                    <span className="font-medium text-gray-900">$250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Bout Fee</span>
                    <span className="font-medium text-gray-900">$15</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-wka-red mb-4">Pro/AMA Sanctioning Fees</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Sanctioning Fee</span>
                    <span className="font-medium text-gray-900">$250</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Bout Fee (Pro)</span>
                    <span className="font-medium text-gray-900">$30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Bout Fee (AMA)</span>
                    <span className="font-medium text-gray-900">$15</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h4 className="font-bold text-wka-red mb-4">Professional Fees</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Sanctioning Fee</span>
                    <span className="font-medium text-gray-900">$350</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Bout Fee</span>
                    <span className="font-medium text-gray-900">$50</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Title Bout</span>
                    <span className="font-medium text-gray-900">$100</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Request Sanctioning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Video className="h-12 w-12 mx-auto text-wka-red mb-4" />
            <h2 className="heading-3 mb-4">Can&apos;t Make It In Person?</h2>
            <p className="text-body-lg mb-6">
              Many of our events are available via live stream. Purchase tickets to watch from anywhere
              in the world through our streaming partner.
            </p>
            <a
              href="https://streamglobal.live"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Live Streams
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
