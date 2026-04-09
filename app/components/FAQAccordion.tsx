"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <details
          key={index}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm group open:shadow-md transition-all duration-200"
        >
          <summary className="flex items-start justify-between gap-4 px-6 py-5 cursor-pointer list-none">
            <h2 className="text-gray-900 font-semibold text-base leading-snug pr-2">
              {faq.question}
            </h2>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
              style={{ backgroundColor: "#CCFBF1", color: "#0D9488" }}
              aria-hidden="true"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </summary>
          <div className="px-6 pb-5">
            <div className="w-full h-px bg-gray-100 mb-4" aria-hidden="true" />
            <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
