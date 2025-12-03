"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
  FileText,
  ChevronRight,
  Check,
  Upload,
  AlertCircle,
} from "lucide-react";

const steps = [
  { id: 1, name: "Personal Info", icon: User },
  { id: 2, name: "Contact Details", icon: Mail },
  { id: 3, name: "Fighting Profile", icon: Shield },
  { id: 4, name: "Documents", icon: FileText },
  { id: 5, name: "Review", icon: Check },
];

export default function FighterOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    division: "",
    experience: "",
    gym: "",
    coach: "",
    styles: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStyleToggle = (style: string) => {
    setFormData((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Fighter Onboarding</h1>
        <p className="text-gray-500 text-sm mt-1">
          Register a new fighter to the WKA USA system
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
                  className={`mt-2 text-xs font-medium ${
                    currentStep >= step.id ? "text-wka-red" : "text-gray-400"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-4 rounded-full ${
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
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="fighter@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="Street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Fighting Profile */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Fighting Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight Division
                </label>
                <select
                  name="division"
                  value={formData.division}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                >
                  <option value="">Select division</option>
                  <option value="flyweight">Flyweight</option>
                  <option value="bantamweight">Bantamweight</option>
                  <option value="featherweight">Featherweight</option>
                  <option value="lightweight">Lightweight</option>
                  <option value="welterweight">Welterweight</option>
                  <option value="middleweight">Middleweight</option>
                  <option value="lightheavyweight">Light Heavyweight</option>
                  <option value="heavyweight">Heavyweight</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                >
                  <option value="">Select experience</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="professional">Professional (5+ years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Gym
                </label>
                <input
                  type="text"
                  name="gym"
                  value={formData.gym}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="Gym name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coach Name
                </label>
                <input
                  type="text"
                  name="coach"
                  value={formData.coach}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  placeholder="Coach name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Fighting Styles
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  "Kickboxing",
                  "Muay Thai",
                  "Boxing",
                  "MMA",
                  "Karate",
                  "Taekwondo",
                  "Jiu-Jitsu",
                ].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => handleStyleToggle(style)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      formData.styles.includes(style)
                        ? "bg-wka-red text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Documents */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Required Documents</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Photo ID", desc: "Government-issued ID (passport, driver's license)" },
                { name: "Medical Clearance", desc: "Recent medical exam certificate" },
                { name: "Profile Photo", desc: "Recent headshot photo" },
                { name: "Insurance", desc: "Proof of insurance (if applicable)" },
              ].map((doc) => (
                <div
                  key={doc.name}
                  className="border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-wka-red transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-gray-900">{doc.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{doc.desc}</p>
                    <button className="mt-4 px-4 py-2 border border-wka-red text-wka-red rounded-lg text-sm font-medium hover:bg-wka-red hover:text-white transition-colors">
                      Upload File
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Document Requirements</p>
                <p className="text-sm text-yellow-700 mt-1">
                  All documents must be clear, legible, and in PDF, JPG, or PNG format. Maximum
                  file size is 10MB per document.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Review */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Review & Submit</h2>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <span className="ml-2 text-gray-900">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Date of Birth:</span>
                    <span className="ml-2 text-gray-900">{formData.dateOfBirth || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Gender:</span>
                    <span className="ml-2 text-gray-900">{formData.gender || "—"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Contact Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2 text-gray-900">{formData.email || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-2 text-gray-900">{formData.phone || "—"}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Address:</span>
                    <span className="ml-2 text-gray-900">
                      {formData.address
                        ? `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`
                        : "—"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-medium text-gray-900 mb-4">Fighting Profile</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Division:</span>
                    <span className="ml-2 text-gray-900">{formData.division || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Experience:</span>
                    <span className="ml-2 text-gray-900">{formData.experience || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Gym:</span>
                    <span className="ml-2 text-gray-900">{formData.gym || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Coach:</span>
                    <span className="ml-2 text-gray-900">{formData.coach || "—"}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Styles:</span>
                    <span className="ml-2 text-gray-900">
                      {formData.styles.length > 0 ? formData.styles.join(", ") : "—"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">Ready to Submit</p>
                <p className="text-sm text-green-700 mt-1">
                  Please review all information before submitting. You can go back to edit any
                  section if needed.
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
              className="flex items-center gap-2 px-6 py-2.5 bg-wka-red text-white rounded-lg text-sm font-medium hover:bg-wka-red-dark transition-colors"
            >
              Next Step
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              <Check className="w-4 h-4" />
              Submit Registration
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
