"use client";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    name: "WKA USA Regional Championship",
    date: "2024-02-15",
    time: "6:00 PM",
    location: "Los Angeles Convention Center",
    city: "Los Angeles, CA",
    registered: true,
    spotsLeft: 12,
  },
  {
    id: 2,
    name: "California State Tournament",
    date: "2024-03-20",
    time: "5:00 PM",
    location: "San Diego Sports Arena",
    city: "San Diego, CA",
    registered: false,
    spotsLeft: 24,
  },
  {
    id: 3,
    name: "West Coast Kickboxing Open",
    date: "2024-04-10",
    time: "4:00 PM",
    location: "Phoenix Convention Center",
    city: "Phoenix, AZ",
    registered: false,
    spotsLeft: 8,
  },
];

const pastEvents = [
  {
    id: 4,
    name: "New Year Kickoff Tournament",
    date: "2024-01-05",
    location: "Las Vegas",
    result: "Won - Decision",
  },
  {
    id: 5,
    name: "Holiday Showdown 2023",
    date: "2023-12-15",
    location: "Los Angeles",
    result: "Won - TKO R2",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Events</h1>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-wka-red/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs text-wka-red font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                      </span>
                      <span className="text-lg font-bold text-wka-red">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{event.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.spotsLeft} spots left
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{event.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {event.registered ? (
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                      Registered
                    </span>
                  ) : (
                    <button className="px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                      Register
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Events</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pastEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-900">{event.name}</td>
                  <td className="px-4 py-4 text-gray-600">{event.date}</td>
                  <td className="px-4 py-4 text-gray-600">{event.location}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                      {event.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar Link */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="font-semibold text-blue-900">View Full Calendar</h3>
            <p className="text-sm text-blue-700">See all WKA USA events and competitions</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Calendar
        </button>
      </div>
    </div>
  );
}
