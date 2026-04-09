import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Our Program | Structured Sober Living West Palm Beach",
  description:
    "Learn about Ocean Breeze Recovery Housing's structured sober living program in West Palm Beach. Live-in manager Kevin Smith, employment requirements, and more.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Ocean Breeze Recovery Housing"
        subtitle="A men's sober living community built on accountability, structure, and genuine support."
        breadcrumb={[{ label: "About" }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-20">

        {/* Our Mission */}
        <section>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Supporting Men in Building a Life Worth Living Sober
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Recovery is one of the hardest things a person can do. At Ocean Breeze Recovery
                Housing, we believe the environment you live in during early recovery can make or
                break your success. That&apos;s why we&apos;ve created a home — not just a house —
                where men can rebuild their lives with the support, structure, and accountability
                they need.
              </p>
              <p>
                Our mission is simple: give men in recovery a safe, stable place to live while
                they develop the habits, relationships, and purpose that make long-term sobriety
                possible. We combine clear expectations with genuine compassion, because we know
                that real recovery happens when structure and support go hand in hand.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Kevin Smith */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="rounded-2xl p-8 text-center border"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
              style={{ backgroundColor: "#ccfbf1" }}
              aria-label="Kevin Smith"
            >
              👤
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Kevin Smith</h3>
            <p className="text-sm font-medium mb-4" style={{ color: "#0d9488" }}>
              Live-In Manager &bull; Ocean Breeze Recovery Housing
            </p>
            <div className="text-left space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Available 24 hours a day, 7 days a week</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Speaks to groups at local IOP facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Guides residents through recovery challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deeply committed to the recovery community</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="tel:+15616467097"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white text-sm rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#0d9488" }}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Kevin: (561) 646-7097
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Meet Your Manager
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Kevin Smith Is Here for You</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What sets Ocean Breeze apart isn&apos;t just the affordable pricing or the
                furnished rooms — it&apos;s Kevin Smith. Kevin lives on-site and is genuinely
                invested in every resident&apos;s recovery. He&apos;s not a distant property manager
                checking boxes. He&apos;s a real presence in the house, available day or night
                whenever a resident needs support.
              </p>
              <p>
                Kevin actively builds relationships with local Intensive Outpatient Programs
                (IOPs) and treatment facilities throughout Palm Beach County. He speaks to groups
                at these facilities, helping connect men who are finishing treatment with the
                structured living environment they need to stay on track.
              </p>
              <p>
                Whether you&apos;re navigating a hard day, need to talk through a challenge, or
                just need someone in your corner, Kevin is there. That kind of consistent,
                accessible support is rare — and at Ocean Breeze, it&apos;s standard.
              </p>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Program Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Clear expectations create the framework for success. Here&apos;s what living at
              Ocean Breeze looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Employment Requirement",
                description:
                  "All residents must be employed or actively seeking employment. Work provides structure, income, and a sense of purpose — three things that are critical to sustainable recovery. We support residents in finding work and maintaining employment.",
                icon: "💼",
              },
              {
                title: "Weekly Rent: $275",
                description:
                  "Rent is paid weekly at $275, which includes your furnished room, all utilities, house supplies, and access to all amenities. Move-in requires a $210 deposit plus the first week's rent. Private pay only — no insurance accepted.",
                icon: "💵",
              },
              {
                title: "Random Drug Screening",
                description:
                  "Residents are subject to random drug and alcohol screening as a condition of residency. This isn't about distrust — it's about accountability. Everyone in the house is committed to the same drug-free standard, and screening reinforces that commitment.",
                icon: "🧪",
              },
              {
                title: "House Rules & Community",
                description:
                  "Respect for other residents and the property is non-negotiable. Residents are expected to maintain their room, contribute to the cleanliness of common areas, and support their housemates. Community accountability is one of the most powerful recovery tools we have.",
                icon: "🏡",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Philosophy */}
        <section
          className="rounded-2xl p-8 md:p-12"
          style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Our Philosophy
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Recovery Is More Than Not Using
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-left md:text-center">
              <p>
                At Ocean Breeze, we believe recovery is a process of building a new life — one
                with purpose, connection, and accountability. Abstinence from substances is the
                foundation, but it&apos;s not the whole structure. Real recovery means developing
                healthy routines, maintaining employment, nurturing positive relationships, and
                growing as a person.
              </p>
              <p>
                That&apos;s why we require employment, enforce drug-free standards, and foster a
                community where residents support and challenge each other. When men live
                alongside others who share their commitment to sobriety, something powerful
                happens: they stop feeling alone, they hold each other accountable, and they
                begin to see a future worth working toward.
              </p>
            </div>
          </div>
        </section>

        {/* FARR Certification */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Quality & Standards
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Pursuing FARR Certification
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ocean Breeze Recovery Housing is actively pursuing certification from the Florida
                Association of Recovery Residences (FARR). FARR is Florida&apos;s premier
                statewide organization dedicated to improving the quality and professionalism of
                recovery residences across the state.
              </p>
              <p>
                FARR certification means a sober living home has met specific ethical, operational,
                and quality standards designed to protect residents and ensure a legitimate,
                supportive recovery environment. We are committed to meeting and exceeding these
                standards.
              </p>
              <p>
                Our pursuit of FARR certification reflects our commitment to transparency,
                accountability, and providing the highest quality sober living experience
                in West Palm Beach.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
              style={{ backgroundColor: "#ccfbf1" }}
              aria-hidden="true"
            >
              🏅
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">FARR Certification</h3>
            <p className="text-gray-600 text-sm mb-4">
              Florida Association of Recovery Residences
            </p>
            <p className="text-sm text-gray-500 italic">
              Certification in progress — Ocean Breeze is working toward full FARR compliance
              to ensure the highest standards of sober living for all residents.
            </p>
            <a
              href="https://www.farrinc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium"
              style={{ color: "#0d9488" }}
            >
              Learn about FARR →
            </a>
          </div>
        </section>

        {/* IOP Connections */}
        <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              Treatment Connections
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Informal IOP & Treatment Connections
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Many of our residents come to Ocean Breeze directly from inpatient or residential
                treatment programs. The transition from a structured treatment setting to the real
                world is one of the most vulnerable times in recovery — and it&apos;s exactly when
                sober living matters most.
              </p>
              <p>
                Manager Kevin Smith has built relationships with local Intensive Outpatient Programs
                (IOPs) and treatment facilities in the Palm Beach County area. He speaks to groups
                at these facilities, helping men who are nearing the end of treatment understand
                what sober living looks like and how Ocean Breeze can serve as a bridge to
                independence.
              </p>
              <p>
                If you or a loved one is finishing treatment and looking for structured sober
                living in West Palm Beach, we encourage you to reach out. Kevin is happy to speak
                with case managers, counselors, and treatment professionals about how we can
                support continued care.
              </p>
            </div>
          </div>
        </section>

      </div>

      <ContactCTA title="Ready to Join the Ocean Breeze Community?" subtitle="Take the first step. Reach out to Kevin Smith today and let's talk about how Ocean Breeze can support your recovery." showPhone={true} />
    </>
  );
}
