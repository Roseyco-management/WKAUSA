"use client";
import { useState } from "react";
import { MessageCircle, Mail, Phone, FileText, Send, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I renew my fighter license?",
    answer: "Go to My License page and click the 'Renew License' button. Follow the prompts to complete your renewal.",
  },
  {
    question: "What medical documents do I need?",
    answer: "You need an annual physical exam, eye examination, and blood work (HIV, Hepatitis B & C). All must be current within the specified validity periods.",
  },
  {
    question: "How long does medical review take?",
    answer: "Medical document review typically takes 2-3 business days. You'll receive an email notification once approved.",
  },
  {
    question: "How do I register for an event?",
    answer: "Visit the Events page, find an upcoming event, and click the 'Register' button. Make sure your license and medicals are current.",
  },
];

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Support</h1>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
          <p className="text-sm text-gray-500 mb-3">Get help via email</p>
          <a href="mailto:support@wkausa.com" className="text-wka-red hover:underline text-sm">
            support@wkausa.com
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
          <p className="text-sm text-gray-500 mb-3">Mon-Fri, 9am-5pm PST</p>
          <a href="tel:+18005551234" className="text-wka-red hover:underline text-sm">
            1-800-555-1234
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Documentation</h3>
          <p className="text-sm text-gray-500 mb-3">Rules & guidelines</p>
          <button className="text-wka-red hover:underline text-sm">View Docs</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-wka-red" />
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <h3 className="font-medium text-gray-900 mb-1">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-wka-red" />
          <h2 className="text-lg font-semibold text-gray-900">Send a Message</h2>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-4">We&apos;ll get back to you within 24-48 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-wka-red hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent">
                <option>General Inquiry</option>
                <option>License Issue</option>
                <option>Medical Question</option>
                <option>Event Registration</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wka-red focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-wka-red text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
