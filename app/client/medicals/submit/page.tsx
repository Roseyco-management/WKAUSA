"use client";
import { useState } from "react";
import { Upload, FileText, X, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SubmitMedicalPage() {
  const [selectedType, setSelectedType] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const medicalTypes = [
    { value: "physical", label: "Annual Physical Examination" },
    { value: "eye", label: "Eye Examination" },
    { value: "blood", label: "Blood Work (HIV, Hepatitis B & C)" },
    { value: "ekg", label: "EKG/Cardiac Clearance" },
    { value: "other", label: "Other Medical Document" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your medical document has been submitted for review. You will be notified once it has been processed.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/client/medicals"
              className="px-4 py-2 bg-wka-red text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              View My Medicals
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setFile(null);
                setSelectedType("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Submit Medical</h1>
        <p className="text-gray-600 mt-1">Upload your medical documents for review</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Medical Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medical Type *</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
          >
            <option value="">Select medical type...</option>
            {medicalTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Exam Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Examination Date *</label>
          <input
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
          />
        </div>

        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Doctor / Physician Name *</label>
          <input
            type="text"
            placeholder="Dr. John Smith"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document *</label>
          {file ? (
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-wka-red" />
                <div>
                  <p className="font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-wka-red hover:bg-red-50/50 transition-colors">
              <Upload className="w-10 h-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400 mt-1">PDF, JPG, or PNG (max 10MB)</p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
          <textarea
            rows={3}
            placeholder="Any additional information..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Link
            href="/client/medicals"
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-wka-red text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Submit Medical
          </button>
        </div>
      </form>

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-semibold text-yellow-800 mb-2">Important Notes</h3>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Medical documents must be signed by a licensed physician</li>
          <li>• Documents must be clearly legible</li>
          <li>• Processing typically takes 2-3 business days</li>
          <li>• You will receive an email notification once approved</li>
        </ul>
      </div>
    </div>
  );
}
