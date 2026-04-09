import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export default function CTASection({
  title = "Ready to Take the Next Step?",
  subtitle = "Beds fill quickly. Contact us today to check availability and start your recovery journey.",
  showPhone = true,
}: CTASectionProps) {
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
            Check Availability
          </Link>
          {showPhone && (
            <a
              href="tel:5616467097"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-teal-700 text-lg bg-white transition-all duration-200 hover:bg-teal-50 hover:scale-105"
            >
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
