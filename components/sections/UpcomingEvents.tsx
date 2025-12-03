"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "CSC Combat Sports Challenge",
    date: "January 2025",
    location: "Richmond, VA",
  },
  {
    id: 2,
    title: "WKA US Open Championships",
    date: "March 2025",
    location: "Las Vegas, NV",
  },
  {
    id: 3,
    title: "Southeast Regional Tournament",
    date: "February 2025",
    location: "Atlanta, GA",
  },
];

export function UpcomingEvents() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="bg-white py-8">
      {/* Red banner header */}
      <div className="bg-wka-red py-4 mb-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
          Upcoming Events
        </h2>
      </div>

      <div className="container-custom">
        {/* Event slider */}
        <div className="relative">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-wka-black text-white rounded-full hover:bg-wka-red transition-colors shrink-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href="/events"
                    className="group block"
                  >
                    {/* Event Poster Card */}
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg overflow-hidden shadow-lg">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3),transparent_70%)]" />
                      </div>

                      {/* CSC Logo */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <Image
                          src="/logos/csc-logo.png"
                          alt={event.title}
                          width={280}
                          height={280}
                          className="w-full h-auto max-w-[80%] opacity-90 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Bottom gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-16">
                        <h3 className="text-white font-bold text-lg leading-tight">{event.title}</h3>
                        <p className="text-gray-300 text-sm mt-1">{event.date}</p>
                        <p className="text-gray-400 text-sm">{event.location}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-wka-black text-white rounded-full hover:bg-wka-red transition-colors shrink-0"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-wka-red" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
