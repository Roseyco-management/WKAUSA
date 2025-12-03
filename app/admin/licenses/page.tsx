"use client";
import React from "react";
import { Shield, Search, Filter, Eye, Download, CheckCircle, XCircle, Clock, Plus } from "lucide-react";
import Link from "next/link";

const licenses = [
  {
    id: 1,
    fighter: "John Smith",
    type: "Professional",
    licenseNo: "WKA-PRO-2024-001",
    issueDate: "2024-01-15",
    expiryDate: "2025-01-15",
    status: "active",
  },
  {
    id: 2,
    fighter: "Sarah Johnson",
    type: "Amateur",
    licenseNo: "WKA-AMT-2024-042",
    issueDate: "2024-02-20",
    expiryDate: "2025-02-20",
    status: "active",
  },
  {
    id: 3,
    fighter: "Mike Wilson",
    type: "Professional",
    licenseNo: "WKA-PRO-2024-015",
    issueDate: "2024-03-10",
    expiryDate: "2025-03-10",
    status: "pending",
  },
  {
    id: 4,
    fighter: "Emily Davis",
    type: "Amateur",
    licenseNo: "WKA-AMT-2023-089",
    issueDate: "2023-06-15",
    expiryDate: "2024-06-15",
    status: "expired",
  },
];

const statusColors = {
  active: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  expired: "bg-red-100 text-red-700",
};

const statusIcons = {
  active: <CheckCircle className="w-4 h-4" />,
  pending: <Clock className="w-4 h-4" />,
  expired: <XCircle className="w-4 h-4" />,
};

export default function LicensesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Licenses</h1>
          <p className="text-gray-500 text-sm mt-1">View and manage fighter licenses</p>
        </div>
        <Link
          href="/admin/licenses/apply"
          className="px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Apply for License
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">892</p>
              <p className="text-sm text-gray-500">Active Licenses</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-sm text-gray-500">Pending Applications</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">23</p>
              <p className="text-sm text-gray-500">Expiring Soon</p>
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
              placeholder="Search licenses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red">
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
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
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Fighter</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">License #</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Expiry</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {licenses.map((license) => (
                <tr key={license.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{license.fighter}</p>
                    <p className="text-sm text-gray-500">
                      Issued {new Date(license.issueDate).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{license.licenseNo}</code>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{license.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(license.expiryDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${
                        statusColors[license.status as keyof typeof statusColors]
                      }`}
                    >
                      {statusIcons[license.status as keyof typeof statusIcons]}
                      {license.status.charAt(0).toUpperCase() + license.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="View">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download">
                        <Download className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
