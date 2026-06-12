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
      {
        label: "Digital Well-Being Challenge",
        to: "/challenge",
        sub: [{ label: "Phase 1: Heal", to: "/challenge/phase-1-heal" }],
      },
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

export type BodyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "blockquote"; text: string; by?: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  body: BodyBlock[];
  relatedPage?: { label: string; to: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "uk-premiere-from-ground-zero",
    title: "REHVAMP Foundation at the UK Premiere of From Ground Zero",
    date: "January 23, 2025",
    excerpt:
      "Our founder attended the UK premiere of From Ground Zero, Palestine's Academy Award submission featuring the work of 22 Gazan filmmakers.",
    tags: ["Gaza", "Solidarity", "FromGroundZero"],
    image: IMG.founder.festival,
    body: [
      { type: "h2", text: "Standing with Gaza's Storytellers" },
      { type: "p", text: "On 23 January 2025, the RehVamp Foundation proudly stood represented at the UK premiere of From Ground Zero, Palestine's official submission to the 97th Academy Awards. Our founder, Ishita Reha Gupta, attended this historic event, joining global audiences in honoring the resilience and creativity of the Gazan people." },
      { type: "p", text: "The film, an anthology created by 22 Gazan filmmakers, brings together documentaries, animations, fiction and experimental shorts. Each story offers an unflinching glimpse into life amid conflict — while highlighting the strength, endurance and unwavering spirit of a community determined to survive and create." },
      { type: "p", text: "This premiere came at a critical time, coinciding with a fragile ceasefire in Gaza. For the RehVamp Foundation, it was a moment not only to reflect on the immense suffering faced by the Palestinian people but also to reaffirm our mission: to Heal, Grow and Inspire through solidarity, advocacy and the amplification of voices that must be heard." },
      { type: "h2", text: "RehVamp's Statement of Solidarity" },
      { type: "p", text: "In response to this powerful event, the RehVamp Foundation emphasized:" },
      { type: "ul", items: [
        "The urgent need for rebuilding Gaza, independent of lengthy political negotiations",
        "The importance of centering local voices in all reconstruction and recovery efforts",
        "Our deep appreciation for all who have advocated for ceasefire, peace and justice",
      ]},
      { type: "p", text: "While the ceasefire offers hope, the journey toward lasting peace and freedom is far from over. The RehVamp Foundation believes that global action, empathy and unity are essential in ensuring that the people of Gaza are not only remembered but supported in rebuilding their lives and communities." },
      { type: "h2", text: "Why This Matters to RehVamp" },
      { type: "p", text: "Our work has always been about transforming pain into possibility. The Gazan filmmakers behind From Ground Zero embody this vision. Through art, they show us that even in the darkest times, resilience and creativity can shine." },
      { type: "p", text: "By standing with them, the RehVamp Foundation continues its commitment to building bridges across borders, nurturing hope and inspiring change. We believe that storytelling is not just about remembrance — it is about creating pathways for healing and collective growth." },
      { type: "h2", text: "Looking Ahead" },
      { type: "p", text: "At the RehVamp Foundation, we are inspired by the courage of Gaza's storytellers and communities. Their resilience echoes our belief that transformation begins when we come together." },
      { type: "p", text: "As Gaza embarks on the long road to recovery, let us remember:" },
      { type: "ul", items: [
        "Healing begins with solidarity.",
        "Growth is sustained by collective action.",
        "Inspiration emerges when communities rise, rebuild and reclaim their future.",
      ]},
      { type: "p", text: "We invite you to join the RehVamp Foundation in amplifying these voices, supporting resilience and walking alongside communities as they heal, grow and inspire the world." },
    ],
  },
  {
    slug: "house-of-lords",
    title: "REHVAMP Foundation Represents at the House of Lords",
    date: "February 2025",
    excerpt:
      "Founder Ishita Gupta was invited to a distinguished dinner at the House of Lords, providing a historic platform to spotlight youth advocacy alongside national policymakers.",
    tags: ["Advocacy", "Policy", "UK"],
    image: IMG.blog.event,
    body: [
      { type: "h2", text: "A Historic Honor for Youth Advocacy" },
      { type: "p", text: "RehVamp Foundation is proud to share that our founder, Ishita Gupta, was recently invited to attend a distinguished dinner at the House of Lords in London. This honour reflects the growing recognition of RehVamp Foundation's mission to create safe, supportive and empowering environments for children and young people." },
      { type: "p", text: "The event brought together leaders, policymakers and changemakers from across sectors to engage in meaningful dialogue about social impact and collective responsibility. Ishita's presence at the House of Lords served as an important opportunity to represent the values and objectives of RehVamp Foundation at one of the United Kingdom's most historic and influential institutions." },
      { type: "h2", text: "Amplifying Our Mission on a National Stage" },
      { type: "p", text: "Through this platform, our Foundation's core priorities were placed in the spotlight:" },
      { type: "ul", items: [
        "Healthcare & Mental Health: advancing accessible services to safeguard young people's wellbeing",
        "Education: promoting equal opportunities and inclusive pathways for growth and learning",
        "Anti-Bullying & Anti-Harassment Advocacy: fostering environments where children feel safe, valued and respected",
        "Empowerment & Resilience: equipping the next generation with tools and confidence to overcome challenges and thrive",
      ]},
      { type: "h2", text: "Building Bridges for Systemic Change" },
      { type: "p", text: "RehVamp Foundation strongly believes that systemic change requires collaboration between grassroots organisations and national policymakers. By engaging in conversations at the House of Lords, Ishita underscored the importance of uniting efforts across sectors to ensure that every child has the opportunity to Heal, Grow and Inspire." },
      { type: "p", text: "This milestone represents not only an acknowledgement of RehVamp Foundation's vision but also a step forward in amplifying the voices of the children and young people we serve." },
      { type: "h2", text: "Looking Forward" },
      { type: "p", text: "As we continue our mission, this recognition at the House of Lords reinforces our commitment to creating lasting change for vulnerable youth. Through partnerships with policymakers and continued grassroots advocacy, we remain dedicated to ensuring every child can truly Heal. Grow. Inspire." },
    ],
  },
  {
    slug: "ishita-gupta-uae-recognition",
    title: "UAE Recognises RehVamp Founder's Pandemic Courage",
    date: "February 2025",
    excerpt:
      "RehVamp Foundation's founder has been formally recognised by the UAE's Ministry of Health & Prevention for her extraordinary compassionate service during COVID-19.",
    tags: ["Recognition", "Leadership", "UAE"],
    image: IMG.founder.certificate,
    body: [
      { type: "h2", text: "A Leader Who Steps Forward, Heart First" },
      { type: "p", text: "At RehVamp Foundation, we believe that every child and young person deserves the opportunity to Heal, Grow and Inspire — a belief brought to life every day by our visionary founder, Ishita Gupta." },
      { type: "p", text: "A leader not just in title, but in action, Ishita embodies a rare kind of courage — one rooted in deep compassion and a relentless commitment to serve. During one of the most testing times in modern history, she stepped forward, heart first." },
      { type: "h2", text: "International Recognition for Extraordinary Service" },
      { type: "p", text: "We are deeply honoured to share that Ishita has been formally recognised by the Ministry of Health & Prevention of the United Arab Emirates for her extraordinary contributions during the COVID-19 pandemic. In a beautifully worded certificate of appreciation, the Ministry extended their heartfelt thanks for her unwavering dedication in supporting the Emirati community." },
      { type: "blockquote", text: "Thank you for your support and loyalty to the United Arab Emirates and our community. You are a model of courage and commitment to helping others during difficult times.", by: "Ministry of Health & Prevention, UAE" },
      { type: "p", text: "This moment is more than a certificate — it's a reminder of what leadership looks like when fueled by empathy. In the darkest of times, Ishita was a beacon: calm, fearless and fully present. She didn't just serve; she stood by people, reminding them they weren't alone." },
      { type: "h2", text: "A Vision that Empowers" },
      { type: "p", text: "RehVamp Foundation was born from Ishita's dream — a dream of a world where every child feels safe, supported and seen. As a registered Charitable Incorporated Organisation (CIO), RehVamp focuses on four key pillars that mirror Ishita's values:" },
      { type: "ul", items: [
        "Healthcare & Mental Health: ensuring accessible, compassionate care for young minds and bodies",
        "Education: creating pathways for learning and growth, regardless of circumstance",
        "Anti-Bullying & Anti-Harassment Advocacy: building safe spaces where every voice matters",
        "Empowerment & Resilience: equipping young people with tools to overcome and thrive",
      ]},
      { type: "h2", text: "Leading with Heart" },
      { type: "p", text: "What makes Ishita truly remarkable isn't just her accolades — it's the way she leads. With softness and strength in equal measure. With fierce conviction and boundless compassion. She listens, uplifts and ignites hope in the hearts of those who've been silenced or sidelined." },
      { type: "p", text: "Her recognition by an international government is a powerful validation — but to those who've worked alongside her, this honour only affirms what they already knew: Ishita Gupta is a force for good." },
      { type: "h2", text: "A Moment of Pride" },
      { type: "p", text: "We celebrate this recognition not just as a milestone for Ishita, but as a moment of pride for all of us at RehVamp. Her light continues to guide us as we work toward a world where healing is possible, growth is nurtured and inspiration is shared freely." },
      { type: "p", text: "To know her is to be moved by her. To work with her is to be changed by her. And to watch her lead? That's when you understand what it truly means to Heal. Grow. Inspire." },
    ],
  },
  {
    slug: "supporting-families-through-crisis",
    title: "Supporting Families Through Crisis: How Our Emergency Exit Guidance Initiative Made a Difference",
    date: "June 12, 2026",
    excerpt:
      "When regional airspace disruptions left thousands uncertain about their next steps, Rehvamp Foundation responded with a clear mission: ensure vulnerable individuals and families had access to safe, lawful and practical pathways to safety.",
    tags: ["Emergency", "GCC", "HumanitarianSupport"],
    image: IMG.emergencyExit.hero,
    body: [
      { type: "p", text: "When regional airspace disruptions left thousands of travelers uncertain about their next steps, Rehvamp Foundation responded with a clear mission: ensure that vulnerable individuals and families had access to safe, lawful and practical pathways to safety." },
      { type: "p", text: "Over the past several months, our Emergency Exit Guidance Initiative has become a vital humanitarian coordination resource for expatriates, families, medical cases and individuals facing urgent travel challenges across the Gulf region." },
      { type: "h2", text: "A Humanitarian Bridge Between Crisis and Stability" },
      { type: "p", text: "At Rehvamp Foundation, we are not a transport operator. Our role is to serve as a humanitarian bridge between uncertainty and stability. When individuals and families find themselves stranded, disconnected from support networks or unsure of available travel options, our team helps them understand viable pathways, access critical information and connect with appropriate resources." },
      { type: "p", text: "The initiative was created to provide clarity during moments when reliable information can be difficult to find and when every decision carries significant consequences." },
      { type: "h2", text: "How We Supported Those in Need" },
      { type: "h3", text: "Route Planning and Safe Travel Guidance" },
      { type: "p", text: "One of the greatest challenges faced by travelers during recent disruptions was understanding which routes remained available. Our team provided guidance on lawful travel options and regional transit pathways, including:" },
      { type: "ul", items: [
        "Overland routes into Saudi Arabia via Riyadh and Jeddah",
        "Travel coordination options into Oman through Muscat",
        "Connections through key GCC transit hubs",
        "Onward travel pathways to Turkey, Europe, Asia-Pacific and other international destinations",
      ]},
      { type: "h3", text: "Emergency Aviation Coordination" },
      { type: "p", text: "For urgent humanitarian situations involving vulnerable individuals, medical cases and time-sensitive travel needs, we assisted with information and coordination regarding licensed private aviation services. This included guidance relating to:" },
      { type: "ul", items: [
        "Private jet availability",
        "Emergency helicopter transfers",
        "Regulatory requirements",
        "Airspace permissions",
        "Civil aviation approvals",
      ]},
      { type: "h3", text: "Emergency Visa Assistance" },
      { type: "p", text: "Travel disruptions often create immediate immigration and documentation challenges. Our volunteers and coordinators helped individuals understand emergency visa options, entry requirements, transit regulations and required documentation. Support was provided for travelers seeking lawful entry through Oman, Saudi Arabia, Turkey and onward destinations." },
      { type: "h3", text: "Embassy and Repatriation Support" },
      { type: "p", text: "A key component of our response focused on helping people reconnect with official government assistance programs. We encouraged and assisted travelers with:" },
      { type: "ul", items: [
        "Embassy registration and consular communication",
        "Government repatriation programs",
        "UK FCDO registration and US STEP enrollment",
        "Official evacuation updates",
      ]},
      { type: "h3", text: "Stabilization and Shelter Support" },
      { type: "p", text: "Safety does not end once travel arrangements are secured. Through our humanitarian network, we helped connect individuals with temporary accommodation guidance, community support referrals, welfare resources and family-focused stabilization support while waiting for onward travel or long-term solutions." },
      { type: "h2", text: "Prioritizing the Most Vulnerable" },
      { type: "p", text: "Throughout the initiative, Rehvamp Foundation adopted a vulnerability-first approach. Priority support was directed toward:" },
      { type: "ul", items: [
        "Families with children: receiving immediate attention and enhanced coordination support",
        "Medical cases: individuals requiring medical care, mobility assistance or urgent healthcare needs",
        "Vulnerable individuals: people facing immediate safety concerns or humanitarian emergencies",
        "Expatriates without local support: foreign nationals lacking local family, employer or community networks",
      ]},
      { type: "h2", text: "Looking Ahead" },
      { type: "p", text: "The Emergency Exit Guidance Initiative reflects Rehvamp Foundation's commitment to delivering practical humanitarian support when communities need it most. Whether assisting a family seeking a safe route home, helping a medical case navigate complex travel requirements or connecting vulnerable individuals with critical resources, our mission remains unchanged: to provide trusted guidance, compassionate support and safe pathways forward during times of uncertainty." },
      { type: "p", text: "As regional conditions evolve, Rehvamp Foundation will continue strengthening partnerships, expanding humanitarian coordination capabilities and ensuring vulnerable individuals have access to the information and support they need to move from crisis toward stability." },
    ],
    relatedPage: { label: "Emergency Exit Guidance", to: "/emergency-exit-guidance" },
  },
  {
    slug: "be-careful-with-what-you-let-in",
    title: "Be Careful With What You Let In",
    date: "October 2, 2024",
    excerpt:
      "Your mind absorbs far more than you realize. In a world designed for constant consumption, protecting what you let in isn't avoidance — it's self-respect.",
    tags: ["Wellbeing", "DigitalHealth"],
    image: IMG.blog.featured,
    body: [
      { type: "p", text: "Your mind is sacred." },
      { type: "p", text: "It absorbs far more than you realize. Every sound, image and word you take in shapes how you think, how you feel and how you see yourself. Yet in a world designed for constant consumption, we rarely pause to ask whether what we're absorbing is actually good for us." },
      { type: "p", text: "Not everything that looks like art or inspiration nourishes the soul. Some things leave noise where there should be peace." },
      { type: "h2", text: "Your Feed Is Not Neutral" },
      { type: "p", text: "Not everyone who lands on your timeline came to add calm or clarity. Some accounts, comments and so-called hot takes are built — intentionally or not — to rattle your nervous system, poke old wounds and keep you spinning in chaos. The result is subtle but powerful: tension in the body, a clenched jaw, a racing mind." },
      { type: "p", text: "This is why boundaries online matter. Your feed is your garden. Your attention is water. You don't have to nourish the weeds." },
      { type: "p", text: "Curating what you consume isn't avoidance — it's awareness. Muting freely, blocking without guilt and unfollowing without announcement are not acts of rejection. They are acts of self-respect." },
      { type: "h2", text: "Words Stay Longer Than We Realize" },
      { type: "p", text: "Some words settle softly and help us heal. Others echo quietly and leave invisible wounds. Cruel or careless language can replay in someone's mind for years, shaping their confidence, self-worth and mental health long after the moment has passed." },
      { type: "p", text: "We may never truly know what someone else is battling internally. That's why how we speak matters so deeply. A pause before reacting, a gentler response and words chosen with empathy can make the difference between someone feeling broken or supported. Language has power. And with that power comes responsibility." },
      { type: "h2", text: "Choosing What You Let In" },
      { type: "p", text: "You deserve a mental space that feels like a deep breath, not constant tension. Being mindful of what you consume — online and offline — isn't about cutting yourself off from the world. It's about choosing gently. Choosing content that supports healing, growth and inspiration, rather than what drains your light." },
      { type: "p", text: "At The RehVamp Foundation, we believe in creating safe spaces for gentle minds and heavy hearts. Spaces where awareness leads to healing, boundaries lead to growth and intention leads to inspiration." },
      { type: "p", text: "One thought at a time. One boundary at a time. Heal. Grow. Inspire." },
    ],
  },
];
