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
    content: "How much does sober living cost in West Palm Beach? If you or someone you love is considering sober living in Palm Beach County, the answer depends on several factors — the quality of the home, what's included, and the level of oversight.\n\n## The Short Answer\n\nIn West Palm Beach, sober living homes typically cost between $175 and $500 per week. At Ocean Breeze Recovery Housing, the rate is $275/week all-inclusive — your room, utilities, WiFi, household supplies, and workout equipment are all covered.\n\n## What Affects Sober Living Costs\n\n**Management quality**: Live-in managers cost more but provide better outcomes and accountability.\n\n**What's included**: All-inclusive pricing means higher weekly rates but often lower true costs than homes charging rent plus utilities separately.\n\n**Room type**: Private rooms typically cost more. At Ocean Breeze, both single and double rooms are $275/week.\n\n**Location**: Proximity to the beach or high-cost areas affects pricing.\n\n## Move-In Costs\n\nMost sober living homes charge a move-in fee in addition to first week's rent. At Ocean Breeze, the move-in fee is $210 plus first week's rent of $275 — total of $485 to move in.\n\n## Is $275/Week Good Value?\n\nYes. You receive a furnished room, all utilities, live-in manager available 24/7, workout equipment, and a structured accountability environment. Comparable homes often charge $300–$400/week. Ocean Breeze keeps costs affordable while maintaining high quality.\n\n## How to Compare Options\n\nAlways ask: Is the manager live-in? Are utilities included? Is drug testing regular? Is employment required? Is the home pursuing FARR certification? These factors matter more than price alone.\n\nCall (561) 646-7097 to learn more about Ocean Breeze.",
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
    content: "Moving into a sober living home for the first time can feel overwhelming — and that's completely normal. Understanding what to expect can help you feel prepared and ready to make the most of this chapter in your recovery.\n\n## Day One: Move-In and Orientation\n\nOn your first day, you'll meet the house manager, tour the property, review house rules, and get settled into your room. At Ocean Breeze, manager Kevin Smith is on-site to welcome you personally. Your room is fully furnished — utilities, WiFi, and supplies are all included.\n\n## Daily Structure\n\nSober living provides structure without dictating every moment. Most days follow a rhythm: morning routine, work, evening recovery activities, and rest. Employment is required — it provides daily structure, financial stability, and purpose that are critical in recovery.\n\n## House Rules\n\nEvery quality sober living home has clear rules protecting the entire community: zero tolerance for drugs and alcohol, employment requirement, random drug screening, rent paid on time, respect for housemates, and participation in household chores.\n\n## The Community\n\nLiving with other men in recovery provides peer support unlike anything you can build alone. Our small 8-bed home creates an intimate, real community. You'll share meals, stories, hard days, and victories.\n\n## Common First-Month Challenges\n\n**Sleep disruption**: New environment, new sounds. Typically improves within two weeks.\n\n**Financial adjustment**: Paying rent from a new job requires planning. Build a simple budget early.\n\n**Cravings**: Normal in early recovery. Have a plan — call your sponsor, talk to a housemate, reach out to Kevin.\n\n## Tips for Success\n\nBe honest with your manager. Do chores without being asked. Get a sponsor. Attend meetings. Ask for help — no one expects you to have it all figured out.\n\nCall Kevin at (561) 646-7097 with any questions.",
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
    content: "Sober living homes and halfway houses are two different types of recovery housing, often confused with one another. Understanding the differences can help you make the right choice.\n\n## What Is a Halfway House?\n\nA halfway house is typically government-funded or nonprofit transitional housing for people reintegrating after incarceration or residential treatment. Often court-ordered, costs to residents are low or free — but so are amenities and flexibility.\n\n## What Is a Sober Living Home?\n\nA sober living home is a privately operated, substance-free housing option for people in recovery. Residents choose to be there voluntarily. They pay weekly rent, follow house rules, and live in a peer recovery community.\n\n## Key Differences\n\n**Cost**: Sober living is private pay ($175–$500/week). Halfway houses are usually free or very low cost.\n\n**Who lives there**: Sober living serves anyone in recovery voluntarily. Halfway houses often serve justice-involved individuals.\n\n**Independence**: Sober living offers more autonomy — you set your schedule within house rules. Halfway houses are more institutionally structured.\n\n**Length of stay**: Sober living has no fixed maximum. Halfway houses often have program-determined or court-determined time limits.\n\n**Management**: Sober living homes often have a live-in manager. Halfway houses are typically staffed by program employees.\n\n## Which Is Right for You?\n\nChoose sober living if you are voluntarily seeking structured community, can afford weekly rent, and want more autonomy. Halfway houses may be appropriate if you are court-ordered to transitional housing or cannot afford private sober living.\n\n## About Ocean Breeze Recovery Housing\n\nOcean Breeze is a private men's sober living home in West Palm Beach. $275/week all-inclusive. Live-in manager Kevin Smith available 24/7. Call (561) 646-7097.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
