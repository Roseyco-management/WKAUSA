"use client";
import React from "react";
import {
  Users,
  FileText,
  Shield,
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Fighters",
    value: "1,284",
    change: "+12%",
    changeType: "positive",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Licenses",
    value: "892",
    change: "+8%",
    changeType: "positive",
    icon: <Shield className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Pending Medicals",
    value: "47",
    change: "-5%",
    changeType: "negative",
    icon: <FileText className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-100",
  },
  {
    title: "This Month",
    value: "156",
    change: "+23%",
    changeType: "positive",
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
];

const recentActivities = [
  {
    id: 1,
    type: "registration",
    title: "New fighter registered",
    description: "John Smith completed registration",
    time: "5 minutes ago",
    icon: <Users className="w-4 h-4" />,
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    type: "medical",
    title: "Medical submitted",
    description: "Sarah Johnson submitted medical records",
    time: "1 hour ago",
    icon: <FileText className="w-4 h-4" />,
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    type: "license",
    title: "License approved",
    description: "Mike Wilson's license has been approved",
    time: "2 hours ago",
    icon: <Shield className="w-4 h-4" />,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    type: "event",
    title: "Upcoming event reminder",
    description: "Regional Championship in 5 days",
    time: "3 hours ago",
    icon: <Calendar className="w-4 h-4" />,
    iconBg: "bg-purple-100 text-purple-600",
  },
];

const pendingTasks = [
  {
    id: 1,
    title: "Review medical submissions",
    count: 12,
    priority: "high",
    link: "/admin/medicals/pending",
  },
  {
    id: 2,
    title: "Process license applications",
    count: 8,
    priority: "medium",
    link: "/admin/licenses",
  },
  {
    id: 3,
    title: "Verify fighter documents",
    count: 5,
    priority: "low",
    link: "/admin/fighters",
  },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Here's what's happening with WKA USA.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/fighters/add"
            className="px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors"
          >
            Add Fighter
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>{stat.icon}</div>
              <span
                className={`text-sm font-medium ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-wka-red hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Pending Tasks</h2>
            <span className="px-2 py-1 bg-wka-red/10 text-wka-red text-xs font-medium rounded-full">
              {pendingTasks.reduce((acc, task) => acc + task.count, 0)} total
            </span>
          </div>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <Link
                key={task.id}
                href={task.link}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-wka-red hover:bg-wka-red/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                        ? "bg-orange-500"
                        : "bg-green-500"
                    }`}
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-wka-red">
                    {task.title}
                  </span>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-wka-red group-hover:text-white">
                  {task.count}
                </span>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/admin/medicals/submit"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-wka-red hover:bg-wka-red/5 transition-all group"
              >
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-wka-red" />
                <span className="text-xs font-medium text-gray-600 group-hover:text-wka-red text-center">
                  Submit Medicals
                </span>
              </Link>
              <Link
                href="/admin/licenses/apply"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-wka-red hover:bg-wka-red/5 transition-all group"
              >
                <Shield className="w-5 h-5 text-gray-400 group-hover:text-wka-red" />
                <span className="text-xs font-medium text-gray-600 group-hover:text-wka-red text-center">
                  Get License
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
