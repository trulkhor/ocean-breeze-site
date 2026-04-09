export const localBusinessSchema = {
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
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$275/week",
  paymentAccepted: "Private Pay",
};
