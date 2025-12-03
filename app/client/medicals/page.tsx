"use client";
import { FileText, CheckCircle, Clock, AlertCircle, Upload, Download, Eye } from "lucide-react";
import Link from "next/link";

const medicalRecords = [
  {
    id: 1,
    type: "Annual Physical",
    date: "2024-01-15",
    expiry: "2025-01-15",
    status: "valid",
    doctor: "Dr. Smith",
  },
  {
    id: 2,
    type: "Eye Exam",
    date: "2024-02-20",
    expiry: "2025-02-20",
    status: "valid",
    doctor: "Dr. Johnson",
  },
  {
    id: 3,
    type: "Blood Work",
    date: "2023-06-10",
    expiry: "2024-06-10",
    status: "expired",
    doctor: "Dr. Williams",
  },
];

export default function MedicalsPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "valid":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            <CheckCircle className="w-3 h-3" />
            Valid
          </span>
        );
      case "pending":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case "expired":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
            <AlertCircle className="w-3 h-3" />
            Expired
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Medicals</h1>
        <Link
          href="/client/medicals/submit"
          className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Upload className="w-4 h-4" />
          Submit Medical
        </Link>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500">Valid Records</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">0</p>
              <p className="text-sm text-gray-500">Pending Review</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500">Expired</p>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Records Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Medical Records</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {medicalRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{record.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{record.date}</td>
                  <td className="px-4 py-4 text-gray-600">{record.expiry}</td>
                  <td className="px-4 py-4 text-gray-600">{record.doctor}</td>
                  <td className="px-4 py-4">{getStatusBadge(record.status)}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Requirements Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Medical Requirements</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Annual physical examination (valid for 12 months)</li>
          <li>• Eye examination (valid for 12 months)</li>
          <li>• Blood work including HIV, Hepatitis B & C (valid for 6 months)</li>
          <li>• All medicals must be current to compete</li>
        </ul>
      </div>
    </div>
  );
}
