import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D9488" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="bg-white inline-block rounded-lg p-3 mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-teal-100 text-sm leading-relaxed mb-4 max-w-sm">
              A structured, supportive men&apos;s sober living home in West Palm Beach, FL.
              We provide a safe environment for men in recovery to rebuild their lives
              with accountability, community, and professional oversight.
            </p>
            <div className="flex flex-col gap-2 text-sm text-teal-100">
              <a href="tel:5616467097" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (561) 646-7097
              </a>
              <a href="mailto:oceanbreezerecovery3@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                oceanbreezerecovery3@gmail.com
              </a>
              <address className="flex items-start gap-2 not-italic">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                700 38th St, West Palm Beach, FL 33407
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About & Program" },
                { href: "/amenities", label: "Amenities & Pricing" },
                { href: "/admissions", label: "Admissions" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-teal-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Recovery Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-teal-100">
              <li>
                <a
                  href="https://www.farrinc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FARR — Florida Association of Recovery Residences
                </a>
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  SAMHSA National Helpline
                </a>
              </li>
              <li>
                <a
                  href="https://www.aa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Alcoholics Anonymous
                </a>
              </li>
              <li>
                <a
                  href="https://www.na.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Narcotics Anonymous
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-teal-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-200">
          <p>&copy; {new Date().getFullYear()} Ocean Breeze Recovery Housing. All rights reserved.</p>
          <p className="text-center max-w-lg">
            <strong>Disclaimer:</strong> Ocean Breeze Recovery Housing is a peer-support sober living residence,
            not a licensed medical or clinical treatment facility. We do not provide medical detox or clinical therapy.
            If you are in crisis, please call <strong>988</strong> (Suicide &amp; Crisis Lifeline) or{" "}
            <strong>1-800-662-4357</strong> (SAMHSA Helpline).
          </p>
        </div>
      </div>
    </footer>
  );
}
