import Link from "next/link";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export default function ContactCTA({
  title = "Ready to Take the Next Step?",
  subtitle = "Beds fill quickly. Contact us today to check availability and start your recovery journey.",
  showPhone = true,
}: ContactCTAProps) {
  return (
    <section style={{ backgroundColor: "#0D9488" }} className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#F97316" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            Check Availability
          </Link>
          {showPhone && (
            <a
              href="tel:5616467097"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-teal-700 text-lg bg-white transition-all duration-200 hover:bg-teal-50 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (561) 646-7097
            </a>
          )}
        </div>
        <p className="mt-6 text-teal-200 text-sm">
          Manager Kevin Smith available 24/7 &bull; We respond within 24 hours
        </p>
      </div>
    </section>
  );
}
