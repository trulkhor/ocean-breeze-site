import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import { faqSchemaItems } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Sober Living West Palm Beach",
  description:
    "Answers to common questions about sober living in West Palm Beach. Costs, rules, admissions, drug testing, and more at Ocean Breeze Recovery Housing.",
  alternates: {
    canonical: "https://oceanbreezerecoveryhousing.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you want to know about sober living at Ocean Breeze Recovery Housing."
        breadcrumb={[{ label: "FAQ" }]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <FAQAccordion items={faqSchemaItems} />

        <div
          className="mt-16 rounded-2xl p-8 text-center border"
          style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            Manager Kevin Smith is available 24/7 to answer any questions you have about
            Ocean Breeze. Don&apos;t hesitate to call or reach out.
          </p>
          <a
            href="tel:+15616467097"
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: "#0d9488" }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (561) 646-7097
          </a>
        </div>
      </div>

      <ContactCTA
        title="Ready to Take the Next Step?"
        subtitle="Apply now or call Kevin Smith to check bed availability at Ocean Breeze."
        showPhone={true}
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
