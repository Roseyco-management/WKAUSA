"use client";
import { useState } from "react";
import { RefreshCw, Clock, AlertTriangle, CheckCircle, Search, Filter, Mail } from "lucide-react";

const renewals = [
  {
    id: 1,
    fighter: "John Smith",
    fighterId: "WKA-2024-0015",
    licenseType: "Amateur Fighter",
    expiryDate: "2024-02-01",
    daysLeft: 15,
    status: "expiring",
  },
  {
    id: 2,
    fighter: "Maria Garcia",
    fighterId: "WKA-2024-0022",
    licenseType: "Professional Fighter",
    expiryDate: "2024-02-10",
    daysLeft: 24,
    status: "expiring",
  },
  {
    id: 3,
    fighter: "Mike Johnson",
    fighterId: "WKA-2024-0008",
    licenseType: "Amateur Fighter",
    expiryDate: "2024-01-20",
    daysLeft: -3,
    status: "expired",
  },
  {
    id: 4,
    fighter: "Sarah Williams",
    fighterId: "WKA-2024-0031",
    licenseType: "Amateur Fighter",
    expiryDate: "2024-01-25",
    daysLeft: 2,
    status: "urgent",
  },
  {
    id: 5,
    fighter: "David Lee",
    fighterId: "WKA-2024-0045",
    licenseType: "Professional Fighter",
    expiryDate: "2024-03-15",
    daysLeft: 58,
    status: "upcoming",
  },
];

export default function RenewalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredRenewals = renewals.filter((r) => {
    const matchesSearch =
      r.fighter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.fighterId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || r.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string, daysLeft: number) => {
    switch (status) {
      case "expired":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
            <AlertTriangle className="w-3 h-3" />
            Expired ({Math.abs(daysLeft)} days ago)
          </span>
        );
      case "urgent":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            {daysLeft} days left
          </span>
        );
      case "expiring":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            {daysLeft} days left
          </span>
        );
      case "upcoming":
        return (
          <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
            <Clock className="w-3 h-3" />
            {daysLeft} days left
          </span>
        );
      default:
        return null;
    }
  };

  const expiredCount = renewals.filter((r) => r.status === "expired").length;
  const urgentCount = renewals.filter((r) => r.status === "urgent").length;
  const expiringCount = renewals.filter((r) => r.status === "expiring").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">License Renewals</h1>
          <p className="text-gray-500">Manage expiring and expired licenses</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg hover:bg-red-700 transition-colors">
          <Mail className="w-4 h-4" />
          Send Reminders
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{expiredCount}</p>
              <p className="text-sm text-gray-500">Expired</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{urgentCount}</p>
              <p className="text-sm text-gray-500">Urgent (&lt;7 days)</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <RefreshCw className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{expiringCount}</p>
              <p className="text-sm text-gray-500">Expiring (7-30 days)</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-500">Active Licenses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
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
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="expired">Expired</option>
          <option value="urgent">Urgent</option>
          <option value="expiring">Expiring Soon</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      {/* Renewals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fighter</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">License Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiry Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRenewals.map((renewal) => (
                <tr key={renewal.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{renewal.fighter}</p>
                      <p className="text-sm text-gray-500">{renewal.fighterId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{renewal.licenseType}</td>
                  <td className="px-4 py-4 text-gray-600">{renewal.expiryDate}</td>
                  <td className="px-4 py-4">{getStatusBadge(renewal.status, renewal.daysLeft)}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-sm bg-wka-red text-white rounded-lg hover:bg-red-700">
                        Process Renewal
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Mail className="w-4 h-4" />
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
