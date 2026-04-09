export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sober-living-cost-west-palm-beach",
    title: "How Much Does Sober Living Cost in West Palm Beach? [2026 Guide]",
    excerpt:
      "A practical, honest breakdown of sober living costs in West Palm Beach, FL. Learn what's included at different price points, what the average weekly rate is, and how Ocean Breeze at $275/week compares.",
    date: "2026-01-15",
    readTime: "7 min",
    category: "Pricing",
    author: "Ocean Breeze Recovery Housing",
  },
  {
    slug: "what-to-expect-sober-living",
    title: "What to Expect in Sober Living: A Complete Guide",
    excerpt:
      "New to sober living? Learn what to expect during your stay — daily structure, house rules, community life, employment requirements, and how to make the most of your recovery journey.",
    date: "2026-02-01",
    readTime: "8 min",
    category: "Recovery Tips",
    author: "Ocean Breeze Recovery Housing",
  },
  {
    slug: "sober-living-vs-halfway-house",
    title: "Sober Living vs Halfway House: What's the Difference?",
    excerpt:
      "Confused about sober living homes vs halfway houses? We break down the key differences in cost, structure, requirements, oversight, and who each type of housing is best suited for.",
    date: "2026-02-20",
    readTime: "6 min",
    category: "Education",
    author: "Ocean Breeze Recovery Housing",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
