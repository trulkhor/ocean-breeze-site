import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AdmissionsForm from "@/components/AdmissionsForm";

export const metadata: Metadata = {
  title: "Admissions | Sober Living Near Me West Palm Beach FL",
  description:
    "Apply for sober living in West Palm Beach. Simple admissions process. Men's sober living home with structured program. Call (561) 646-7097 or apply online.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Starting your application is simple. Reach out today and Kevin will be in touch within 24 hours."
        breadcrumb={[{ label: "Admissions" }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-20">

        {/* How to Apply */}
        <section>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply — 3 Easy Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Contact Us",
                description:
                  "Call or text Kevin at (561) 646-7097, email us, or fill out the online form below. Tell us a little about yourself and your situation.",
              },
              {
                step: "02",
                title: "Phone Interview",
                description:
                  "Kevin will have a brief phone conversation with you to discuss your recovery journey, employment status, and whether Ocean Breeze is the right fit.",
              },
              {
                step: "03",
                title: "Move In",
                description:
                  "Once accepted, schedule your move-in date. Bring your deposit ($210) plus first week's rent ($275), your ID, and your belongings. Welcome home.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold text-white"
                  style={{ backgroundColor: "#0d9488" }}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Who Qualifies
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Admissions Requirements
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ocean Breeze is a men&apos;s only sober living home for men who are serious about
              their recovery. We have a small number of requirements designed to ensure that
              every resident is set up for success.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Must Be Male",
                  desc: "Ocean Breeze is a men's only sober living home.",
                },
                {
                  title: "Employed or Actively Seeking Work",
                  desc: "All residents must be employed or actively seeking employment. We believe work is a vital part of recovery.",
                },
                {
                  title: "Commitment to Sobriety",
                  desc: "You must be committed to living drug-free and alcohol-free. This is a zero-tolerance environment.",
                },
                {
                  title: "Weekly Rent Payments",
                  desc: "Residents must pay $275/week on time, every week. Move-in requires a $210 deposit plus first week's rent.",
                },
                {
                  title: "Drug Screening Compliance",
                  desc: "All residents are subject to random drug and alcohol testing as a condition of residency.",
                },
                {
                  title: "Follow House Rules",
                  desc: "Residents agree to respect other residents, maintain the property, and follow house guidelines.",
                },
              ].map((req) => (
                <li key={req.title} className="flex items-start gap-3">
                  <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{req.title}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{req.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Bring */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Move-In Checklist
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What to Bring
            </h2>
            <div
              className="rounded-2xl p-8 border"
              style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
            >
              <ul className="space-y-3">
                {[
                  "Valid photo ID (driver's license or state ID)",
                  "Clothing and personal belongings",
                  "Toiletries and hygiene products",
                  "Any prescription medications",
                  "$210 move-in deposit",
                  "$275 first week's rent",
                  "Social Security card (if available)",
                  "A positive attitude and commitment to your recovery",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                      style={{ backgroundColor: "#0d9488" }}
                      aria-hidden="true"
                    >
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-white rounded-xl border border-teal-100">
                <p className="text-sm text-gray-600">
                  <strong style={{ color: "#0f766e" }}>Remember:</strong> All rooms are fully furnished.
                  You don&apos;t need to bring furniture, bedding, or household items. Just bring
                  yourself and your personal belongings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form + Direct Contact */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Apply Online
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Start Your Application
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Fill out the form and Kevin will be in touch within 24 hours.
            </p>
            <AdmissionsForm />
          </div>

          {/* Direct Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Prefer to Talk?
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Kevin Directly
            </h2>

            <div className="space-y-6">
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
              >
                <h3 className="font-bold text-gray-900 mb-1">Call or Text</h3>
                <a
                  href="tel:+15616467097"
                  className="text-2xl font-bold block mb-2 hover:opacity-80 transition-opacity"
                  style={{ color: "#0d9488" }}
                >
                  (561) 646-7097
                </a>
                <p className="text-gray-500 text-sm">
                  Kevin is available 24/7. Call or text any time.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:oceanbreezerecovery3@gmail.com"
                  className="font-medium text-sm break-all hover:underline"
                  style={{ color: "#0d9488" }}
                >
                  oceanbreezerecovery3@gmail.com
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  We respond to all emails within 24 hours.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 text-sm">
                  700 38th St<br />
                  West Palm Beach, FL 33407
                </p>
              </div>

              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa" }}
              >
                <p className="text-sm text-gray-700">
                  <strong>Beds are limited.</strong> If you&apos;re serious about starting your
                  recovery at Ocean Breeze, don&apos;t wait. Reach out today to check availability.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
