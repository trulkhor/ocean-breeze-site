import type { Metadata } from "next";
import Link from "next/link";
import AmenityCard from "@/components/AmenityCard";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Men's Sober Living West Palm Beach FL | Ocean Breeze Recovery Housing",
  description:
    "Ocean Breeze Recovery Housing — men's sober living home in West Palm Beach, FL. $275/week, fully furnished, utilities included, 24/7 live-in manager. Private pay. Call (561) 646-7097.",
  alternates: {
    canonical: "https://www.oceanbreezerecoveryhousing.com",
  },
  openGraph: {
    title: "Ocean Breeze Recovery Housing | Men's Sober Living West Palm Beach FL",
    description:
      "Safe, structured men's sober living in West Palm Beach. $275/week, fully furnished, 24/7 live-in manager. Call (561) 646-7097.",
    url: "https://www.oceanbreezerecoveryhousing.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Breeze Recovery Housing | Men's Sober Living West Palm Beach",
    description: "Structured, affordable men's sober living in West Palm Beach, FL. $275/week all-inclusive.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ocean Breeze Recovery Housing",
  description:
    "Men's sober living home in West Palm Beach, FL offering structured, affordable recovery housing at $275/week.",
  url: "https://www.oceanbreezerecoveryhousing.com",
  telephone: "+15616467097",
  email: "oceanbreezerecovery3@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "700 38th St",
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: "33407",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7353,
    longitude: -80.0636,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$275/week",
  paymentAccepted: "Private Pay",
};

const amenities = [
  {
    title: "Furnished Rooms",
    description:
      "Move in with just your belongings. All rooms come fully furnished so you can focus on your recovery, not logistics.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Workout Equipment",
    description:
      "Physical fitness is a cornerstone of healthy recovery. On-site workout equipment helps you build strength and discipline.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Utilities Included",
    description:
      "Electric, water, and internet are all covered in your weekly rent. No surprise bills or added financial stress.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "House Supplies",
    description:
      "Toilet paper, cleaning supplies, and common household items are provided. One less thing to worry about.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "24/7 Manager On-Site",
    description:
      "Live-in manager Kevin Smith is available around the clock. Whether you need guidance or just someone to talk to, he's there.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Structured Program",
    description:
      "Employment requirements, drug testing, and community accountability create the structure that supports lasting recovery.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "8", label: "Total Beds" },
  { value: "$275", label: "Per Week" },
  { value: "24/7", label: "Manager On-Site" },
  { value: "2024", label: "Established" },
];

const whyUs = [
  {
    title: "Affordable Pricing",
    description:
      "At $275/week with utilities and supplies included, Ocean Breeze offers exceptional value in the West Palm Beach sober living market. Transparent pricing with no hidden fees.",
    icon: "💲",
  },
  {
    title: "Structured Environment",
    description:
      "Employment requirements, random drug screening, and clear house rules create the accountability framework that research shows helps residents maintain long-term sobriety.",
    icon: "🏠",
  },
  {
    title: "Supportive Community",
    description:
      "Recovery happens in community. Our residents support each other while manager Kevin Smith provides guidance, connection to local IOP groups, and 24/7 availability.",
    icon: "🤝",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{ background: "linear-gradient(160deg, #0d9488 0%, #0f766e 40%, #fdf6ec 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="200" cy="150" r="80" fill="white" />
              <path d="M180 380 Q200 320 220 260 Q230 220 225 180" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M225 180 Q180 150 140 160" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M225 180 Q210 140 218 100" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M225 180 Q265 140 290 155" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M225 180 Q270 170 295 190" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M50 350 Q80 320 110 350 Q140 380 170 350 Q200 320 230 350 Q260 380 290 350 Q320 320 350 350" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M30 400 Q60 370 90 400 Q120 430 150 400 Q180 370 210 400 Q240 430 270 400 Q300 370 330 400" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.4" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
              Men&apos;s Sober Living &bull; West Palm Beach, FL
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Start Your Recovery Journey in{" "}
              <span className="text-teal-200">West Palm Beach.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-teal-100 leading-relaxed max-w-xl">
              Ocean Breeze Recovery Housing provides a safe, structured, and supportive environment
              for men serious about lasting sobriety. Live-in manager available 24/7. $275/week,
              all inclusive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white text-lg rounded-full transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#f87171" }}
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-teal-700 text-lg rounded-full bg-white transition-all hover:bg-teal-50 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-6">
              <a
                href="tel:+15616467097"
                className="inline-flex items-center gap-2 text-teal-100 hover:text-white transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Kevin: (561) 646-7097
              </a>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 80h1440V40C1200 80 960 0 720 40S240 80 0 40V80z" fill="#fdf6ec" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "#0d9488" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              About Ocean Breeze
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              A Foundation for Real Recovery
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ocean Breeze Recovery Housing is a men&apos;s sober living home in the heart of West
              Palm Beach, Florida. We believe that lasting recovery requires more than just
              abstinence — it requires structure, community, purpose, and accountability.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Live-in manager Kevin Smith brings genuine care and commitment to every resident.
              He speaks at local IOP groups, guides residents through challenges, and is available
              any hour of the day or night. When you live at Ocean Breeze, you&apos;re never alone
              in your journey.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold transition-colors"
              style={{ color: "#0d9488" }}
            >
              Learn about our program
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div
            className="rounded-2xl p-8 shadow-sm border"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#99f6e4" }}
          >
            <h3 className="text-lg font-bold mb-5" style={{ color: "#0f766e" }}>
              What Makes Ocean Breeze Different
            </h3>
            <ul className="space-y-4">
              {[
                "Men's only — focused, peer-supported environment",
                "Live-in manager Kevin Smith available 24 hours a day",
                "Employment requirement builds stability and purpose",
                "Random drug screening maintains accountability",
                "All utilities and house supplies included",
                "Connection to local IOP and treatment programs",
                "Pursuing FARR certification for quality assurance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#0d9488" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Focus on Recovery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your $275/week covers far more than just a room. We&apos;ve built an environment
              designed to remove barriers and support your recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity) => (
              <AmenityCard
                key={amenity.title}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/amenities"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "#0d9488" }}
            >
              See Full Amenities & Pricing
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#0d9488" }}>
            Why Ocean Breeze
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Men Who Are Serious About Recovery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl"
                style={{ backgroundColor: "#ccfbf1" }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA title="Ready to Take the Next Step?" subtitle="Beds fill quickly. Contact manager Kevin Smith today to check availability and begin your admissions process." showPhone={true} />
    </>
  );
}
