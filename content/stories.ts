import { asset } from "@/lib/asset";

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption: string };

export type StoryImage = {
  src: string;
  alt: string;
};

export type Story = {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  location: string;
  person: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  body: StoryBlock[];
  gallery: StoryImage[];
  nextSlug: string;
};

export const STORIES: Story[] = [
  {
    slug: "service-providers",
    category: "Service providers",
    title: "What it really costs to keep a machine working.",
    standfirst:
      "Keana LGA — on fuel, repairs, idle weeks and the jobs that never get paid.",
    location: "Keana LGA, Nasarawa State",
    person: "Musa Adamu, tractor owner and operator",
    readTime: "6 min read",
    heroImage: asset("uploads/Existing MSP Interview Keana LGA.jpg"),
    heroAlt:
      "A mechanisation service provider in a TracTrac shirt talking with a researcher at the roadside in Keana LGA",
    body: [
      {
        type: "paragraph",
        text: "Musa Adamu bought his first tractor eleven years ago with savings from three harvests and a loan from his brother. Today he runs two machines out of Keana, ploughing and harrowing for farmers up to forty kilometres away.",
      },
      {
        type: "paragraph",
        text: "When our field team sat down with him by the roadside, he started with a number. Before he leaves the yard, every job has already cost him money: diesel, an operator, a spare belt he keeps in the cab, and the phone credit spent finding the farmer in the first place.",
      },
      {
        type: "quote",
        text: "People see the tractor moving and think I am making money. Half the time I am only paying the tractor back.",
      },
      {
        type: "paragraph",
        text: "Repairs are the cost he plans for least and fears most. The nearest dealer for some parts is in Abuja. A broken hydraulic pump in the middle of the season once kept one machine parked for nineteen days, through the busiest window of the year.",
      },
      {
        type: "paragraph",
        text: "Idle weeks are the other side of the same problem. Demand arrives all at once when the rains begin, then drops away. Between those peaks, the machine and its operator still have to be paid for.",
      },
      {
        type: "paragraph",
        text: "Then there are the jobs that never get paid. Musa estimates that one in ten jobs ends with a promise rather than cash. Some farmers pay after harvest. Some never do. Without a record of what was agreed, there is little he can do.",
      },
      {
        type: "image",
        src: asset("uploads/Copy of DSC08699.jpg"),
        alt: "An operator working farmland with a TracTrac tractor",
        caption: "Mechanisation work around Keana, Nasarawa State.",
      },
      {
        type: "quote",
        text: "If I know where the next job is before I finish this one, the whole season changes.",
      },
      {
        type: "paragraph",
        text: "What he described is the problem TracTrac set out to work on: keeping machines busy across a wider area, with bookings and payments recorded from the start. For Musa, a full season is not about more tractors. It is about fewer empty days for the ones he already has.",
      },
    ],
    gallery: [
      {
        src: asset("uploads/Existing MSP Interview Keana LGA.jpg"),
        alt: "A mechanisation service provider in a TracTrac shirt talking with a researcher at the roadside in Keana LGA",
      },
      {
        src: asset("uploads/Existing MSP Interview Lafia LGA.jpg"),
        alt: "A farmer speaking with a TracTrac field researcher on a bench under a tree in Lafia LGA",
      },
      {
        src: asset("uploads/Copy of DSC08699.jpg"),
        alt: "An operator working farmland with a TracTrac tractor",
      },
      {
        src: asset("uploads/DSC07701.jpg"),
        alt: "An operator ploughing a field with a TracTrac tractor",
      },
      {
        src: asset("uploads/Copy of DSC07693.jpg"),
        alt: "Close up of a disc plough turning soil behind a TracTrac tractor",
      },
    ],
    nextSlug: "farmers",
  },
  {
    slug: "farmers",
    category: "Farmers",
    title: "Who you call when the rains arrive early.",
    standfirst:
      "Lafia LGA — how land preparation gets arranged when the window is only days long.",
    location: "Lafia LGA, Nasarawa State",
    person: "Ibrahim Danladi, maize and soybean farmer",
    readTime: "5 min read",
    heroImage: asset("uploads/Existing MSP Interview Lafia LGA.jpg"),
    heroAlt:
      "A farmer speaking with a TracTrac field researcher on a bench under a tree in Lafia LGA",
    body: [
      {
        type: "paragraph",
        text: "Ibrahim Danladi farms four hectares of maize and soybean outside Lafia. Each year, his season depends on a few days he cannot choose: the point at which the first rains soften the ground enough to plough.",
      },
      {
        type: "paragraph",
        text: "Last year those rains came nearly two weeks early. By the time Ibrahim reached the tractor owner he usually uses, the machine was already booked for the rest of the week.",
      },
      {
        type: "quote",
        text: "Everybody calls the same man on the same morning. If you are not first, you wait.",
      },
      {
        type: "paragraph",
        text: "He spent the next four days making calls, asking relatives in nearby villages who had a machine and who might be free. He eventually found an operator from another LGA, at a higher price and with a late start.",
      },
      {
        type: "paragraph",
        text: "Planting late cost him. He estimates his maize yield was down by a quarter compared with the season before.",
      },
      {
        type: "paragraph",
        text: "What Ibrahim described is common across the farmers our team spoke to. Most rely on one or two contacts. When those fall through, there is no simple way to see which machines are nearby and available.",
      },
      {
        type: "image",
        src: asset("uploads/Copy of DSC08691.jpg"),
        alt: "An operator working farmland with a TracTrac tractor and disc plough",
        caption: "Land preparation near Lafia, Nasarawa State.",
      },
      {
        type: "quote",
        text: "I do not need to own a tractor. I need to know one will come.",
      },
      {
        type: "paragraph",
        text: "That certainty is what booking through an agent is meant to provide: a request made ahead of time, matched to a machine in the area, and confirmed before the rains decide the timetable.",
      },
    ],
    gallery: [
      {
        src: asset("uploads/Existing MSP Interview Lafia LGA.jpg"),
        alt: "A farmer speaking with a TracTrac field researcher on a bench under a tree in Lafia LGA",
      },
      {
        src: asset("uploads/IMG-20260824-WA0164.jpg"),
        alt: "A woman farmer being interviewed by a TracTrac researcher outside her home",
      },
      {
        src: asset("uploads/Copy of DSC08691.jpg"),
        alt: "An operator working farmland with a TracTrac tractor and disc plough",
      },
      {
        src: asset("uploads/Copy of DSC07693.jpg"),
        alt: "Close up of a disc plough turning soil behind a TracTrac tractor",
      },
      {
        src: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
        alt: "A TracTrac field researcher interviewing a farmer",
      },
    ],
    nextSlug: "women-in-farming",
  },
  {
    slug: "women-in-farming",
    category: "Women in farming",
    title: "Access is not the same for everyone.",
    standfirst:
      "Women farmers describe a different set of barriers to getting machinery on their plots.",
    location: "Doma LGA, Nasarawa State",
    person: "Hauwa Yakubu, rice and cassava farmer",
    readTime: "6 min read",
    heroImage: asset("uploads/IMG-20260824-WA0164.jpg"),
    heroAlt: "A woman farmer being interviewed by a TracTrac researcher outside her home",
    body: [
      {
        type: "paragraph",
        text: "Hauwa Yakubu grows rice and cassava on just under two hectares. She has farmed the same land for fifteen years, but she has hired a tractor only three times.",
      },
      {
        type: "paragraph",
        text: "When our field team visited her outside her home, she described the barriers in order. Her plot is small, so operators put her last. She often cannot pay the full amount upfront. And the people who arrange machines are almost always men she does not know.",
      },
      {
        type: "quote",
        text: "By the time they reach my farm, the big farms are finished and the rain is already gone.",
      },
      {
        type: "paragraph",
        text: "Most years she prepares her land by hand with hired labour, which takes longer and costs more per hectare than a tractor would. Some years she plants late because the work cannot be finished in time.",
      },
      {
        type: "paragraph",
        text: "Other women in her community told similar stories. Several said they had asked a husband, brother or neighbour to make the booking on their behalf.",
      },
      {
        type: "paragraph",
        text: "One solution the women raised themselves was grouping plots. If several neighbouring farms book together, the job becomes worth the operator’s trip, and the cost can be shared.",
      },
      {
        type: "image",
        src: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
        alt: "A TracTrac field researcher interviewing a farmer",
        caption: "A field visit in Doma LGA, Nasarawa State.",
      },
      {
        type: "quote",
        text: "If we stand together, the tractor will come to us. Alone, it will not.",
      },
      {
        type: "paragraph",
        text: "These conversations are shaping how TracTrac recruits agents and organises group bookings, including working with more women agents who can reach women farmers directly.",
      },
    ],
    gallery: [
      {
        src: asset("uploads/IMG-20260824-WA0164.jpg"),
        alt: "A woman farmer being interviewed by a TracTrac researcher outside her home",
      },
      {
        src: asset("uploads/IMG-20260824-WA0147.jpg"),
        alt: "A TracTrac booking agent in a branded shirt being interviewed on a bench",
      },
      {
        src: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
        alt: "A TracTrac field researcher interviewing a farmer",
      },
      {
        src: asset("uploads/DSC02329.jpg"),
        alt: "TracTrac staff and participants working together in the field",
      },
      {
        src: asset("uploads/Copy of DSC08691.jpg"),
        alt: "An operator working farmland with a TracTrac tractor and disc plough",
      },
    ],
    nextSlug: "booking-agents",
  },
  {
    slug: "booking-agents",
    category: "Booking agents",
    title: "The people behind every request.",
    standfirst:
      "Agents translate a phone call in a village into a booking a machine owner can act on.",
    location: "Akwanga LGA, Nasarawa State",
    person: "Emmanuel Ogah, TracTrac booking agent",
    readTime: "5 min read",
    heroImage: asset("uploads/IMG-20260824-WA0147.jpg"),
    heroAlt: "A TracTrac booking agent in a branded shirt being interviewed on a bench",
    body: [
      {
        type: "paragraph",
        text: "Emmanuel Ogah became a TracTrac booking agent two seasons ago. He covers eleven villages around Akwanga, most of them by motorcycle.",
      },
      {
        type: "paragraph",
        text: "On a busy day during land preparation, his phone rings from six in the morning. Farmers want to know when a tractor can come, how much it will cost and whether they can pay part now and part later.",
      },
      {
        type: "quote",
        text: "The farmer trusts me, and the tractor owner trusts me. My work is to keep both of those promises.",
      },
      {
        type: "paragraph",
        text: "Before he can make a booking, Emmanuel visits each farm to confirm its size and location. He measures the plot, records the farmer’s details and checks that the land is ready for a machine.",
      },
      {
        type: "paragraph",
        text: "He then groups nearby requests so that a tractor owner can work several farms in one trip. That grouping is often what makes a small farm worth the operator’s time.",
      },
      {
        type: "paragraph",
        text: "Network coverage is patchy in several of his villages. He captures information offline and syncs it when he reaches a signal, sometimes at the end of the day.",
      },
      {
        type: "image",
        src: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
        alt: "A TracTrac field researcher interviewing a farmer",
        caption: "A field visit in Akwanga LGA, Nasarawa State.",
      },
      {
        type: "quote",
        text: "When the tractor arrives on the day I said, people remember. That is how the next farmer calls me.",
      },
      {
        type: "paragraph",
        text: "Agents like Emmanuel are the link that makes the network work. Every booking a machine owner receives started with an agent who knew the farmer, the land and the road to get there.",
      },
    ],
    gallery: [
      {
        src: asset("uploads/IMG-20260824-WA0147.jpg"),
        alt: "A TracTrac booking agent in a branded shirt being interviewed on a bench",
      },
      {
        src: asset("uploads/Existing MSP Interview Keana LGA.jpg"),
        alt: "A mechanisation service provider in a TracTrac shirt talking with a researcher at the roadside in Keana LGA",
      },
      {
        src: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
        alt: "A TracTrac field researcher interviewing a farmer",
      },
      {
        src: asset("uploads/DSC02281.jpg"),
        alt: "TracTrac and Mastercard Foundation program team at a mechanisation service provider onboarding event",
      },
      {
        src: asset("uploads/Copy of DSC08691.jpg"),
        alt: "An operator working farmland with a TracTrac tractor and disc plough",
      },
    ],
    nextSlug: "service-providers",
  },
];

export const STORY_INDEX_ORDER = [
  "service-providers",
  "farmers",
  "women-in-farming",
  "booking-agents",
];

export const STORIES_HERO = {
  image: asset("uploads/IMG-20260824-WA0025 (1).jpg"),
  alt: "A TracTrac field researcher interviewing an elderly farmer beside his maize plot",
  title: "What changes when access gets easier?",
  lede:
    "Across Nasarawa State, our field teams sit down with farmers, equipment owners, service providers and agents. These are the conversations that shape what we build.",
};

export function getStory(slug: string) {
  return STORIES.find((story) => story.slug === slug) ?? null;
}
