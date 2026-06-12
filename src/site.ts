// Central content/config, single source of truth for nav, contact, socials.
import { IMG } from "./images";

export const SITE = {
  name: "REHVAMP Foundation",
  tagline: "Heal · Grow · Inspire",
  mission:
    "Creating safe, supportive and empowering environments where children and young people can Heal, Grow and Inspire.",
  email: "connect@rehvampfoundation.org",
  phoneMobile: "+44 7415 999508",
  phoneLandline: "+44 20 7629 4657",
  address: "11 Old Bond Street, London, England W1S 4PN, United Kingdom",
  socials: {
    instagram: "https://instagram.com/rehvampfoundation",
    x: "https://x.com/RehvampFdn",
  },
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Get Involved", to: "/get-involved" },
  {
    label: "Programs",
    to: "/programs",
    children: [
      { label: "Save Gaza's Children", to: "/save-gazas-children" },
      { label: "Digital Well-Being Challenge", to: "/challenge" },
      { label: "Phase 1: Heal", to: "/challenge/phase-1-heal" },
      { label: "Emergency Exit Guidance", to: "/emergency-exit-guidance" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const PILLARS = [
  {
    key: "heal",
    title: "Heal",
    blurb:
      "Mental-health support and safe spaces that help children recover from trauma and rebuild hope.",
  },
  {
    key: "grow",
    title: "Grow",
    blurb:
      "Access to education and learning opportunities so every child can develop their full potential.",
  },
  {
    key: "inspire",
    title: "Inspire",
    blurb:
      "Empowerment and resilience programmes that turn young people into confident agents of change.",
  },
];

export const FOCUS_AREAS = [
  {
    title: "Healthcare & Mental Health",
    blurb: "Supporting every child to Heal, with accessible care for body and mind.",
    icon: "heart",
  },
  {
    title: "Access to Education",
    blurb: "Helping young people Grow, through equal opportunities to learn and thrive.",
    icon: "book",
  },
  {
    title: "Anti-Bullying & Advocacy",
    blurb: "Creating safe spaces to Inspire, free from stigma, fear and harm.",
    icon: "shield",
  },
  {
    title: "Empowerment & Resilience",
    blurb: "Together we Heal • Grow • Inspire, building strength, confidence and hope.",
    icon: "spark",
  },
];

export const STATS = [
  { value: "15K+", label: "Children supported worldwide" },
  { value: "4", label: "Core programmes" },
  { value: "100%", label: "Mission-driven" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Your help gave me a future. I never thought someone would believe in me, REHVAMP did.",
    name: "Aisha",
    role: "Programme graduate",
    title: "Your help gave me a future",
    image: IMG.home.classroom,
  },
  {
    quote:
      "A child's dream fulfilled. With the right support, my son went back to school and found his smile again.",
    name: "Maria",
    role: "Parent",
    title: "A Child's Dream Fulfilled",
    image: IMG.home.people2,
  },
  {
    quote:
      "Healing with kindness changed everything. The team treated us like family from day one.",
    name: "Daniel",
    role: "Beneficiary",
    title: "Healing with Kindness",
    image: IMG.home.people3,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "uk-premiere-from-ground-zero",
    title: "REHVAMP Foundation at the UK Premiere of From Ground Zero",
    date: "January 23, 2025",
    excerpt:
      "Our founder attended the UK premiere of From Ground Zero, Palestine's Academy Award submission featuring work by 22 Gazan filmmakers.",
    tags: ["Gaza", "Solidarity", "FromGroundZero"],
    image: IMG.founder.festival,
    body: [
      "REHVAMP Foundation was proud to attend the UK premiere of From Ground Zero, Palestine's official Academy Award submission, featuring the work of 22 filmmakers from Gaza.",
      "The evening was a powerful reminder that storytelling is itself an act of resilience. Each short film carried the voice of someone determined to be heard, even amid unimaginable circumstances.",
      "Our presence reflects a simple commitment: to stand in solidarity, to amplify local voices, and to support the long road of rebuilding through our Heal, Grow and Inspire mission.",
      "We left more committed than ever to the children and families whose futures depend on collective action, and on a world willing to listen.",
    ],
  },
  {
    slug: "house-of-lords",
    title: "REHVAMP Foundation Represents at the House of Lords",
    date: "December 12, 2024",
    excerpt:
      "Founder Ishita Gupta was invited to a distinguished dinner at the House of Lords, providing a historic platform to spotlight youth advocacy alongside national policymakers.",
    tags: ["Advocacy", "Policy", "UK"],
    image: IMG.blog.event,
    body: [
      "REHVAMP Foundation was honoured to be represented at the House of Lords, joining a conversation about the future of children's wellbeing, education and protection.",
      "Advocacy is where lasting change begins. By bringing the realities faced by vulnerable young people into rooms where decisions are made, we help ensure their needs are not an afterthought.",
      "We remain dedicated to turning compassion into policy, and policy into tangible support for the children who need it most.",
    ],
  },
  {
    slug: "ishita-gupta-uae-recognition",
    title:
      "UAE Recognises RehVamp Founder for Compassionate Service During the Pandemic",
    date: "November 4, 2024",
    excerpt:
      "RehVamp Foundation's founder has been formally recognised by the UAE's Ministry of Health & Prevention for her extraordinary compassionate service during COVID-19.",
    tags: ["Recognition", "Leadership", "UAE"],
    image: IMG.founder.certificate,
    body: [
      "REHVAMP Foundation founder Ishita Gupta was recognised by the UAE for her compassionate leadership during the pandemic, a period that tested communities everywhere.",
      "The recognition celebrates a hands-on response: mobilising support, coordinating care, and ensuring that the most vulnerable were not forgotten when it mattered most.",
      "It is a reminder that leadership rooted in empathy can move quickly, reach far, and leave a lasting mark.",
    ],
  },
  {
    slug: "supporting-families-through-crisis",
    title: "Supporting Families Through Crisis: How Our Emergency Exit Guidance Initiative Made a Difference",
    date: "June 12, 2026",
    excerpt:
      "When regional airspace disruptions left thousands uncertain about their next steps, Rehvamp Foundation responded with a clear mission: ensure vulnerable individuals and families had access to safe, lawful and practical pathways to safety.",
    tags: ["Emergency", "GCC", "HumanitarianSupport"],
    image: IMG.home.event3,
    body: [
      "When regional airspace disruptions left thousands of travelers uncertain about their next steps, Rehvamp Foundation responded with a clear mission: ensure that vulnerable individuals and families had access to safe, lawful and practical pathways to safety.",
      "Over the past several months, our Emergency Exit Guidance Initiative has become a vital humanitarian coordination resource for expatriates, families, medical cases and individuals facing urgent travel challenges across the Gulf region.",
      "At Rehvamp Foundation, we are not a transport operator. Our role is to serve as a humanitarian bridge between uncertainty and stability. When individuals and families find themselves stranded, disconnected from support networks or unsure of available travel options, our team helps them understand viable pathways, access critical information and connect with appropriate resources.",
      "One of the greatest challenges faced by travelers during recent disruptions was understanding which routes remained available. Our team provided guidance on lawful travel options and regional transit pathways, including overland routes into Saudi Arabia via Riyadh and Jeddah, travel coordination into Oman through Muscat, connections through key GCC transit hubs and onward pathways to Turkey, Europe, Asia-Pacific and other international destinations.",
      "For urgent humanitarian situations involving vulnerable individuals, medical cases and time-sensitive travel needs, we assisted with information and coordination regarding licensed private aviation services. This included guidance relating to private jet availability, emergency helicopter transfers, regulatory requirements, airspace permissions and civil aviation approvals.",
      "Throughout the initiative, Rehvamp Foundation adopted a vulnerability-first approach. Priority support was directed toward families with young children, individuals requiring medical care, people facing immediate safety concerns and foreign nationals lacking local support networks.",
      "A key component of our response focused on helping people reconnect with official government assistance programs. We encouraged and assisted travelers with embassy registration, consular communication, government repatriation programs, UK FCDO registration, US STEP enrollment and official evacuation updates.",
      "Safety does not end once travel arrangements are secured. Many families required temporary support while waiting for onward travel or long-term solutions. Through our humanitarian network, we helped connect individuals with temporary accommodation guidance, community support referrals, welfare resources and family-focused stabilization support.",
      "The Emergency Exit Guidance Initiative reflects Rehvamp Foundation's commitment to delivering practical humanitarian support when communities need it most. As regional conditions continue to evolve, we remain committed to strengthening partnerships, expanding humanitarian coordination capabilities and ensuring vulnerable individuals have access to the information and support they need to move from crisis toward stability.",
      "Because survival is the beginning of renewal.",
    ],
  },
  {
    slug: "be-careful-with-what-you-let-in",
    title: "Be Careful With What You Let In",
    date: "October 2, 2024",
    excerpt:
      "A reflection on digital wellbeing and protecting young minds in an always-on world.",
    tags: ["Wellbeing", "DigitalHealth"],
    image: IMG.blog.featured,
    body: [
      "In an always-on world, the content we consume shapes how we feel, think and grow. For young people, that influence is even stronger.",
      "This reflection sits at the heart of our Digital Well-Being Challenge: learning to use technology consciously and intentionally, in ways that support, rather than erode, mental and emotional health.",
      "Being careful with what we let in is not about fear. It's about choosing peace of mind, focus and presence over endless noise.",
    ],
  },
];
