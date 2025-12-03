"use client";
import React from "react";
import Link from "next/link";
import {
  Shield,
  FileText,
  Calendar,
  Trophy,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";

export default function ClientDashboard() {
  const licenseInfo = {
    status: "active",
    number: "WKA-PRO-2024-042",
    expiresIn: 45,
    type: "Professional",
  };

  const medicalInfo = {
    status: "valid",
    expiresIn: 120,
    lastExam: "2024-10-15",
  };

  const upcomingEvents = [
    {
      id: 1,
      name: "Regional Championship",
      date: "Dec 15, 2024",
      location: "Richmond, VA",
      registered: true,
    },
    {
      id: 2,
      name: "Winter Classic",
      date: "Jan 20, 2025",
      location: "Charlotte, NC",
      registered: false,
    },
  ];

  const fightRecord = {
    wins: 12,
    losses: 3,
    draws: 1,
    knockouts: 7,
  };

  const recentActivity = [
    { id: 1, action: "Medical documents approved", date: "2 days ago", type: "success" },
    { id: 2, action: "Registered for Regional Championship", date: "1 week ago", type: "info" },
    { id: 3, action: "License renewed", date: "2 weeks ago", type: "success" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-wka-red to-red-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold">Welcome back, Fighter!</h1>
        <p className="text-white/80 mt-1">Here's your dashboard overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* License Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-green-100 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Active
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">{licenseInfo.expiresIn}</p>
          <p className="text-sm text-gray-500">Days until license expires</p>
          <Link
            href="/client/license"
            className="mt-3 text-sm text-wka-red hover:underline inline-flex items-center gap-1"
          >
            View License <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Medical Status */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
              Valid
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">{medicalInfo.expiresIn}</p>
          <p className="text-sm text-gray-500">Days until medical expires</p>
          <Link
            href="/client/medicals"
            className="mt-3 text-sm text-wka-red hover:underline inline-flex items-center gap-1"
          >
            View Medicals <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Fight Record */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Trophy className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
              {fightRecord.wins}-{fightRecord.losses}-{fightRecord.draws}
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">{fightRecord.wins}</p>
          <p className="text-sm text-gray-500">Total Wins ({fightRecord.knockouts} KOs)</p>
          <Link
            href="/client/record"
            className="mt-3 text-sm text-wka-red hover:underline inline-flex items-center gap-1"
          >
            View Record <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
              {upcomingEvents.length} Events
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">{upcomingEvents.filter(e => e.registered).length}</p>
          <p className="text-sm text-gray-500">Registered Events</p>
          <Link
            href="/client/events"
            className="mt-3 text-sm text-wka-red hover:underline inline-flex items-center gap-1"
          >
            View Events <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events List */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
            <Link href="/client/events" className="text-sm text-wka-red hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-wka-red/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-wka-red" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-500">
                      {event.date} · {event.location}
                    </p>
                  </div>
                </div>
                {event.registered ? (
                  <span className="flex items-center gap-1 text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    Registered
                  </span>
                ) : (
                  <button className="px-4 py-2 text-sm font-medium text-wka-red border border-wka-red rounded-lg hover:bg-wka-red hover:text-white transition-colors">
                    Register
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className={`p-1.5 rounded-full ${
                    activity.type === "success" ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  {activity.type === "success" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Clock className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/client/medicals"
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            <FileText className="w-6 h-6 text-gray-400 group-hover:text-wka-red" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-wka-red">
              Upload Medical
            </span>
          </Link>
          <Link
            href="/client/license"
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            <Shield className="w-6 h-6 text-gray-400 group-hover:text-wka-red" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-wka-red">
              Renew License
            </span>
          </Link>
          <Link
            href="/client/events"
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            <Calendar className="w-6 h-6 text-gray-400 group-hover:text-wka-red" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-wka-red">
              Find Events
            </span>
          </Link>
          <Link
            href="/client/support"
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
          >
            <AlertCircle className="w-6 h-6 text-gray-400 group-hover:text-wka-red" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-wka-red">
              Get Help
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
