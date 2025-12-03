"use client";
import React, { useState } from "react";
import { MessageCircle, X, Send, FileText, Shield, User, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Suggestion {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const suggestions: Suggestion[] = [
  {
    id: "medicals",
    icon: <FileText className="w-5 h-5 text-wka-red" />,
    title: "Submit Medicals",
    description: "Upload and submit fighter medical records for review",
    link: "/admin/medicals/submit",
  },
  {
    id: "license",
    icon: <Shield className="w-5 h-5 text-wka-red" />,
    title: "Get Fighter License",
    description: "Apply for a new WKA fighter license",
    link: "/admin/licenses/apply",
  },
  {
    id: "onboarding",
    icon: <User className="w-5 h-5 text-wka-red" />,
    title: "Fighter Onboarding",
    description: "Register a new fighter to the system",
    link: "/admin/fighters/onboarding",
  },
];

interface Message {
  id: number;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm the WKA Assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content:
          "I can help you with that! Please use the quick actions below or navigate to the appropriate section in the sidebar.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-wka-red text-white rounded-full shadow-lg hover:bg-wka-red-dark transition-all ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-wka-red text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">WKA Assistant</h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  message.type === "user"
                    ? "bg-wka-red text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="border-t border-gray-200 p-4">
          <p className="text-xs text-gray-500 mb-3 font-medium uppercase">Quick Actions</p>
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.id}
                href={suggestion.link}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-10 h-10 bg-wka-red/10 rounded-lg flex items-center justify-center">
                  {suggestion.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{suggestion.title}</h4>
                  <p className="text-xs text-gray-500">{suggestion.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-wka-red transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-wka-red/20"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-wka-red text-white rounded-xl hover:bg-wka-red-dark transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
