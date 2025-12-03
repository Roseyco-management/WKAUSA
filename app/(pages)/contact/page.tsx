"use client";

import { useState } from "react";
import { PageBanner } from "@/components/sections/PageBanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Mail, Phone, MapPin, Clock, Send, User, Building, FileText } from "lucide-react";

const inquiryTypes = [
  { id: "general", name: "General Inquiry" },
  { id: "registration", name: "Fighter Registration" },
  { id: "promoter", name: "Promoter Licensing" },
  { id: "sanctioning", name: "Event Sanctioning" },
  { id: "official", name: "Become an Official" },
  { id: "gym", name: "Gym Registration" },
  { id: "media", name: "Media Inquiry" },
  { id: "sponsorship", name: "Sponsorship" },
];

const registrationOptions = [
  {
    title: "Fighter Registration",
    icon: User,
    description: "Register as an amateur or professional fighter with WKA USA",
    requirements: [
      "Valid government-issued ID",
      "Current medical clearance",
      "Fight record documentation",
      "Registration fee payment",
    ],
    fee: "$50/year",
  },
  {
    title: "Promoter Licensing",
    icon: Building,
    description: "Obtain a promoter's license to host WKA sanctioned events",
    requirements: [
      "Business registration documents",
      "Insurance documentation",
      "Event venue contracts",
      "Licensing fee payment",
    ],
    fee: "$200/year",
  },
  {
    title: "Official Certification",
    icon: FileText,
    description: "Become a certified WKA referee or judge",
    requirements: [
      "Rules knowledge test",
      "Officiating seminar attendance",
      "Shadow officiating sessions",
      "Certification fee payment",
    ],
    fee: "$100/year",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go here
    alert("Thank you for your inquiry. We will respond within 24-48 hours.");
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with WKA USA for registration, sanctioning, or general inquiries."
      />

      {/* Contact Info Cards */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                <MapPin className="h-6 w-6 text-wka-red" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 mt-1">
                  8032-C West Broad Street<br />
                  Richmond, VA 23294 USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                <Phone className="h-6 w-6 text-wka-red" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tel: 804-525-4780<br />
                  Fax: (804) 977-6249
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                <Mail className="h-6 w-6 text-wka-red" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600 mt-1">
                  <a href="mailto:admin@wkausa.com" className="text-wka-red hover:underline">
                    admin@wkausa.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                <Clock className="h-6 w-6 text-wka-red" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Hours</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Mon - Fri: 9am - 5pm EST<br />
                  Sat - Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <SectionHeader
                title="Send Us a Message"
                centered={false}
                className="mb-8"
              />

              <form onSubmit={handleSubmit} className="card p-6 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wka-red focus:border-transparent resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Registration Options */}
            <div>
              <SectionHeader
                title="Registration & Licensing"
                centered={false}
                className="mb-8"
              />

              <div className="space-y-6">
                {registrationOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div key={option.title} className="card p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-wka-red/10">
                          <Icon className="h-6 w-6 text-wka-red" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="font-bold text-gray-900">{option.title}</h3>
                            <span className="badge bg-wka-red text-white">{option.fee}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{option.description}</p>

                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                              Requirements:
                            </p>
                            <ul className="space-y-1">
                              {option.requirements.map((req, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-wka-red" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-200 h-[400px] flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">Google Maps Integration</p>
          <p className="text-sm text-gray-400">8032-C West Broad Street, Richmond, VA 23294</p>
        </div>
      </section>
    </>
  );
}
