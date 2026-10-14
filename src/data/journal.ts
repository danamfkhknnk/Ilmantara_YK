// Static journal content — CMS integration removed, edit directly here.
// Ported from the reference journal export (layout, copy, covers).
export type JournalPost = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  body: string[];
};

export const POSTS: JournalPost[] = [
  {
    slug: "write-the-empty-state-first",
    title: "Write the empty state first",
    tag: "Craft",
    date: "Sep 2, 2026",
    readTime: "5 min read",
    excerpt: "The screen most people see on day one is the one we design last. I've started with it on every project for two years, and it keeps changing the product.",
    cover: "/images/journal/Sxgu1H6NXNCjj1tqm1LJuFogU.bc2f0f64.jpg",
    coverAlt: "Write the empty state first cover image",
    body: [
      "Most products are designed full. The mockups show a dashboard with eighteen months of data, a busy inbox and a team of twelve. Then a real customer signs up and sees a grey box that says \u2018No items yet\u2019.",
      "So I now design the empty state before anything else. It forces the first question every product has to answer: what should a new person do in the next thirty seconds?",
      "At Orrin, writing the empty pay run screen first changed the order of onboarding. Adding one freelancer, not connecting a bank, became the first step, because that was the smallest thing that made the screen useful.",
      "The rule I use: an empty state must name one action, show what the screen will look like once it\u2019s done, and never apologise.",
    ],
  },
  {
    slug: "what-receptionists-taught-me",
    title: "What receptionists taught me about booking flows",
    tag: "Research",
    date: "Jul 18, 2026",
    readTime: "6 min read",
    excerpt: "Four mornings on a clinic front desk taught me more than a month of interviews. People describe where it hurts, not what they need.",
    cover: "/images/journal/bstKOBl540dvdv6ooe65n1qE.6ad5e702.jpg",
    coverAlt: "What receptionists taught me about booking flows cover image",
    body: [
      "For the Quayside project I asked to sit on reception instead of running interviews. I wore a headset, took notes and said very little.",
      "The pattern was obvious by the second morning: nobody asks for \u2018sports massage\u2019 or \u2018manual therapy\u2019. They say \u2018my knee has been bad since the half-marathon\u2019.",
      "That became the first screen of the booking flow: a body map and a plain question. The treatment is chosen for you, and you can change it if you know better.",
      "Research doesn\u2019t have to be a formal study. Sometimes the best method is to sit where the problem happens and listen.",
    ],
  },
  {
    slug: "a-design-system-is-a-list-of-decisions",
    title: "A design system is a list of decisions",
    tag: "Systems",
    date: "Jun 4, 2026",
    readTime: "7 min read",
    excerpt: "Components are the easy part. The hard part is agreeing what 'primary' means, and writing it down where people will find it.",
    cover: "/images/journal/kcShJz4dYJymSiptkbzpYB1JF4.11e1d4e3.jpg",
    coverAlt: "A design system is a list of decisions cover image",
    body: [
      "Every design system I\u2019ve inherited had a beautiful component library and no rules. Three teams used the same button in three different ways.",
      "At Tessel we started with a document instead of a Figma file: forty short decisions, each one sentence long. \u2018A page has one primary action.\u2019 \u2018Status is one of five words.\u2019",
      "The components came later and were almost boring to build, because the arguments were already settled.",
      "If your system is drifting, don\u2019t add components. Find the decision nobody wrote down.",
    ],
  },
  {
    slug: "the-four-minute-pay-run",
    title: "The four-minute pay run",
    tag: "Case notes",
    date: "Apr 22, 2026",
    readTime: "8 min read",
    excerpt: "How we cut a three-hour task to four minutes by removing decisions, not screens.",
    cover: "/images/journal/EyNglsC5qO5YzdL87lJoka3is2g.038f68fd.jpg",
    coverAlt: "The four-minute pay run cover image",
    body: [
      "When I joined Orrin, a pay run took most of an afternoon. The interface wasn\u2019t bad; it just asked the same questions every month.",
      "I timed eleven real pay runs. Two steps took 80% of the time: matching invoices to people and re-checking bank details that hadn\u2019t changed.",
      "We moved both into the background. The pay run card now shows only what changed since last month, and everything else is pre-checked.",
      "The lesson I took away: count decisions, not clicks. A screen with one real decision beats a wizard with five fake ones.",
    ],
  },
  {
    slug: "how-i-run-a-design-critique",
    title: "How I run a 45-minute design critique",
    tag: "Process",
    date: "Mar 9, 2026",
    readTime: "4 min read",
    excerpt: "A fixed agenda, one question per person and no solutions in the first twenty minutes. Here is the format I use every week.",
    cover: "/images/journal/critique.jpg",
    coverAlt: "How I run a 45-minute design critique cover image",
    body: [
      "Critiques go wrong when they turn into redesigns by committee. So mine follow a fixed shape.",
      "Five minutes: the designer states the problem and the one thing they want feedback on. Twenty minutes: questions only, no fixes. Fifteen minutes: suggestions, each tied to the stated goal. Five minutes: the designer says what they\u2019ll change.",
      "The questions-only rule is the important one. It makes people understand the work before they try to improve it.",
      "Write the notes in the file, next to the frames. Feedback that lives in a chat thread is feedback that gets lost.",
    ],
  },
  {
    slug: "prototype-in-the-real-font",
    title: "Prototype in the real font, on the real phone",
    tag: "Craft",
    date: "Jan 27, 2026",
    readTime: "3 min read",
    excerpt: "Most usability problems I've missed were invisible on a 27-inch monitor. Test on the device, in the typeface, in daylight.",
    cover: "/images/journal/prototype.jpg",
    coverAlt: "Prototype in the real font, on the real phone cover image",
    body: [
      "A design that works on my monitor often fails on a five-year-old phone in the sun. Text that looked calm at 13 px becomes unreadable.",
      "My rule is simple: nothing goes to review until I\u2019ve used it on a real phone, outside, for five minutes.",
      "It\u2019s cheap, and it catches the things that matter most: tap targets, contrast and how long the first screen takes to appear.",
      "The best prototype isn\u2019t the most detailed one. It\u2019s the one closest to the real conditions.",
    ],
  },
  {
    slug: "pricing-freelance-design",
    title: "Pricing freelance design by the problem",
    tag: "Business",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    excerpt: "I stopped quoting hours three years ago. Here's how I price a project by what the problem costs the client today.",
    cover: "/images/journal/EVzzVsdGSAc3N0sCk1OxGlBp7U.6ad5e702.jpg",
    coverAlt: "Pricing freelance design by the problem cover image",
    body: [
      "Hourly pricing punishes speed. The better you get, the less you earn, and the client worries about every meeting on the invoice.",
      "Now I ask one question in the first call: what does this problem cost you each month? A three-hour pay run for forty studios is easy to put a number on.",
      "I quote a fixed price for a defined outcome, with two check-ins where we can change scope in writing.",
      "Clients rarely push back, because the conversation is about their business, not my time.",
    ],
  },
  {
    slug: "designing-for-one-bar-of-signal",
    title: "Designing for one bar of signal",
    tag: "Case notes",
    date: "Sep 30, 2025",
    readTime: "5 min read",
    excerpt: "Vale's hikers book huts at the trailhead with almost no connection. Designing for that made the app faster for everyone.",
    cover: "/images/journal/P1vzgPktRcOHNQnFLjvjfYcjPk.6ad5e702.jpg",
    coverAlt: "Designing for one bar of signal cover image",
    body: [
      "Most of Vale\u2019s bookings happen where the signal ends. So we set a rule before drawing anything: every screen must work offline.",
      "That meant storing the hut list, maps and bookings on the phone, and queuing requests until a connection appears.",
      "We also set a weight budget of 180 kb for the first load, which ruled out most of the heavy map libraries.",
      "The side effect surprised us: people in cities rated the app faster than any travel app they used.",
    ],
  },
];

export const TOPIC_TAGS = [
  "Empty states",
  "Booking flows",
  "Design critique",
  "Pricing",
  "Offline-first",
  "Prototyping",
  "Field research",
  "Decision logs",
];

export const AUTHOR = {
  initials: "IL",
  name: "Ilmantara",
  bio: "Designer & developer in Yogyakarta. Replies to every email about an essay.",
  email: "hello@ilmantara.com",
};
