"use client";
import React, { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Mail,
  Globe,
  Palette,
  Save,
  Camera,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "security", name: "Security", icon: Shield },
    { id: "organization", name: "Organization", icon: Globe },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage your account and organization settings
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:w-64">
          <div className="bg-white rounded-xl border border-gray-200 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-wka-red text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Profile Settings</h2>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-wka-red rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Profile Photo</p>
                  <p className="text-sm text-gray-500">JPG, PNG or GIF. Max 2MB</p>
                </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="User"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@wkausa.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    defaultValue="Administrator"
                    disabled
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>

              <div className="space-y-4">
                {[
                  { title: "New fighter registrations", desc: "Get notified when a new fighter registers" },
                  { title: "Medical submissions", desc: "Receive alerts for new medical document uploads" },
                  { title: "License applications", desc: "Get notified about new license applications" },
                  { title: "Support tickets", desc: "Receive alerts for new support tickets" },
                  { title: "Event reminders", desc: "Get reminders for upcoming events" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-wka-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wka-red"></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors">
                  <Save className="w-4 h-4" />
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>

              {/* Change Password */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Change Password</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors">
                  <Shield className="w-4 h-4" />
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* Organization Tab */}
          {activeTab === "organization" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Organization Settings</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    defaultValue="World Kickboxing Association USA"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    defaultValue="8032-C West Broad Street"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="Richmond"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    defaultValue="VA"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    defaultValue="23294"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="804-525-4780"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 px-4 py-2 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors">
                  <Save className="w-4 h-4" />
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
