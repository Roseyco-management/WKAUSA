"use client";
import React, { useState } from "react";
import {
  Upload,
  FileText,
  User,
  Calendar,
  AlertCircle,
  Check,
  X,
  ChevronDown,
  Loader2,
} from "lucide-react";

interface UploadedFile {
  name: string;
  size: string;
  status: "uploading" | "complete" | "error";
}

export default function SubmitMedicals() {
  const [selectedFighter, setSelectedFighter] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examType, setExamType] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorLicense, setDoctorLicense] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const fighters = [
    { id: 1, name: "John Smith", email: "john.smith@email.com" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@email.com" },
    { id: 3, name: "Mike Wilson", email: "m.wilson@email.com" },
    { id: 4, name: "Emily Davis", email: "emily.d@email.com" },
  ];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate file upload
    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      setUploadedFiles((prev) => [
        ...prev,
        {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          status: "uploading",
        },
      ]);
      // Simulate upload completion
      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((f) => (f.name === file.name ? { ...f, status: "complete" } : f))
        );
      }, 2000);
    });
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.name !== fileName));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Submit Medical Records</h1>
        <p className="text-gray-500 text-sm mt-1">
          Upload and submit fighter medical examination records for review
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Fighter Selection */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Fighter Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Fighter
                </label>
                <div className="relative">
                  <select
                    value={selectedFighter}
                    onChange={(e) => setSelectedFighter(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                  >
                    <option value="">Choose a fighter...</option>
                    {fighters.map((fighter) => (
                      <option key={fighter.id} value={fighter.id}>
                        {fighter.name} - {fighter.email}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Examination Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Examination Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Examination Date
                </label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Examination Type
                </label>
                <select
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                >
                  <option value="">Select type...</option>
                  <option value="pre-fight">Pre-Fight Physical</option>
                  <option value="annual">Annual Medical Exam</option>
                  <option value="post-injury">Post-Injury Clearance</option>
                  <option value="neurological">Neurological Assessment</option>
                  <option value="cardiac">Cardiac Screening</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Doctor's Name
                </label>
                <input
                  type="text"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  placeholder="Dr. John Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License Number
                </label>
                <input
                  type="text"
                  value={doctorLicense}
                  onChange={(e) => setDoctorLicense(e.target.value)}
                  placeholder="Medical license #"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Any additional information or comments..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-wka-red focus:ring-1 focus:ring-wka-red resize-none"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Documents</h2>

            {/* Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                isDragging
                  ? "border-wka-red bg-wka-red/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-700 font-medium">Drag and drop files here</p>
                <p className="text-sm text-gray-500 mt-1">or click to browse</p>
                <button className="mt-4 px-6 py-2 border border-wka-red text-wka-red rounded-lg text-sm font-medium hover:bg-wka-red hover:text-white transition-colors">
                  Select Files
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  Supported formats: PDF, JPG, PNG. Max file size: 10MB
                </p>
              </div>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium text-gray-700">Uploaded Files</h3>
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {file.status === "uploading" && (
                        <Loader2 className="w-5 h-5 text-wka-red animate-spin" />
                      )}
                      {file.status === "complete" && (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                      <button
                        onClick={() => removeFile(file.name)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <X className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Requirements */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Required Documents</h3>
            <ul className="space-y-3">
              {[
                "Physical examination results",
                "Blood work / lab results",
                "Eye examination",
                "Doctor's clearance letter",
                "EKG / cardiac clearance (if applicable)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-wka-red rounded-full mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Review Timeline</p>
                <p className="text-sm text-blue-700 mt-1">
                  Medical submissions are typically reviewed within 3-5 business days. You will
                  receive an email notification once the review is complete.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-wka-red text-white rounded-xl font-medium hover:bg-wka-red-dark transition-colors">
            Submit for Review
          </button>
        </div>
      </div>
    </div>
  );
}
