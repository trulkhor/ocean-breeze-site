"use client";

export default function AdmissionsForm() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Intake Inquiry Form</h2>
      <p className="text-gray-500 text-sm mb-6">
        Fill out this form and we&apos;ll respond within 24 hours. Fields marked{" "}
        <span className="text-red-500">*</span> are required.
      </p>

      <form
        action="mailto:oceanbreezerecovery3@gmail.com"
        method="post"
        encType="text/plain"
        className="space-y-5"
      >
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
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90"
          style={{ backgroundColor: "#0D9488" }}
        >
          Send Inquiry
        </button>

        <p className="text-xs text-gray-400 text-center">
          We respond within 24 hours. Your information is kept private and never shared.
        </p>
      </form>
    </div>
  );
}
