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
