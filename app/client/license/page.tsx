"use client";
import { Shield, CheckCircle, Clock, AlertCircle, Download, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function LicensePage() {
  const license = {
    number: "WKA-USA-2024-0001",
    type: "Amateur Fighter",
    status: "active",
    issueDate: "2024-01-01",
    expiryDate: "2024-12-31",
    daysRemaining: 45,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My License</h1>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Download Card
        </button>
      </div>

      {/* License Card */}
      <div className="bg-gradient-to-br from-wka-red to-red-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-red-200 text-sm">World Kickboxing Association</p>
            <h2 className="text-2xl font-bold">USA Fighter License</h2>
          </div>
          <Shield className="w-12 h-12 text-white/80" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-red-200 text-xs">License Number</p>
            <p className="font-mono text-lg">{license.number}</p>
          </div>
          <div>
            <p className="text-red-200 text-xs">License Type</p>
            <p className="font-medium">{license.type}</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-red-200 text-xs">Valid Until</p>
            <p className="text-xl font-bold">{license.expiryDate}</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Active</span>
          </div>
        </div>
      </div>

      {/* Status Alert */}
      {license.daysRemaining <= 60 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-800">License Expiring Soon</h3>
            <p className="text-sm text-yellow-700">
              Your license expires in {license.daysRemaining} days. Renew now to maintain your active status.
            </p>
            <Link
              href="/client/license/renew"
              className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-yellow-800 hover:text-yellow-900"
            >
              <RefreshCw className="w-4 h-4" />
              Renew License
            </Link>
          </div>
        </div>
      )}

      {/* License Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">License Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">License Number</span>
              <span className="font-medium text-gray-900">{license.number}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Type</span>
              <span className="font-medium text-gray-900">{license.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Issue Date</span>
              <span className="font-medium text-gray-900">{license.issueDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Expiry Date</span>
              <span className="font-medium text-gray-900">{license.expiryDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status</span>
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <CheckCircle className="w-4 h-4" />
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Competition Eligibility</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700">Kickboxing - Amateur</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-700">Muay Thai - Amateur</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500">MMA - Not Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* License History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">License History</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">License Issued</p>
              <p className="text-sm text-gray-500">January 1, 2024</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Approved</span>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Application Submitted</p>
              <p className="text-sm text-gray-500">December 15, 2023</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
