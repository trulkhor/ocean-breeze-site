import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import FAQAccordion from "@/app/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Common Questions About Ocean Breeze Sober Living West Palm Beach",
  description:
    "Frequently asked questions about Ocean Breeze Recovery Housing. Cost, requirements, what's included, FARR certification, location, admissions process, and more.",
  alternates: {
    canonical: "https://www.oceanbreezerecoveryhousing.com/faq",
  },
  openGraph: {
    title: "FAQ | Ocean Breeze Recovery Housing West Palm Beach",
    description:
      "Get answers to common questions about our men's sober living home in West Palm Beach: pricing, requirements, amenities, FARR certification, and the admissions process.",
    url: "https://www.oceanbreezerecoveryhousing.com/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Ocean Breeze Recovery Housing",
    description: "Frequently asked questions about our men's sober living home in West Palm Beach, FL.",
  },
};

const faqs = [
  {
    question: "How much does it cost to live at Ocean Breeze?",
    answer:
      "The weekly rate is $275 per week, which includes everything: your furnished room, all utilities (electric, water, WiFi), household supplies, and access to workout equipment. To move in, the total upfront cost is $485: a $210 move-in fee plus your first week's rent of $275. After that, you pay $275 per week on the same day each week.",
  },
  {
    question: "What does the weekly rate include?",
    answer:
      "Your $275/week covers your furnished room, all utilities (electricity, water, internet/WiFi), household supplies (cleaning products, etc.), access to on-site workout equipment, live-in manager availability 24/7, and all shared common areas. There are no additional charges for these items — everything is all-inclusive.",
  },
  {
    question: "What is the move-in fee for?",
    answer:
      "The $210 move-in fee covers administrative costs, initial setup, and helps ensure residents are serious about their commitment. It is a one-time, non-refundable fee paid at the time of move-in. Combined with your first week's rent ($275), the total to move in is $485.",
  },
  {
    question: "Do you accept Medicaid, Medicare, or health insurance?",
    answer:
      "No. Ocean Breeze is a private pay only residence. We do not accept Medicaid, Medicare, private health insurance, or government vouchers of any kind. Payment must be made by the resident or their family/support network. Some residents use personal savings, family contributions, or Employee Assistance Program (EAP) benefits — ask us if you have questions about payment options.",
  },
  {
    question: "Is employment required to live at Ocean Breeze?",
    answer:
      "Yes. All residents must be employed or have employment secured before or very shortly after moving in. Employment is a non-negotiable requirement because it provides the daily structure, financial stability, and sense of purpose that are essential to sustained recovery. If you are between jobs, please contact us — we can discuss your situation on a case-by-case basis.",
  },
  {
    question: "Is there drug testing?",
    answer:
      "Yes. All residents are subject to random drug and alcohol screening. Testing is random rather than scheduled to maintain genuine accountability throughout the resident's stay. A positive test result is taken seriously and may result in discharge, depending on the circumstances. We ask that residents be honest with management about any struggles — communication is always the better path.",
  },
  {
    question: "Who is the manager? Is there always someone available?",
    answer:
      "Our manager is Kevin Smith, who lives on-site at Ocean Breeze. Kevin is available 24 hours a day, 7 days a week. This means there is always someone on the property to address concerns, provide support, de-escalate situations, or simply be a grounding presence. This is one of the most important aspects of what makes Ocean Breeze different from remotely managed sober living homes.",
  },
  {
    question: "What are the room options? Do I get a private room?",
    answer:
      "Ocean Breeze has 5 rooms total: 2 single (private) rooms and 3 double rooms (2 residents per room), for a total capacity of 8 beds. Both room types are priced at $275/week — the same rate. Room assignments are made at the time of admission based on availability. Contact us to ask about what's currently available.",
  },
  {
    question: "Where is Ocean Breeze located?",
    answer:
      "Ocean Breeze Recovery Housing is located at 700 38th St, West Palm Beach, FL 33407. West Palm Beach is one of the most recovery-supportive communities in Florida, with hundreds of AA and NA meetings per week, strong employment opportunities, and a large peer recovery network. The location offers access to public transportation, grocery stores, and major employment corridors.",
  },
  {
    question: "Is Ocean Breeze FARR certified?",
    answer:
      "Ocean Breeze is actively pursuing certification from the Florida Association of Recovery Residences (FARR), the state's leading certification body for recovery homes. We are committed to meeting FARR's standards for resident rights, management practices, physical environment, intake/discharge policies, and peer support. Certification is a process, and our pursuit of it reflects our commitment to operating with integrity and accountability.",
  },
  {
    question: "What is the admissions process?",
    answer:
      "The process has 6 steps: (1) Contact us by phone or using our intake form. (2) Have a brief phone call with Kevin to discuss your situation and confirm you meet requirements. (3) Schedule a tour of the house if desired. (4) Review and sign the house agreement. (5) Pay move-in costs ($485 total). (6) Move in. The entire process can happen within 24–48 hours if a bed is available and requirements are met.",
  },
  {
    question: "What do I need to bring on move-in day?",
    answer:
      "Bring: a government-issued photo ID, your Social Security card, proof of employment (pay stub or offer letter), your move-in payment ($485 in cash or money order), clothing for at least a week, personal hygiene items, any prescribed medications in original bottles, your phone and charger, and any personal items that matter to you. Your room comes fully furnished — you don't need to bring furniture.",
  },
  {
    question: "Do you accept men with criminal records?",
    answer:
      "We review applications with criminal records on a case-by-case basis. Violent criminal history is generally disqualifying, but we understand that many men in recovery have past legal issues. Contact us directly to discuss your specific situation. We're committed to giving men a fair chance, while also protecting the safety of all residents and the community.",
  },
  {
    question: "Can I have visitors?",
    answer:
      "Visitor policies are outlined in the house agreement and reviewed during orientation. In general, visitors may be allowed with advance notice and during appropriate hours. Overnight guests are not permitted. The priority is always the safety, privacy, and well-being of all residents.",
  },
  {
    question: "What happens if I relapse?",
    answer:
      "A positive drug test or confirmed relapse is taken very seriously, as it affects not just the individual but the entire household community. Depending on circumstances, a relapse may result in discharge from the home. We strongly encourage residents to reach out to Kevin — or any housemate they trust — if they are struggling before using. Honesty and communication are valued, and we will always try to connect a resident with appropriate support.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #0D9488 0%, #0f766e 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-teal-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-teal-100 text-xl max-w-2xl">
            Answers to the most common questions about Ocean Breeze Recovery Housing — cost, requirements,
            amenities, location, and the admissions process.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20" style={{ backgroundColor: "#FDF6EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {[
              { label: "Cost & Pricing", count: 3 },
              { label: "Requirements", count: 3 },
              { label: "Living at Ocean Breeze", count: 4 },
              { label: "Admissions", count: 5 },
            ].map((cat) => (
              <div
                key={cat.label}
                className="text-center p-3 rounded-xl bg-white border border-gray-100 shadow-sm text-sm"
              >
                <p className="font-semibold text-gray-900">{cat.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{cat.count} questions</p>
              </div>
            ))}
          </div>

          <FAQAccordion items={faqs} />

          {/* Still have questions */}
          <div
            className="mt-14 rounded-2xl p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, #0D9488, #065f46)" }}
          >
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p className="text-teal-100 mb-6">
              Kevin Smith is available 24/7. Call or fill out our intake form — we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:5616467097"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-teal-800 bg-white transition-all hover:bg-teal-50"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (561) 646-7097
              </a>
              <Link
                href="/admissions#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#F97316" }}
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <Link href="/amenities" className="rounded-xl p-4 border border-gray-200 font-semibold text-gray-700 hover:bg-teal-50 hover:border-teal-200 transition-all">
              Amenities &amp; Pricing
            </Link>
            <Link href="/about" className="rounded-xl p-4 border border-gray-200 font-semibold text-gray-700 hover:bg-teal-50 hover:border-teal-200 transition-all">
              About Our Program
            </Link>
            <Link href="/admissions" className="rounded-xl p-4 border border-gray-200 font-semibold text-gray-700 hover:bg-teal-50 hover:border-teal-200 transition-all">
              How to Apply
            </Link>
            <Link href="/blog" className="rounded-xl p-4 border border-gray-200 font-semibold text-gray-700 hover:bg-teal-50 hover:border-teal-200 transition-all">
              Recovery Blog
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Questions Answered — Now Take the Next Step"
        subtitle="We've answered the common questions, but every situation is unique. Let's have a real conversation about whether Ocean Breeze is right for you."
      />
    </>
  );
}
