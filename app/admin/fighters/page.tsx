"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

interface Fighter {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "active" | "pending" | "inactive";
  licenseStatus: "valid" | "expired" | "pending";
  division: string;
  registeredDate: string;
}

const fighters: Fighter[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    status: "active",
    licenseStatus: "valid",
    division: "Heavyweight",
    registeredDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "(555) 234-5678",
    status: "active",
    licenseStatus: "valid",
    division: "Featherweight",
    registeredDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "m.wilson@email.com",
    phone: "(555) 345-6789",
    status: "pending",
    licenseStatus: "pending",
    division: "Middleweight",
    registeredDate: "2024-03-10",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@email.com",
    phone: "(555) 456-7890",
    status: "active",
    licenseStatus: "expired",
    division: "Lightweight",
    registeredDate: "2023-11-05",
  },
  {
    id: 5,
    name: "David Brown",
    email: "d.brown@email.com",
    phone: "(555) 567-8901",
    status: "inactive",
    licenseStatus: "expired",
    division: "Welterweight",
    registeredDate: "2023-06-22",
  },
  {
    id: 6,
    name: "Jessica Martinez",
    email: "jess.m@email.com",
    phone: "(555) 678-9012",
    status: "active",
    licenseStatus: "valid",
    division: "Bantamweight",
    registeredDate: "2024-04-01",
  },
];

const statusColors = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  inactive: "bg-gray-100 text-gray-700",
};

const licenseColors = {
  valid: "text-green-600",
  expired: "text-red-600",
  pending: "text-yellow-600",
};

const licenseIcons = {
  valid: <CheckCircle className="w-4 h-4" />,
  expired: <XCircle className="w-4 h-4" />,
  pending: <Clock className="w-4 h-4" />,
};

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const filteredFighters = fighters.filter((fighter) => {
    const matchesSearch =
      fighter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fighter.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || fighter.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fighters</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all registered fighters in the system
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <Link
            href="/admin/fighters/add"
            className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Fighter
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search fighters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Fighter
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Division
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  License
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Registered
                </th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredFighters.map((fighter) => (
                <tr key={fighter.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{fighter.name}</p>
                      <p className="text-sm text-gray-500">{fighter.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{fighter.division}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${
                        statusColors[fighter.status]
                      }`}
                    >
                      {fighter.status.charAt(0).toUpperCase() + fighter.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-sm ${
                        licenseColors[fighter.licenseStatus]
                      }`}
                    >
                      {licenseIcons[fighter.licenseStatus]}
                      {fighter.licenseStatus.charAt(0).toUpperCase() +
                        fighter.licenseStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">
                      {new Date(fighter.registeredDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActiveMenu(activeMenu === fighter.id ? null : fighter.id)
                        }
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <MoreVertical className="w-4 h-4 text-gray-500" />
                      </button>

                      {activeMenu === fighter.id && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setActiveMenu(null)}
                          />
                          <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                              <Eye className="w-4 h-4" />
                              View
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                              <Edit className="w-4 h-4" />
                              Edit
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredFighters.length}</span> of{" "}
            <span className="font-medium">{fighters.length}</span> fighters
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 bg-wka-red text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-lg text-sm">
              2
            </button>
            <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-lg text-sm">
              3
            </button>
            <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
