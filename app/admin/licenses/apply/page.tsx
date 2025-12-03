"use client";
import React, { useState } from "react";
import {
  Shield,
  User,
  FileText,
  CreditCard,
  Check,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Calendar,
  ChevronDown,
} from "lucide-react";

const steps = [
  { id: 1, name: "Fighter Info", icon: User },
  { id: 2, name: "License Type", icon: Shield },
  { id: 3, name: "Documents", icon: FileText },
  { id: 4, name: "Payment", icon: CreditCard },
  { id: 5, name: "Confirm", icon: Check },
];

const licenseTypes = [
  {
    id: "amateur",
    name: "Amateur License",
    price: 75,
    duration: "1 Year",
    description: "For amateur fighters competing in regional events",
    features: [
      "Valid for amateur competitions",
      "Regional event eligibility",
      "Basic insurance coverage",
      "Digital license card",
    ],
  },
  {
    id: "professional",
    name: "Professional License",
    price: 150,
    duration: "1 Year",
    description: "For professional fighters competing nationally",
    features: [
      "Valid for professional competitions",
      "National event eligibility",
      "Comprehensive insurance coverage",
      "Physical & digital license card",
      "Priority event registration",
    ],
  },
  {
    id: "instructor",
    name: "Instructor License",
    price: 200,
    duration: "2 Years",
    description: "For certified instructors and coaches",
    features: [
      "Certification to train fighters",
      "Cornerman privileges",
      "Comprehensive insurance",
      "Physical & digital license card",
      "Access to instructor resources",
    ],
  },
];

export default function ApplyForLicense() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFighter, setSelectedFighter] = useState("");
  const [selectedLicense, setSelectedLicense] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const fighters = [
    { id: "1", name: "John Smith", email: "john.smith@email.com", hasMedical: true },
    { id: "2", name: "Sarah Johnson", email: "sarah.j@email.com", hasMedical: true },
    { id: "3", name: "Mike Wilson", email: "m.wilson@email.com", hasMedical: false },
  ];

  const selectedFighterData = fighters.find((f) => f.id === selectedFighter);
  const selectedLicenseData = licenseTypes.find((l) => l.id === selectedLicense);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Apply for Fighter License</h1>
        <p className="text-gray-500 text-sm mt-1">
          Complete the application process to obtain a WKA USA fighter license
        </p>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentStep >= step.id
                      ? "bg-wka-red text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium hidden sm:block ${
                    currentStep >= step.id ? "text-wka-red" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 sm:mx-4 rounded-full ${
                    currentStep > step.id ? "bg-wka-red" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {/* Step 1: Fighter Selection */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Select Fighter</h2>
            <p className="text-gray-500 text-sm">
              Choose the fighter you want to apply for a license
            </p>

            <div className="space-y-3">
              {fighters.map((fighter) => (
                <label
                  key={fighter.id}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedFighter === fighter.id
                      ? "border-wka-red bg-wka-red/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="fighter"
                      value={fighter.id}
                      checked={selectedFighter === fighter.id}
                      onChange={(e) => setSelectedFighter(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedFighter === fighter.id
                          ? "bg-wka-red text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{fighter.name}</p>
                      <p className="text-sm text-gray-500">{fighter.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {fighter.hasMedical ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Medical Valid
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        Medical Required
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>

            {selectedFighterData && !selectedFighterData.hasMedical && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Medical Required</p>
                  <p className="text-sm text-yellow-700 mt-1">
                    This fighter needs to submit valid medical records before applying for a
                    license.{" "}
                    <a href="/admin/medicals/submit" className="underline">
                      Submit medicals now
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: License Type */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Select License Type</h2>
            <p className="text-gray-500 text-sm">
              Choose the appropriate license for your competition level
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {licenseTypes.map((license) => (
                <label
                  key={license.id}
                  className={`flex flex-col p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedLicense === license.id
                      ? "border-wka-red bg-wka-red/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="license"
                    value={license.id}
                    checked={selectedLicense === license.id}
                    onChange={(e) => setSelectedLicense(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedLicense === license.id
                          ? "bg-wka-red text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Shield className="w-5 h-5" />
                    </div>
                    {selectedLicense === license.id && (
                      <CheckCircle className="w-5 h-5 text-wka-red" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{license.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{license.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gray-900">${license.price}</span>
                      <span className="text-sm text-gray-500">/ {license.duration}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {license.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Documents */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Document Verification</h2>
            <p className="text-gray-500 text-sm">
              We'll verify your submitted documents before issuing the license
            </p>

            <div className="space-y-4">
              {[
                { name: "Photo ID", status: "verified", date: "Verified on Dec 1, 2024" },
                { name: "Medical Records", status: "verified", date: "Verified on Nov 28, 2024" },
                { name: "Profile Photo", status: "verified", date: "Verified on Dec 1, 2024" },
                { name: "Insurance Proof", status: "pending", date: "Pending verification" },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        doc.status === "verified" ? "bg-green-100" : "bg-yellow-100"
                      }`}
                    >
                      <FileText
                        className={`w-5 h-5 ${
                          doc.status === "verified" ? "text-green-600" : "text-yellow-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  {doc.status === "verified" ? (
                    <span className="flex items-center gap-1 text-sm text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-sm text-yellow-600">
                      <AlertCircle className="w-4 h-4" />
                      Pending
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Document Status</p>
                <p className="text-sm text-blue-700 mt-1">
                  Some documents are still pending verification. You can proceed with the
                  application, but the license will only be issued after all documents are
                  verified.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Payment Information</h2>
            <p className="text-gray-500 text-sm">Enter your payment details to complete the application</p>

            {/* Order Summary */}
            {selectedLicenseData && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{selectedLicenseData.name}</span>
                    <span className="text-gray-900">${selectedLicenseData.price}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="text-gray-900">$5.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${selectedLicenseData.price + 5}.00</span>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Review & Confirm</h2>
            <p className="text-gray-500 text-sm">
              Please review your application details before submitting
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Application Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fighter</span>
                    <span className="font-medium text-gray-900">
                      {selectedFighterData?.name || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">License Type</span>
                    <span className="font-medium text-gray-900">
                      {selectedLicenseData?.name || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">
                      {selectedLicenseData?.duration || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount</span>
                    <span className="font-medium text-gray-900">
                      ${selectedLicenseData ? selectedLicenseData.price + 5 : 0}.00
                    </span>
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-wka-red focus:ring-wka-red"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-wka-red hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-wka-red hover:underline">
                    WKA USA Fighter Code of Conduct
                  </a>
                  . I understand that providing false information may result in license
                  revocation.
                </span>
              </label>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">Ready to Submit</p>
                <p className="text-sm text-green-700 mt-1">
                  Once submitted, you will receive a confirmation email with your application
                  details. Processing typically takes 2-3 business days.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              currentStep === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={nextStep}
              disabled={
                (currentStep === 1 && !selectedFighter) ||
                (currentStep === 2 && !selectedLicense)
              }
              className="flex items-center gap-2 px-6 py-2.5 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              disabled={!agreedToTerms}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check className="w-4 h-4" />
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
