"use client";
import React, { useState } from "react";
import {
  MessageCircle,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  ChevronRight,
} from "lucide-react";

const tickets = [
  {
    id: "TKT-001",
    subject: "License renewal issue",
    fighter: "John Smith",
    status: "open",
    priority: "high",
    created: "2024-12-01",
    lastReply: "2 hours ago",
  },
  {
    id: "TKT-002",
    subject: "Medical document upload failed",
    fighter: "Sarah Johnson",
    status: "pending",
    priority: "medium",
    created: "2024-11-30",
    lastReply: "1 day ago",
  },
  {
    id: "TKT-003",
    subject: "Event registration question",
    fighter: "Mike Wilson",
    status: "resolved",
    priority: "low",
    created: "2024-11-28",
    lastReply: "3 days ago",
  },
  {
    id: "TKT-004",
    subject: "Weight class change request",
    fighter: "Emily Davis",
    status: "open",
    priority: "medium",
    created: "2024-11-27",
    lastReply: "5 hours ago",
  },
];

const statusColors = {
  open: "bg-blue-100 text-blue-700",
  pending: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
};

const priorityColors = {
  high: "text-red-600",
  medium: "text-yellow-600",
  low: "text-green-600",
};

export default function SupportPage() {
  const [filter, setFilter] = useState("all");

  const filteredTickets = tickets.filter(
    (ticket) => filter === "all" || ticket.status === filter
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and respond to fighter support requests
          </p>
        </div>
        <button className="px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors inline-flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          New Ticket
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <MessageCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-500">Total Tickets</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">8</p>
              <p className="text-xs text-gray-500">Open</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">11</p>
              <p className="text-xs text-gray-500">Resolved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500">
                        {ticket.id}
                      </span>
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                          statusColors[ticket.status as keyof typeof statusColors]
                        }`}
                      >
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          priorityColors[ticket.priority as keyof typeof priorityColors]
                        }`}
                      >
                        {ticket.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 mt-1">{ticket.subject}</p>
                    <p className="text-sm text-gray-500">
                      {ticket.fighter} · Last reply {ticket.lastReply}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
