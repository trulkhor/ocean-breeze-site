"use client";

import { useState } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    // Basic client-side validation
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields before submitting." });
      return;
    }

    // Simulate form submission (replace with real API call / Formspree / etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been received. We will reach out within 24 hours to discuss availability.",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please call us directly at (561) 646-7097.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Admissions inquiry form"
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(561) 000-0000"
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-700">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a little about yourself, your recovery journey, and when you are looking to move in..."
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
          />
        </div>
      </div>

      {/* Status messages */}
      {status.type === "success" && (
        <div
          role="alert"
          className="mt-4 rounded-lg p-4 text-sm font-medium text-green-800 bg-green-50 border border-green-200"
        >
          <span className="mr-2" aria-hidden="true">✓</span>
          {status.message}
        </div>
      )}
      {status.type === "error" && (
        <div
          role="alert"
          className="mt-4 rounded-lg p-4 text-sm font-medium text-red-800 bg-red-50 border border-red-200"
        >
          <span className="mr-2" aria-hidden="true">⚠</span>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-6 w-full py-4 px-8 rounded-xl font-bold text-white text-base transition-all duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#F97316" }}
      >
        {status.type === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </button>

      <p className="mt-3 text-center text-xs text-gray-500">
        Or call us directly:{" "}
        <a href="tel:5616467097" className="font-semibold" style={{ color: "#0D9488" }}>
          (561) 646-7097
        </a>
      </p>
    </form>
  );
}
