export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ocean Breeze Recovery Housing",
  description:
    "Men's sober living home in West Palm Beach, FL offering structured, affordable recovery housing at $275/week.",
  url: "https://oceanbreezerecoveryhousing.com",
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
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$275/week",
  paymentAccepted: "Private Pay",
};

export const faqSchemaItems = [
  {
    question: "What is sober living?",
    answer:
      "Sober living is a structured, substance-free residential environment that bridges the gap between inpatient treatment and independent living. Residents live in a community with others in recovery, follow house rules, and work toward long-term sobriety.",
  },
  {
    question: "How much does sober living cost at Ocean Breeze?",
    answer:
      "Ocean Breeze Recovery Housing costs $275 per week. Move-in requires a $210 deposit plus the first week's rent. We are private pay only and do not accept insurance.",
  },
  {
    question: "What is the move-in process?",
    answer:
      "Contact us by phone or through our admissions form, complete a brief phone interview with manager Kevin Smith, and then schedule your move-in date. You'll need to bring your ID, payment for the deposit and first week's rent, and your personal belongings.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "No. Ocean Breeze Recovery Housing is private pay only. We do not accept insurance, Medicaid, or Medicare.",
  },
  {
    question: "Do you drug test residents?",
    answer:
      "Yes. All residents are subject to random drug screening as a condition of living at Ocean Breeze. We maintain a strictly drug-free and alcohol-free environment.",
  },
  {
    question: "Can I work while living at Ocean Breeze?",
    answer:
      "Yes — in fact, employment is a requirement. All residents must be employed or actively seeking employment. Work is an important part of recovery and helps residents build stability and independence.",
  },
  {
    question: "What are the house rules?",
    answer:
      "Residents must remain drug and alcohol free, pay rent on time each week, maintain employment, participate in random drug screening, respect other residents and the property, and follow all house guidelines established by manager Kevin Smith.",
  },
  {
    question: "How long can I stay?",
    answer:
      "There is no fixed length of stay. Residents may remain as long as they are in compliance with house rules, maintaining sobriety, and current on rent. Many residents stay 6 to 12 months or longer as they build their recovery foundation.",
  },
  {
    question: "What's included in the weekly rent?",
    answer:
      "The $275/week rent includes your furnished room, all utilities (electricity, water, internet), house supplies such as toilet paper and cleaning products, access to workout equipment, and 24/7 access to our live-in manager Kevin Smith.",
  },
  {
    question: "Is there a manager on-site?",
    answer:
      "Yes. Kevin Smith, our live-in manager, is available 24 hours a day, 7 days a week. He guides residents in their recovery, addresses any concerns, and is always reachable.",
  },
  {
    question: "What is FARR certification?",
    answer:
      "FARR stands for the Florida Association of Recovery Residences. It is a statewide organization that certifies sober living homes to ensure they meet quality and ethical standards. Ocean Breeze Recovery Housing is actively pursuing FARR certification.",
  },
  {
    question: "Where is Ocean Breeze located?",
    answer:
      "Ocean Breeze Recovery Housing is located at 700 38th St, West Palm Beach, FL 33407.",
  },
  {
    question: "Is this men's only housing?",
    answer:
      "Yes. Ocean Breeze Recovery Housing is a men's only sober living home.",
  },
  {
    question: "What do I need to bring when I move in?",
    answer:
      "Bring a valid photo ID, enough clothing and toiletries for your stay, any prescription medications, payment for the $210 deposit and first week's rent ($275), and a commitment to your recovery.",
  },
  {
    question: "How do I apply?",
    answer:
      "You can apply by calling Kevin Smith at (561) 646-7097, emailing oceanbreezerecovery3@gmail.com, or submitting our online admissions form. Kevin will conduct a brief phone interview and work with you on a move-in date.",
  },
];
