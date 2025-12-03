"use client";
import React from "react";
import { FileText, Search, Filter, Eye, Download, CheckCircle, XCircle, Clock } from "lucide-react";
import Link from "next/link";

const medicals = [
  {
    id: 1,
    fighter: "John Smith",
    type: "Pre-Fight Physical",
    submittedDate: "2024-12-01",
    expiryDate: "2025-12-01",
    status: "approved",
    doctor: "Dr. James Wilson",
  },
  {
    id: 2,
    fighter: "Sarah Johnson",
    type: "Annual Medical Exam",
    submittedDate: "2024-11-28",
    expiryDate: "2025-11-28",
    status: "pending",
    doctor: "Dr. Emily Brown",
  },
  {
    id: 3,
    fighter: "Mike Wilson",
    type: "Post-Injury Clearance",
    submittedDate: "2024-11-25",
    expiryDate: "2025-05-25",
    status: "rejected",
    doctor: "Dr. Robert Davis",
  },
  {
    id: 4,
    fighter: "Emily Davis",
    type: "Cardiac Screening",
    submittedDate: "2024-11-20",
    expiryDate: "2025-11-20",
    status: "approved",
    doctor: "Dr. Sarah Miller",
  },
];

const statusColors = {
  approved: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  rejected: "bg-red-100 text-red-700",
};

const statusIcons = {
  approved: <CheckCircle className="w-4 h-4" />,
  pending: <Clock className="w-4 h-4" />,
  rejected: <XCircle className="w-4 h-4" />,
};

export default function MedicalsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-500 text-sm mt-1">View and manage fighter medical submissions</p>
        </div>
        <Link
          href="/admin/medicals/submit"
          className="px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors inline-flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          Submit New
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medical records..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-wka-red">
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
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
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Doctor</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Expiry</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {medicals.map((medical) => (
                <tr key={medical.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{medical.fighter}</p>
                    <p className="text-sm text-gray-500">
                      Submitted {new Date(medical.submittedDate).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{medical.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{medical.doctor}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {new Date(medical.expiryDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${
                        statusColors[medical.status as keyof typeof statusColors]
                      }`}
                    >
                      {statusIcons[medical.status as keyof typeof statusIcons]}
                      {medical.status.charAt(0).toUpperCase() + medical.status.slice(1)}
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
