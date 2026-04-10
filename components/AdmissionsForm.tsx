"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function AdmissionsForm() {
  const [state, handleSubmit] = useForm("mnjokpvp");

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[300px]">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-white text-2xl"
          style={{ backgroundColor: "#0D9488" }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Thanks for reaching out. Kevin will be in touch within 24 hours to discuss availability.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Need to talk sooner?{" "}
          <a href="tel:+15616467097" className="font-semibold" style={{ color: "#0D9488" }}>
            (561) 646-7097
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Intake Inquiry Form</h2>
      <p className="text-gray-500 text-sm mb-6">
        Fill out this form and we&apos;ll respond within 24 hours. Fields marked{" "}
        <span className="text-red-500">*</span> are required.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <ValidationError field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(555) 555-5555"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <ValidationError field="phone" errors={state.errors} className="mt-1 text-xs text-red-600" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
          <ValidationError field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <label htmlFor="movein" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Desired Move-In Date
          </label>
          <input
            type="date"
            id="movein"
            name="movein_date"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Tell Us About Yourself <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Brief introduction — where you are in your recovery, your employment situation, and any questions you have..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm resize-none"
          />
          <ValidationError field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
        </div>

        <ValidationError errors={state.errors} className="text-sm text-red-600 font-medium" />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#0D9488" }}
        >
          {state.submitting ? "Sending…" : "Send Inquiry"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          We respond within 24 hours. Your information is kept private and never shared.
        </p>
      </form>
    </div>
  );
}
