export const SITE = {
  name: "OTC TRIPS",
  tagline: "Your Chapter's Trip. Built From Scratch. Handled Start to Finish.",
  instagram: "https://instagram.com/otctrips",
  linkedin: "https://linkedin.com/company/otctrips",
  tripsPlanned: "195+",
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  homeHero: u("photo-1520250497591-112f2f40a3f4", 2000),
  formals: u("photo-1511795409834-ef04bbd61622"),
  retreats: u("photo-1529156069898-49953e39b3ac"),
  springBreak: u("photo-1507525428034-b723cf961d3e"),
  corporate: u("photo-1556761175-5973dc0f32e7"),
  founder: u("photo-1507003211169-0a1dd7228f2d", 800),
  beachWide: u("photo-1519046904884-53103b34b206", 2000),
  resortPool: u("photo-1540541338287-41700207dee6", 2000),
  cityNight: u("photo-1514924013411-cbf25faa35bb", 2000),
  celebration: u("photo-1492684223066-81342ee5ff30", 2000),
};

// ---------- Home ----------

export const DIFFERENTIATOR_BAR = [
  {
    icon: "plane",
    text: "We Include Flights. Most Companies Don't.",
  },
  {
    icon: "blueprint",
    text: "Every Trip Built From Scratch. No Packages.",
  },
  {
    icon: "person",
    text: "A Real Person In Your Corner, Start to Finish.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I reached out to 3 different companies. OTC was the only one that actually picked up the phone, knew what we needed, and came back with a proposal that same day. Formal went perfectly.",
    name: "Marcus T.",
    school: "University of Florida",
    tripType: "Fraternity Formal · Nashville, TN",
  },
  {
    quote:
      "We had 72 girls, four dietary restrictions, and a president who wanted everything perfect. Our coordinator texted me back at 11pm the night before we left just to confirm bus times. Who does that?",
    name: "Lauren K.",
    school: "University of Alabama",
    tripType: "Sorority Retreat · Charleston, SC",
  },
  {
    quote:
      "58 guys, Punta Cana, and we all landed on the same flight. Nobody believes me when I tell them the whole thing took one phone call and a group size. Booking again for next year.",
    name: "Drew S.",
    school: "Penn State University",
    tripType: "Spring Break · Punta Cana, DR",
  },
];

export const PAIN_POINTS = [
  {
    pain: "Chasing 80 people for payments",
    fix: "We handle individual payment collection",
  },
  {
    pain: "No one includes flights",
    fix: "We book group air through our carrier partnerships",
  },
  {
    pain: "Generic packages that don't fit your group",
    fix: "Every trip is built from scratch",
  },
  {
    pain: "No one picks up the phone",
    fix: "You have a direct line to your coordinator",
  },
];

export const TRIP_TYPE_CARDS = [
  {
    title: "Fraternity Formals",
    line: "The biggest night of the year. We make sure it goes off without a hitch.",
    image: u("photo-1511795409834-ef04bbd61622"),
    href: "/what-we-do#formals",
  },
  {
    title: "Sorority Retreats",
    line: "Curated experiences for your whole chapter. Every detail handled.",
    image: u("photo-1529156069898-49953e39b3ac"),
    href: "/what-we-do#retreats",
  },
  {
    title: "Spring Break",
    line: "Beach, sun, and zero logistics stress. Just show up.",
    image: u("photo-1507525428034-b723cf961d3e"),
    href: "/what-we-do#spring-break",
  },
  {
    title: "Corporate & Sales Teams",
    line: "Incentive trips and team offsites your team will actually remember.",
    image: u("photo-1556761175-5973dc0f32e7"),
    href: "/what-we-do#corporate",
  },
];

export const PARTNERS = [
  "American Airlines",
  "Hilton",
  "Marriott",
  "Hyatt",
  "IHG",
  "Wyndham",
  "Best Western",
  "Radisson",
  "Delta Hotels",
  "Autograph Collection",
  "Curio Collection",
  "Tapestry Collection",
  "Tribute Portfolio",
  "W Hotels",
  "Westin",
  "Sheraton",
  "Renaissance",
  "Courtyard",
  "Fairfield",
  "Aloft",
];

// ---------- What We Do ----------

export type Service = {
  id: string;
  title: string;
  headline: string;
  copy: string[];
  bullets: string[];
  cta: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "formals",
    title: "Fraternity Formals",
    headline: "The Formal Your Chapter Will Talk About for Years.",
    copy: [
      "You got handed the formal. Congratulations, and condolences. A hundred guys and their dates, a venue that has to be perfect, buses that have to show up, and a budget the treasurer keeps asking about. Pull it off and nobody remembers it was hard. Miss one detail and that's the only thing anyone remembers.",
      "Here's what we do: you tell us the city, the dates, and the headcount. We come back with venue options, hotel blocks, transportation, and group air if you're flying, all priced out per person. You pick, we book, your members pay us directly, and you go back to being a college student.",
    ],
    bullets: [
      "Venue sourcing and negotiation",
      "Group hotel room blocks",
      "Ground transportation, from charter buses to party buses",
      "Group flights through our carrier partnerships",
      "On-site coordinator",
      "Individual payment collection from members",
    ],
    cta: "Plan Your Formal",
    image: u("photo-1511795409834-ef04bbd61622"),
  },
  {
    id: "retreats",
    title: "Sorority Retreats",
    headline: "Every Detail. Every Member. Every Moment.",
    copy: [
      "A retreat is only relaxing for the people who didn't plan it. Rooming lists, activity schedules, the member who's gluten-free and the one who can't do stairs, transportation timed so nobody's standing in a parking lot. It's a lot, and it all lands on one person's plate.",
      "We take the plate. Every retreat we build is curated around what your chapter actually wants, whether that's a sisterhood weekend, an officer transition, or a big-little getaway, with an itinerary managed down to the minute and a coordinator who has already thought of the thing you were about to worry about.",
    ],
    bullets: [
      "Retreat venue sourcing",
      "Custom activity curation",
      "Group lodging coordination",
      "Transportation, door to door",
      "Dietary and accessibility considerations",
      "Full itinerary management",
    ],
    cta: "Plan Your Retreat",
    image: u("photo-1529156069898-49953e39b3ac"),
  },
  {
    id: "spring-break",
    title: "Spring Break",
    headline: "Zero Logistics. All Memories.",
    copy: [
      "Right now your group chat has 30 people, 14 opinions, two people who 'already found a better deal,' and zero bookings. Every week you wait, flights get more expensive and the good resorts fill up. You know this. The chat does not.",
      "Send us the chaos. We turn it into one plan: resort blocks at places that actually want big groups, group flights so everyone lands together, excursions and nightlife lined up before you arrive, and individual payment plans so you never front a dollar for anyone. You show up. That's the whole job.",
    ],
    bullets: [
      "International and domestic destinations",
      "All-inclusive resort blocks",
      "Group flights, so your whole group travels together",
      "Excursions and nightlife coordination",
      "Payment plans for individual members",
      "On-trip support, the entire time",
    ],
    cta: "Plan Spring Break",
    image: u("photo-1507525428034-b723cf961d3e"),
  },
  {
    id: "corporate",
    title: "Corporate & Sales Teams",
    headline: "Give Your Team a Trip They Actually Earn.",
    copy: [
      "An incentive trip only works if it feels like a reward, not a conference with a beach view. And an offsite only works if your ops lead isn't buried in logistics for a quarter to make it happen.",
      "We plan both like we plan everything: from scratch, around your team, your budget, and the outcome you're after. Flights, luxury properties, ground transfers, dinners, experiences. One coordinator, one invoice-ready budget, zero surprises. Your team comes back talking about the trip, not the travel.",
    ],
    bullets: [
      "Incentive trip planning",
      "Team offsite coordination",
      "Luxury resort sourcing",
      "Group flights and transfers",
      "Full itinerary, end to end",
      "Budget management and reporting",
    ],
    cta: "Plan Your Team Trip",
    image: u("photo-1556761175-5973dc0f32e7"),
  },
];

export const WHY_OTC = [
  {
    title: "We Include Flights.",
    text: "Most companies don't. We coordinate group air through our major carrier partnerships so your whole group travels together at locked-in rates.",
  },
  {
    title: "Nothing Is Off The Shelf.",
    text: "Every trip is built from scratch around your group, your dates, your budget, your vibe.",
  },
  {
    title: "One Person. Total Accountability.",
    text: "You work with one coordinator from first call to final checkout. No handoffs, no runaround.",
  },
  {
    title: "We've Done This Before.",
    text: "Hundreds of trips across dozens of destinations. We know what works and what doesn't.",
  },
  {
    title: "We Handle The Money.",
    text: "Individual payment collection, deposit management, and financial coordination so you're not chasing your own members.",
  },
];

// ---------- Destinations ----------

export type Destination = {
  name: string;
  bestFor: string;
  image: string;
};

export type DestinationCategory = {
  title: string;
  destinations: Destination[];
};

export const DESTINATION_CATEGORIES: DestinationCategory[] = [
  {
    title: "Beach Escapes",
    destinations: [
      { name: "Miami, FL", bestFor: "Spring Break & Formals", image: u("photo-1506966953602-c20cc11f75e3") },
      { name: "Myrtle Beach, SC", bestFor: "Beach Weekends & Big Groups", image: u("photo-1507525428034-b723cf961d3e") },
      { name: "Key West, FL", bestFor: "Senior Trips & Retreats", image: u("photo-1519046904884-53103b34b206") },
      { name: "Punta Cana, DR", bestFor: "All-Inclusive Spring Break", image: u("photo-1505228395891-9a51e7e86bf6") },
      { name: "Cancun, MX", bestFor: "Spring Break", image: u("photo-1510414842594-a61c69b5ae57") },
    ],
  },
  {
    title: "City Adventures",
    destinations: [
      { name: "Nashville, TN", bestFor: "Formals", image: u("photo-1514924013411-cbf25faa35bb") },
      { name: "New Orleans, LA", bestFor: "Formals & Big Weekends", image: u("photo-1449824913935-59a10b8d2000") },
      { name: "Las Vegas, NV", bestFor: "Corporate & Celebrations", image: u("photo-1496442226666-8d4d0e62e6e9") },
      { name: "Charleston, SC", bestFor: "Formals & Retreats", image: u("photo-1444723121867-7a241cacace9") },
      { name: "Austin, TX", bestFor: "Retreats & Big Weekends", image: u("photo-1480714378408-67cf0d13bc1b") },
    ],
  },
  {
    title: "International",
    destinations: [
      { name: "Ibiza, Spain", bestFor: "Once-in-a-Lifetime Spring Break", image: u("photo-1473116763249-2faaef81ccda") },
      { name: "Bahamas", bestFor: "Spring Break & Quick Getaways", image: u("photo-1544551763-46a013bb70d5") },
      { name: "Florence, Italy", bestFor: "Sorority Trips & Culture", image: u("photo-1523906834658-6e24ef2386f9") },
      { name: "Turks & Caicos", bestFor: "Luxury Retreats", image: u("photo-1506929562872-bb421503ef21") },
      { name: "Costa Rica", bestFor: "Adventure Retreats", image: u("photo-1502082553048-f009c37129b9") },
    ],
  },
  {
    title: "Outdoors & Retreats",
    destinations: [
      { name: "Aspen, CO", bestFor: "Winter Formals & Ski Trips", image: u("photo-1551524559-8af4e6624178") },
      { name: "Lake Tahoe, NV", bestFor: "Ski Trips & Retreats", image: u("photo-1476514525535-07fb3b4ae5f1") },
      { name: "Denver, CO", bestFor: "Retreats & Offsites", image: u("photo-1506905925346-21bda4d32df4") },
      { name: "Park City, UT", bestFor: "Ski Weekends", image: u("photo-1464822759023-fed622ff2c3b") },
      { name: "Savannah, GA", bestFor: "Formals & Retreats", image: u("photo-1551632811-561732d1e306") },
    ],
  },
];

// ---------- Our Trips Gallery ----------

export type GalleryItem = {
  src: string;
  destination: string;
  tripType: string;
  category: "Formals" | "Spring Break" | "Retreats" | "International";
};

export const GALLERY: GalleryItem[] = [
  { src: u("photo-1514924013411-cbf25faa35bb"), destination: "Nashville, TN", tripType: "Fraternity Formal", category: "Formals" },
  { src: u("photo-1511795409834-ef04bbd61622"), destination: "Charleston, SC", tripType: "Sorority Formal", category: "Formals" },
  { src: u("photo-1492684223066-81342ee5ff30"), destination: "New Orleans, LA", tripType: "Fraternity Formal", category: "Formals" },
  { src: u("photo-1510414842594-a61c69b5ae57"), destination: "Cancun, MX", tripType: "Spring Break", category: "Spring Break" },
  { src: u("photo-1540541338287-41700207dee6"), destination: "Punta Cana, DR", tripType: "Spring Break", category: "Spring Break" },
  { src: u("photo-1506966953602-c20cc11f75e3"), destination: "Miami, FL", tripType: "Spring Break", category: "Spring Break" },
  { src: u("photo-1476514525535-07fb3b4ae5f1"), destination: "Lake Tahoe, NV", tripType: "Chapter Retreat", category: "Retreats" },
  { src: u("photo-1551524559-8af4e6624178"), destination: "Aspen, CO", tripType: "Ski Retreat", category: "Retreats" },
  { src: u("photo-1529156069898-49953e39b3ac"), destination: "Savannah, GA", tripType: "Sorority Retreat", category: "Retreats" },
  { src: u("photo-1473116763249-2faaef81ccda"), destination: "Ibiza, Spain", tripType: "Spring Break", category: "International" },
  { src: u("photo-1523906834658-6e24ef2386f9"), destination: "Florence, Italy", tripType: "Sorority Trip", category: "International" },
  { src: u("photo-1506929562872-bb421503ef21"), destination: "Turks & Caicos", tripType: "Corporate Incentive", category: "International" },
];

// ---------- FAQs ----------

export const FAQS = [
  {
    q: "How is OTC Trips different from other group travel companies?",
    a: "Three things. First, we include flights. We coordinate group air through our major carrier partnerships, which almost nobody else in this space does. Second, nothing we sell is a package; every trip is built from scratch around your group. Third, you work with an actual person who picks up the phone, not a portal and a ticket queue. If you've gotten quotes from the big student travel companies, you already know how rare all three of those are.",
  },
  {
    q: "Do you actually include flights? How does that work?",
    a: "Yes, actually. Through our group air relationships with major carriers, we block seats for your whole group early, which locks in the rate, keeps everyone on the same flights, and means nobody's hunting Google Flights at midnight. Names can usually be finalized closer to departure than with individual tickets, which is a lifesaver when your roster is still shifting. Other companies hand you a hotel package and say 'good luck with airfare.' We think that's the hardest part, so we do it for you.",
  },
  {
    q: "How far in advance should we start planning?",
    a: "Earlier than feels necessary. For formals and retreats, 3 to 5 months out gives us strong venue and hotel options. For spring break and anything international, 5 to 8 months is the sweet spot. That's when group flight inventory is cheapest and the best resorts still have blocks. That said, we've pulled off great trips on tight timelines. If your dates are close, reach out anyway and we'll tell you honestly what's doable.",
  },
  {
    q: "What's the minimum group size?",
    a: "We're built for groups of about 15 and up, and most of our trips run 30 to 150 travelers. Group air and group hotel rates genuinely improve with size, so bigger is usually cheaper per person. If you're under 15, send us the details anyway. Depending on destination and dates we can often still make the math work.",
  },
  {
    q: "How does payment work? Do members pay individually?",
    a: "Every traveler gets their own payment link with their own deposit and installment schedule. Nobody fronts money for the group, nobody's chasing Venmo requests, and the organizer never touches anyone else's money. Deposits lock in spots; the balance is split into installments before departure. If someone drops, that's handled between them and the cancellation terms, not in a group chat negotiation.",
  },
  {
    q: "What's included in a typical trip package?",
    a: "There's no 'typical' since every trip is custom, but most OTC trips cover: group flights, hotel or resort room blocks, ground transportation (airport transfers, charter buses), venue or activity bookings, individual payment collection, and your coordinator from first call through the trip itself. When we quote you, the quote lists exactly what's in and what's not. No asterisks.",
  },
  {
    q: "Can you plan international trips?",
    a: "Absolutely. Punta Cana, Cancun, the Bahamas, Ibiza, Florence, Costa Rica, Turks & Caicos, and plenty more. International is where having one coordinator matters most: we handle group flights, transfers, and lodging, and we send your group a country-specific checklist for passports and entry requirements with deadline reminders, so nobody gets stopped at the gate.",
  },
  {
    q: "What happens if someone needs to cancel?",
    a: "It happens on almost every trip, and we plan for it. Cancellation and name-change terms are spelled out in writing before anyone pays a deposit. They vary by airline, resort, and timing, so we make sure you see them upfront. We also offer optional travel protection for individual travelers. And because group air names can often be finalized late, a dropped traveler can frequently be swapped for a replacement instead of eaten as a loss.",
  },
  {
    q: "Do you have someone on-site during the trip?",
    a: "Your coordinator is on call for the entire trip. Flight delays, room issues, a bus that needs to move 30 minutes, whatever comes up. For larger groups we can arrange dedicated on-site coordination. Either way, the answer to 'who do I call?' is always the same person you've been working with since day one.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the Plan Your Trip form with whatever you know, even if it's just 'formal, somewhere fun, around 90 people, sometime in April.' We'll come back within a day (usually within hours) with questions, ideas, and a path to a real proposal. No deposit, no commitment, no sales pressure. The first conversation is just a conversation.",
  },
  {
    q: "Can you work with our chapter's existing venue or hotel preferences?",
    a: "Yes, and honestly, it helps. If your chapter has a venue it loves, a hotel relationship, or a tradition we should know about, tell us and we'll build around it. We'll also negotiate on your behalf with venues you bring us; chapters are often surprised what a group travel company can get that an individual caller can't.",
  },
  {
    q: "What's the referral program?",
    a: "Simple: refer a chapter or student org that books a trip with us, and you get rewarded with cash or credit toward your own trip, with no cap on how many groups you can refer. Just have them mention your name in their quote form. Details are on the Referral Program page.",
  },
];

// ---------- Pricing ----------

export const PRICING_INCLUDED = [
  { title: "Flights", text: "Group air coordination through our major carrier partnerships. Seats blocked early, rates locked, everyone travels together." },
  { title: "Hotel Room Blocks", text: "Negotiated blocks at properties that actually want big groups, matched to your budget." },
  { title: "Ground Transportation", text: "Airport transfers and charter buses, timed so nobody's standing in a parking lot." },
  { title: "Venue Coordination", text: "Sourcing, negotiation, and booking for formals, dinners, and events." },
  { title: "On-Site Coordinator", text: "A real person responsible for your trip while it's happening, not just before." },
  { title: "Payment Collection", text: "Individual payment links, deposits, and installment management for every traveler." },
  { title: "24/7 Travel Support", text: "Flight delayed at midnight? You have a number that answers." },
];

export const PRICING_FACTORS = [
  { title: "Group Size", text: "Larger groups unlock better per-person rates on flights, rooms, and buses. 80 people is cheaper per head than 30. It's one of the few places in life where bringing more friends saves money." },
  { title: "Destination", text: "A Myrtle Beach weekend and an Ibiza week are different animals. Domestic city and beach trips are the most budget-friendly; international adds flight time and transfer costs." },
  { title: "Time of Year", text: "Peak spring break weeks, holiday weekends, and ski season all carry premiums. Shifting your dates even one week can move the per-person price meaningfully." },
  { title: "Trip Length", text: "Nights drive cost more than anything else. A 2-night formal and a 7-night spring break live in different price brackets." },
  { title: "Add-Ons", text: "Private events, excursions, VIP tables, upgraded rooms. All available, all optional, all priced transparently before you commit." },
  { title: "How Early You Book", text: "The single biggest lever you control. Early booking means cheaper group air and better resort inventory. Every month you wait costs your group money." },
];

export const PRICING_RANGES = [
  {
    type: "Fraternity Formals",
    range: "$350–$650",
    unit: "per person",
    note: "Venue, hotel block, buses, and coordination for a 2 to 3 night formal weekend. Fly-in formals add group air.",
  },
  {
    type: "Sorority Retreats",
    range: "$300–$550",
    unit: "per person",
    note: "Lodging, curated activities, transportation, and full itinerary management for a 2 to 3 night retreat.",
  },
  {
    type: "Spring Break",
    range: "$950–$1,800",
    unit: "per person",
    note: "Flights, all-inclusive or beachfront lodging, transfers, and event access for 5 to 7 nights.",
  },
  {
    type: "Corporate & Sales Teams",
    range: "Custom",
    unit: "quoted by scope",
    note: "Incentive trips and offsites are scoped to your team, budget, and goals, typically 3 to 5 nights.",
  },
];

// ---------- Travel Tips ----------

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-to-plan-a-fraternity-formal",
    title: "How to Plan a Fraternity Formal (Without Losing Your Mind)",
    category: "Formals",
    excerpt:
      "You got voted social chair, and now formal is your problem. Here's the playbook for pulling it off, and the mistakes that sink it.",
    image: u("photo-1511795409834-ef04bbd61622"),
    readTime: "6 min read",
    body: [
      "Every formal that goes wrong goes wrong the same way: decisions made too late. The venue you wanted is booked, the hotel block is gone, and suddenly you're explaining to 90 brothers why formal is at the same place as last year. The fix isn't working harder in March. It's making three decisions in the fall: the city, the weekend, and the budget per person. Everything else hangs off those three.",
      "Pick a city that carries the weekend by itself. Nashville, Charleston, and New Orleans are formal capitals for a reason. When the venue is one great night, the city fills in the other two. Book your hotel block for 10 to 15 percent more rooms than your confirmed count, because formals always grow once dates start getting asked.",
      "The most underrated line item is transportation. Charter buses between the hotel and the venue mean no one is negotiating surge pricing in formal wear at 1am, and they're the cheapest insurance you'll ever buy against the night going sideways. Budget for them first, not last.",
      "And the meta-tip: you don't actually have to do any of this. When OTC plans a formal, the venue sourcing, hotel block, buses, and individual payment collection are all one plan with one person responsible for it. Your job becomes picking between good options, which is the only fun part anyway.",
    ],
  },
  {
    slug: "ultimate-group-trip-packing-list",
    title: "The Ultimate Group Trip Packing List",
    category: "Travel Tips",
    excerpt:
      "Forty people, one destination, and somebody always forgets sunscreen. The list that keeps your whole group covered without overpacking.",
    image: u("photo-1530789253388-582c481c54b0"),
    readTime: "4 min read",
    body: [
      "Group trips have a packing superpower that solo trips don't: you don't all need to bring everything. The chapters that travel well keep a shared list where bulky, shareable items get claimed by one person each instead of packed forty times. Think speakers, first-aid kits, sunscreen by the liter, card games, and a power strip for the room that never has enough outlets.",
      "Individually, the non-negotiables are boring and essential: government ID (passport for international, with six months validity, checked the day you book, not the week before), payment cards plus one backup, chargers, medications in original packaging, and one outfit a notch nicer than you think the trip requires. Every trip has a dinner that calls for it.",
      "Destination changes the details. Beach trips: reef-safe sunscreen, after-sun, and shoes that can get wet. Ski trips: gloves and base layers, because renting a jacket is possible but renting warm socks is not. City formals: comfortable shoes for the day and the formal shoes you'll regret by midnight.",
      "When you travel with OTC, your coordinator sends a destination-specific packing list with the final itinerary, so the group chat question 'wait, do we need towels?' gets answered before it's asked.",
    ],
  },
  {
    slug: "book-spring-break-earlier",
    title: "Why You Should Book Your Spring Break Trip Earlier Than You Think",
    category: "Spring Break",
    excerpt:
      "The math is brutal: every month your group waits to book, the same trip costs more. Here's the actual timeline that saves you money.",
    image: u("photo-1510414842594-a61c69b5ae57"),
    readTime: "5 min read",
    body: [
      "Here's the uncomfortable truth about spring break pricing: the trip your group books in January is the same trip it could have booked in September, for 20 to 30 percent more per person. Flights are the culprit. March airfare to Cancun, Punta Cana, and Miami climbs steadily from late fall, and group inventory (blocks of 30+ seats on the same flight) disappears long before individual seats do.",
      "Resorts work the same way. The properties that are actually good for big groups, the all-inclusives with group-friendly layouts and event space, sell their blocks first. Wait too long and your options aren't bad, exactly, but they're whatever's left.",
      "The ideal timeline looks like this: destination and rough headcount decided by early October, deposits collected by Halloween, flights and resort locked by Thanksgiving. That's it. Groups on that schedule routinely pay hundreds less per person than groups that start in January, for the identical trip.",
      "The reason groups miss the window isn't ignorance, it's inertia: nobody wants to collect 40 deposits in October. That's exactly the part OTC removes. We send every traveler their own payment link, deposits trickle in without you chasing anyone, and your group hits the cheap window without a single spreadsheet.",
    ],
  },
  {
    slug: "how-to-split-costs-50-plus",
    title: "How to Split Costs Fairly in a Group of 50+",
    category: "Planning",
    excerpt:
      "The fastest way to ruin a group trip is money. The second fastest is one person fronting it. Here's the system that avoids both.",
    image: u("photo-1554224155-6726b3ff858f"),
    readTime: "5 min read",
    body: [
      "Every big group trip has a financial horror story candidate: the organizer who puts $30,000 of hotel rooms on a personal credit card and spends three months as an unpaid collections agency. It usually works out. When it doesn't, it really doesn't. Either way, that person never organizes anything again.",
      "The principle that fixes it: no traveler should ever hold another traveler's money. Each person pays their own share, directly, on their own schedule. That means individual payment links with deposits and installments. Not one Venmo target, not a shared spreadsheet of who's 'good for it.'",
      "Deposits matter more than people think, and not just for cash flow. A traveler with $200 down is a traveler who shows up; a traveler who's 'definitely in' but hasn't paid is a rounding error waiting to happen. Set the deposit deadline before you lock headcount-dependent bookings, never after.",
      "This is also, frankly, the system OTC runs on every trip: individual links, automated installment schedules, and dropped travelers handled by written cancellation terms instead of a group vote. The organizer's financial job shrinks to zero, which is the correct size for it.",
    ],
  },
  {
    slug: "top-international-destinations-2025",
    title: "Top 5 International Destinations for College Groups in 2025",
    category: "Destinations",
    excerpt:
      "Where the group trips that people brag about are actually going this year, and what each spot does best.",
    image: u("photo-1473116763249-2faaef81ccda"),
    readTime: "6 min read",
    body: [
      "Punta Cana keeps the crown for big-group value. All-inclusive pricing makes budgeting painless, the resorts are built for groups of 50+, and short direct flights from most of the East Coast keep the travel day humane. If your group wants maximum beach for minimum logistics, this is still the answer.",
      "Cancun and the Bahamas round out the proven picks. Cancun for groups that want the full spring break ecosystem, the Bahamas for crews that want international bragging rights on a long-weekend timeline. Both are forgiving for first-time international travelers, which matters more than people admit.",
      "The two risers: Ibiza and Costa Rica. Ibiza is the once-in-a-lifetime pick, with villas, beach clubs, and nightlife that makes Vegas look like a rehearsal. It's best for groups that plan early and budget honestly. Costa Rica is the opposite energy: surf mornings, jungle excursions, and group houses that turn a chapter into a family. It's quietly become our most-requested retreat destination.",
      "Whatever you pick, international raises the stakes on coordination. Passports, entry requirements, transfers in a country where the group chat has no signal. It's exactly the kind of trip where having one person responsible for the whole thing stops being a luxury and starts being the plan. That's the job. Tell us where you're thinking.",
    ],
  },
  {
    slug: "what-to-look-for-in-a-group-travel-company",
    title: "What to Look for in a Group Travel Company (And What to Avoid)",
    category: "Planning",
    excerpt:
      "Most student travel companies are selling the same package with different logos. The five questions that separate the real ones.",
    image: u("photo-1556761175-5973dc0f32e7"),
    readTime: "5 min read",
    body: [
      "Start with the question that ends most sales calls: 'Are flights included?' Most group travel companies sell land-only packages, a hotel and a wristband, and leave 80 people to book airfare individually, on different airlines, at different prices, landing at different times. If the answer involves the phrase 'we can recommend,' you've learned what you needed to know.",
      "Second question: 'Who exactly will I be talking to in February?' If the answer is a support queue, an app, or 'one of our team,' expect to feel that in February. The companies worth hiring give you one named person with a phone number, and that person is the same one who built your proposal.",
      "Third: 'Is this a package or is it built for us?' Packages are how companies scale, and they're fine, if your group happens to be the group the package was designed for. The tell is whether they ask real questions about your chapter before quoting, or just send a PDF with this year's dates on last year's trip.",
      "Then check the boring things, because the boring things are where trips die: written cancellation terms before any deposit, individual payment collection so no student fronts money, and a Seller of Travel registration you can verify. A company that's vague on any of those is asking you to absorb risk that's supposed to be their job. We built OTC to be the company that passes this checklist. But honestly, whoever you book with, make them pass it.",
    ],
  },
];

// ---------- Quote Form ----------

export const TRIP_TYPES = [
  "Fraternity Formal",
  "Sorority Retreat",
  "Spring Break",
  "Corporate/Sales Team",
  "Other",
] as const;

export const GROUP_SIZES = [
  "Under 20",
  "20–40",
  "40–75",
  "75–100",
  "100+",
] as const;
