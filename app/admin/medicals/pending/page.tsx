"use client";
import { useState } from "react";
import { Clock, CheckCircle, XCircle, Eye, FileText, Search, Filter } from "lucide-react";

const pendingMedicals = [
  {
    id: 1,
    fighter: "John Smith",
    fighterId: "WKA-2024-0015",
    type: "Annual Physical",
    submittedDate: "2024-01-20",
    doctor: "Dr. Johnson",
    status: "pending",
  },
  {
    id: 2,
    fighter: "Maria Garcia",
    fighterId: "WKA-2024-0022",
    type: "Blood Work",
    submittedDate: "2024-01-19",
    doctor: "Dr. Williams",
    status: "pending",
  },
  {
    id: 3,
    fighter: "Mike Johnson",
    fighterId: "WKA-2024-0008",
    type: "Eye Exam",
    submittedDate: "2024-01-18",
    doctor: "Dr. Lee",
    status: "pending",
  },
  {
    id: 4,
    fighter: "Sarah Williams",
    fighterId: "WKA-2024-0031",
    type: "Annual Physical",
    submittedDate: "2024-01-17",
    doctor: "Dr. Brown",
    status: "pending",
  },
];

export default function PendingMedicalsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedicals = pendingMedicals.filter(
    (m) =>
      m.fighter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.fighterId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pending Medical Reviews</h1>
          <p className="text-gray-500">{pendingMedicals.length} medicals awaiting review</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{pendingMedicals.length}</p>
              <p className="text-sm text-gray-500">Pending Review</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-sm text-gray-500">Older than 48hrs</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500">Approved Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by fighter name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Pending List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fighter</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Submitted</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMedicals.map((medical) => (
                <tr key={medical.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{medical.fighter}</p>
                      <p className="text-sm text-gray-500">{medical.fighterId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{medical.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{medical.submittedDate}</td>
                  <td className="px-4 py-4 text-gray-600">{medical.doctor}</td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium w-fit">
                      <Clock className="w-3 h-3" />
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="View Document">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg" title="Approve">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg" title="Reject">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredMedicals.length === 0 && (
        <div className="text-center py-12">
          <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pending medicals</h3>
          <p className="text-gray-500">All medical submissions have been reviewed</p>
        </div>
      )}
    </div>
  );
}
