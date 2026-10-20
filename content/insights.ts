import { asset } from "@/lib/asset";

const IMG = {
  namp: asset(
    "https://api.tractrac.co/media/blog-images/ab4eaf45-0af6-4dc1-94ed-fe8bccafb4c0.webp",
  ),
  beyond: asset(
    "https://api.tractrac.co/media/blog-images/ecc74039-bd3e-4908-9785-0bec2d530269.webp",
  ),
  tractors: asset(
    "https://api.tractrac.co/media/blog-images/444d2ee4-e164-4dd5-9cfc-37a577ccebfb.webp",
  ),
  hailing: asset(
    "https://api.tractrac.co/media/blog-images/5f897330-dd34-4df1-8807-20998484dd26.webp",
  ),
  dialogue: asset(
    "https://api.tractrac.co/media/blog-images/04787261-dc03-4124-8978-c801b8dc83c7.webp",
  ),
};

export type Article = {
  category: string;
  date?: string;
  title: string;
  excerpt?: string;
  href: string;
  image?: string;
  alt?: string;
};

export const INSIGHTS = {
  heroImage: IMG.beyond,
  heroAlt: "ISSAM labour-saving devices in use, from the Beyond Tractors article",
  featured: {
    category: "Policy",
    date: "September 4, 2026",
    title:
      "The NAMP Journey: Building Nigeria's Roadmap for Agricultural Mechanization",
    excerpt:
      "For years, one question has shaped conversations around agricultural mechanization in Nigeria: how do we get modern farm equipment into the hands of the millions of farmers who need it most? The answers have never been simple.",
    href: "https://tractrac.co/blog/the-national-agricultural-mechanisation-policy-2026-journey-so-far",
    image: IMG.namp,
    alt: "Featured image for The NAMP Journey article",
  } satisfies Article,
  programmeLead: {
    category: "Programmes",
    date: "August 11, 2026",
    title:
      "Beyond Tractors: How ISSAM Project Is Powering Rural Farming with Labour-Saving Devices",
    excerpt:
      "At the end of year one of the ISSAM project, the numbers tell a clear story. The project distributed 283 grain threshers, 283 treadle pumps, 566 solar-powered knapsack sprayers, 566 fertiliser applicators and 283 soil testing kits. But it didn’t end there.",
    href: "https://tractrac.co/blog/beyond-tractors-how-issam-project-is-powering-rural-farming-with-labour-saving-devices",
    image: IMG.beyond,
    alt: "Image from the Beyond Tractors article",
  } satisfies Article,
  programmeList: [
    {
      category: "Programmes",
      title:
        "Operators' Training and Community Demo Events Strengthen Mechanization Ecosystems Across Nasarawa - ISSAM Project",
      excerpt:
        "Over 28,000 farmers were reached in April and May as the ISSAM project drives operator training and community demo events with year 1 MSPs across Nasarawa state.",
      href: "https://tractrac.co/blog",
    },
    {
      category: "Programmes",
      title: "Turning Lessons and Demand Into Impact: Inside the ISSAM Project Year 2",
      href: "https://tractrac.co/blog",
    },
    {
      category: "Programmes",
      title:
        "Inside Tractrac and Mastercard Foundation’s Partnership: Improving Smallholder Farmers’ Access to Small-Scale Agricultural Mechanization (ISSAM) Project",
      href: "https://tractrac.co/blog",
    },
  ] satisfies Article[],
  peopleLead: {
    category: "People · ISSAM",
    title:
      "How the ISSAM Project is Creating a New Generation of MSPs: Abigail’s Story",
    excerpt:
      "The phrase “employment opportunity” is not something many rural youths in Nigeria can confidently say they have experienced.",
    href: "https://tractrac.co/blog",
  } satisfies Article,
  peopleList: [
    {
      category: "People",
      title:
        "Q&A: How 25-Year-Old Chiluun Terver Is Growing His 25-Hectare Agribusiness",
      href: "https://tractrac.co/blog",
    },
    {
      category: "People · Youth",
      title:
        "International Youth Day 2025: Local Youth-Led Mechanization Enterprises for Global Impact",
      href: "https://tractrac.co/blog",
    },
  ] satisfies Article[],
  guides: {
    categories: ["All", "Guides", "Technology", "Mechanisation"],
    featured: [
      {
        category: "Guides",
        date: "July 6, 2026",
        title: "Top 5 Tractors for Farming in Nigeria and Their Prices",
        excerpt:
          "Buying a tractor in Nigeria is more than choosing a popular brand. In this blog, we sat with our expert on farm mechanization to discuss the best options, prices and things to consider before making a costly farming investment.",
        href: "https://tractrac.co/blog/top-5-tractors-for-farming-in-nigeria-and-their-prices",
        image: IMG.tractors,
        alt: "Banner for Top 5 Tractors for Farming in Nigeria and Their Prices",
      },
      {
        category: "Technology",
        date: "July 20, 2026",
        title:
          "Tractor-hailing in Nigeria: The Uber-Style Way to Book Farm Machinery",
        excerpt:
          "Instead of relying solely on word-of-mouth or local contacts, farmers can connect with tractor owners and mechanization service providers through tractor hailing apps like TracTrac Plus, making access to farm machinery faster and more convenient.",
        href: "https://tractrac.co/blog/tractor-hailing-in-nigeria-the-uber-style-way-to-book-farm-machinery",
        image: IMG.hailing,
        alt: "Banner for Tractor-hailing in Nigeria: The Uber-Style Way to Book Farm Machinery",
      },
    ] satisfies Article[],
    list: [
      {
        category: "Guides",
        title: "How to Hire a Tractor in Nigeria: With Cost Breakdown",
        excerpt:
          "This guide breaks down the process of finding the networks and digital platforms to hire a tractor step by step, shows what tractor hire actually costs right now, and points to where the more reliable providers are found.",
        href: "https://tractrac.co/blog/how-to-hire-a-tractor-in-nigeria-with-cost-breakdown",
      },
      {
        category: "Guides",
        title:
          "Where to Rent a Tractor Near You: Small Tractors, Trailers, and Ploughs Explained",
        excerpt:
          "When you type \"rent a tractor near me\" into Google in Nigeria, you'll often get a mixed bag: dealership pages for buying new tractors, listings from another state entirely, or business pages that haven't been updated in years.",
        href: "https://tractrac.co/blog/where-to-rent-a-tractor-near-you-small-tractors-trailers-and-ploughs-explained",
      },
      {
        category: "Technology",
        title:
          "Climate-Smart Agriculture and Mechanization: The Future of Nigerian Farming",
        excerpt:
          "Climate-smart mechanization is not only about physical machines. Digital tools are becoming an essential part of the picture.",
        href: "https://tractrac.co/blog/climate-smart-agriculture-and-mechanization-the-future-of-nigerian-farming",
      },
      {
        category: "Mechanisation",
        title:
          "Who is a Mechanization Service Provider (MSP)? Their Role in Nigerian Agriculture Fully Explained",
        excerpt:
          "According to the FAO and the Federal Ministry of Agriculture and Rural Development (FMARD), a mechanization service provider is an individual, cooperative, or firm that offers equipment-based agricultural services to farmers.",
        href: "https://tractrac.co/blog",
      },
      {
        category: "Guides",
        title: "How to Choose the Right Tractor for Your Farm",
        href: "https://tractrac.co/blog",
      },
      {
        category: "Guides",
        title: "Farm Tractor vs. Mini Tractor: Which Is Right for Your Needs?",
        href: "https://tractrac.co/blog",
      },
      {
        category: "Mechanisation",
        title: "Why farmers need mechanization services",
        href: "https://tractrac.co/blog",
      },
      {
        category: "Mechanisation",
        title: "Why Nigerian Farmers Still Use Hoes in 2026?",
        href: "https://tractrac.co/blog",
      },
    ] satisfies Article[],
  },
  policyLead: {
    category: "Policy",
    date: "August 10, 2026",
    title:
      "High-Level National Policy Dialogue and Ratification of the National Agricultural Mechanisation Policy 2026",
    excerpt:
      "TracTrac MSL, in collaboration with the Federal Ministry of Agriculture and Food Security, is convening the High-Level National Dialogue on Agricultural Mechanization, themed: \"Anchoring National Food Sovereignty Through Sustainable Agricultural Mechanization Policy, Innovation and Strategic Investment.\"",
    href: "https://tractrac.co/blog/high-level-national-policy-dialogue-and-ratification-of-the-national-agricultural-mechanisation-policy-2026",
    image: IMG.dialogue,
    alt: "High-level policy dialogue flier",
  } satisfies Article,
  policyList: [
    {
      category: "Industry",
      title:
        "Nigeria’s Mechanization Shift: What It Means for Farmers and the Future of Farming",
      excerpt:
        "There is a growing understanding that agricultural mechanization in Nigeria cannot succeed as a government-only effort.",
      href: "https://tractrac.co/blog",
    },
    {
      category: "Policy",
      title: "TracTrac Launches Inclusive Agricultural Mechanization Strategy",
      excerpt:
        "On March 9, 2026, at a convening aligned with International Women's Day, TracTrac launched its Inclusive Agricultural Mechanization Strategy.",
      href: "https://tractrac.co/blog",
    },
    {
      category: "Industry",
      title:
        "Leading Agricultural Mechanization Service Firms Driving Farm Productivity in Nigeria",
      href: "https://tractrac.co/blog",
    },
    {
      category: "People · Policy",
      title:
        "International Year of the Woman Farmer 2026: Women Must Be at the Center of Nigeria’s Mechanization Future",
      href: "https://tractrac.co/blog",
    },
  ] satisfies Article[],
};
