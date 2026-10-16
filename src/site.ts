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

export type Testimonial = {
  slug: string;
  title: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  video?: string; // Vimeo id: when set, the story page plays this video
  videoFile?: string; // self-hosted mp4 path; takes priority over `video`
  body?: BodyBlock[]; // optional long-form article shown on the story page
};

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "finding-her-voice-again",
    title: "Finding Her Voice Again: Elena's Journey from Isolation to Empowerment",
    quote:
      "For years, I felt like I was losing myself beneath the weight of other people's actions and opinions. Rehvamp Foundation helped me find my way back.",
    name: "Elena",
    role: "Artist & musician",
    image: "/images/stories/elena-cover-v2.webp",
    video: "1206838061",
    body: [
      { type: "p", text: "Success is often seen as the beginning of a dream. For Elena, it became the beginning of an unexpected struggle." },
      { type: "p", text: "An artist and musician with a passion for creativity and self-expression, Elena was building a promising future. Following her first major fashion campaign and editorial feature with a leading magazine, new opportunities began to emerge and her career was gaining momentum." },
      { type: "p", text: "Yet as her visibility increased, so did the challenges she faced." },
      { type: "p", text: "Over time, Elena became the target of persistent harassment, bullying, and unwanted attention. False narratives were created, boundaries were repeatedly challenged, and public criticism began to overshadow the confidence that had once driven her ambitions." },
      { type: "p", text: "What began as a difficult experience gradually evolved into years of emotional strain." },
      { type: "blockquote", text: "The hardest part wasn't a single comment or incident. It was the feeling of carrying that weight every day. After a while, you begin to question yourself and lose sight of who you are.", by: "Elena" },
      { type: "h2", text: "The Hidden Impact of Prolonged Harassment" },
      { type: "p", text: "Behind every act of bullying or harassment is a person living with its consequences." },
      { type: "p", text: "For Elena, the impact extended far beyond what others could see. The constant pressure affected her emotional wellbeing, relationships, and sense of security. The creativity that had once brought her joy became increasingly difficult to access as anxiety and self-doubt took hold." },
      { type: "p", text: "Like many people experiencing prolonged emotional abuse, she began to feel isolated." },
      { type: "p", text: "The confidence she had worked so hard to build slowly faded. Opportunities felt further away. There were moments when she struggled to see a path forward." },
      { type: "blockquote", text: "I felt unheard and alone. I felt like people had formed opinions about me without ever knowing who I really was.", by: "Elena" },
      { type: "h2", text: "Finding Support at the Right Time" },
      { type: "p", text: "Everything began to change when Elena connected with Rehvamp Foundation." },
      { type: "p", text: "At a point in her life when she felt overwhelmed and unsupported, the Foundation provided something she had been missing for a long time: a safe space to be heard." },
      { type: "p", text: "Rather than focusing on the negativity surrounding her circumstances, Rehvamp Foundation focused on Elena as a person." },
      { type: "p", text: "Through compassionate counselling, practical guidance, emotional support, and ongoing encouragement, the Foundation helped Elena begin the process of rebuilding her confidence and reclaiming her sense of self-worth." },
      { type: "p", text: "For the first time in years, she felt genuinely listened to. She felt understood. Most importantly, she felt believed." },
      { type: "p", text: "The Foundation's support helped Elena work through the emotional impact of years of bullying and harassment. Through counselling and guidance, she gained tools to manage anxiety, rebuild resilience, and develop healthier ways of coping with the challenges she had faced." },
      { type: "p", text: "Step by step, she began to rediscover the strengths that had always existed within her." },
      { type: "h2", text: "Rebuilding Confidence and Reclaiming Identity" },
      { type: "p", text: "Healing is rarely linear." },
      { type: "p", text: "For Elena, it meant learning to trust herself again. It meant recognising that her value was never defined by public opinion, criticism, or the actions of those who sought to undermine her confidence." },
      { type: "p", text: "With continued support and encouragement, she gradually reconnected with her creativity, her ambitions, and her belief in her own potential." },
      { type: "p", text: "Today, Elena continues to embrace her identity as an artist and musician while using her experiences to encourage others who may be facing similar challenges." },
      { type: "p", text: "Her story is not defined by what happened to her. It is defined by how she responded." },
      { type: "p", text: "Through courage, resilience, and the support of people who cared, she transformed a period of profound adversity into a journey of growth, healing, and self-discovery." },
      { type: "h2", text: "A Message of Hope" },
      { type: "p", text: "Elena's story is a powerful reminder that no one should face bullying, harassment, or emotional abuse alone." },
      { type: "p", text: "Support matters. Being heard matters. Having someone believe in you can make all the difference." },
      { type: "p", text: "At Rehvamp Foundation, we believe every individual deserves compassion, guidance, and the opportunity to rebuild their confidence and create a brighter future." },
      { type: "p", text: "For Elena, that support became the turning point that helped her find her voice again." },
      { type: "p", text: "Today, she stands stronger, more confident, and more hopeful than she ever thought possible, not because of what she endured, but because she chose not to let it define her." },
      { type: "h2", text: "Elena's Reflection" },
      { type: "blockquote", text: "For years, I felt like I was losing myself beneath the weight of other people's actions and opinions. Rehvamp Foundation helped me find my way back. Through counselling, guidance, and unwavering support, they reminded me that my worth had never disappeared, I had simply forgotten how to see it. They helped me heal, rebuild my confidence, and believe in myself again.", by: "Elena" },
      { type: "p", text: "At Rehvamp Foundation, every journey begins with support, grows through resilience, and leads toward a future filled with possibility." },
      { type: "h3", text: "Heal. Grow. Inspire." },
    ],
  },
  {
    slug: "empowering-higher-education",
    title: "Breaking the Cycle: Aarav's Journey from Financial Hardship to Graduation",
    quote:
      "Without support, I would have had to leave college after the first semester. Instead, I graduated, found work, and can now help my family.",
    name: "Aarav",
    role: "Sponsored graduate",
    image: "/images/stories/aarav-cover.webp",
    videoFile: "/videos/aarav.mp4",
    body: [
      { type: "h2", text: "Background" },
      { type: "p", text: "Aarav grew up in a low-income family, but despite financial hardships, he consistently excelled academically and secured admission to a reputed college." },
      { type: "p", text: "Unfortunately, the annual tuition fees and educational expenses exceeded his family's financial capacity, placing his education at risk. Without financial support, Aarav faced the possibility of discontinuing his studies after the first semester." },
      { type: "h2", text: "The Challenge" },
      { type: "p", text: "Aarav required assistance to cover:" },
      { type: "ul", items: ["Annual college tuition", "Examination fees", "Academic materials", "Basic educational expenses"] },
      { type: "p", text: "Without support, he would likely have had to abandon his education and take up low-paying work to support his family." },
      { type: "h2", text: "Rehvamp Foundation's Intervention" },
      { type: "p", text: "Guided by its mission to Heal. Grow. Inspire., Rehvamp Foundation reviewed Aarav's academic achievements, financial circumstances, and aspirations before approving a comprehensive educational sponsorship." },
      { type: "p", text: "The Foundation committed to supporting Aarav's education for three consecutive academic years, covering:" },
      { type: "ul", items: ["100% of annual college tuition fees", "Examination fees", "Essential academic supplies and study materials"] },
      { type: "p", text: "This support enabled Aarav to continue his education without financial uncertainty while encouraging him to maintain strong academic performance throughout the program." },
      { type: "h2", text: "The Outcome" },
      { type: "p", text: "Relieved of financial stress, Aarav dedicated himself fully to his studies. Over the three-year sponsorship period, he:" },
      { type: "ul", items: ["Maintained excellent academic performance.", "Participated in extracurricular activities and skill-development programs.", "Successfully completed his undergraduate degree."] },
      { type: "p", text: "Within six months of graduation, Aarav secured full-time employment. His success enabled him to:" },
      { type: "ul", items: ["Support his family's household expenses.", "Contribute to his younger sister's education.", "Achieve financial independence."] },
      { type: "h2", text: "Impact" },
      { type: "h3", text: "For the Beneficiary" },
      { type: "ul", items: ["Successfully completed a three-year undergraduate degree.", "Built a stable professional career.", "Broke the cycle of financial hardship."] },
      { type: "h3", text: "For the Family" },
      { type: "ul", items: ["Improved financial security.", "Reduced dependence on irregular wage labor.", "Created better educational opportunities for younger family members."] },
      { type: "h3", text: "For the Community" },
      { type: "p", text: "Inspired by the support he received, Aarav now volunteers at local schools, mentoring students from economically disadvantaged backgrounds and encouraging them to pursue higher education." },
      { type: "h2", text: "Key Results" },
      { type: "ul", items: ["Duration of Support: 3 Years", "Tuition Fees Covered: 100%", "Graduation Status: Successfully Graduated", "Employment: Full-time Employment", "Long-term Impact: Improved family income and educational awareness"] },
      { type: "h2", text: "Conclusion" },
      { type: "p", text: "Aarav's journey demonstrates how timely educational support can transform not only one student's future but also the lives of an entire family. By removing financial barriers and investing in potential, Rehvamp Foundation empowered Aarav to achieve his dreams and give back to his community." },
      { type: "p", text: "Every educational sponsorship reflects Rehvamp Foundation's commitment to Heal. Grow. Inspire.: healing financial burdens, fostering personal growth through education, and inspiring lasting change." },
    ],
  },
  {
    slug: "healing-with-kindness",
    title: "Healing with Kindness",
    quote:
      "Healing with kindness changed everything. The team treated us like family from day one.",
    name: "Daniel",
    role: "Beneficiary",
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
    slug: "in-loving-memory-dr-alexander-aslani",
    title: "In Loving Memory of Dr Alexander Aslani: Honouring a Legacy of Medical Excellence, Humanitarian Service and Compassion",
    date: "October 16, 2026",
    excerpt:
      "Rehvamp Foundation pays tribute to an internationally respected plastic surgeon whose remarkable career, humanitarian contributions and dedication to improving lives leave an enduring legacy.",
    tags: ["InMemoriam", "Tribute", "HumanitarianMedicine"],
    image: IMG.blog.aslani,
    body: [
      { type: "p", text: "The Rehvamp Foundation expresses its profound sorrow at the tragic and untimely passing of Dr Alexander Aslani, a distinguished plastic surgeon, humanitarian and highly respected member of the international aesthetic surgery community." },
      { type: "p", text: "Dr Aslani's sudden death in Marbella, Spain, on 7 October 2026 represents a profound loss to his family, loved ones, colleagues, patients and the wider international medical community." },
      { type: "p", text: "An internationally recognised specialist in aesthetic and reconstructive plastic surgery, Dr Aslani dedicated more than three decades to advancing surgical techniques, promoting patient safety and improving the lives of those entrusted to his care." },
      { type: "p", text: "Yet beyond his considerable professional achievements, his legacy also encompasses a deeply meaningful commitment to humanitarian medicine, particularly his involvement in providing reconstructive surgery to disadvantaged children in India." },
      { type: "p", text: "His life serves as a reminder that the true measure of professional excellence extends beyond recognition and accomplishment to the compassion, generosity and positive impact we bring to the lives of others." },
      { type: "h2", text: "A Distinguished Career Defined by Excellence and Innovation" },
      { type: "p", text: "Dr Alexander Aslani established himself as a prominent figure in international plastic surgery, earning recognition for his expertise in advanced body-contouring techniques and aesthetic surgical procedures." },
      { type: "p", text: "As the founder of Cirumed Clinic in Marbella, he developed an internationally recognised practice, attracting patients from across the world and building a reputation for specialist surgical expertise." },
      { type: "p", text: "Throughout his career, he performed thousands of procedures and contributed to the advancement of aesthetic plastic surgery through clinical practice, professional education and the development of surgical techniques." },
      { type: "p", text: "His work in body contouring, particularly gluteal fat grafting, placed him among the recognised specialists in his field." },
      { type: "p", text: "Equally significant was his involvement in professional discussions concerning patient safety and the responsible advancement of aesthetic surgical techniques." },
      { type: "p", text: "His career reflected an essential principle of medical practice:" },
      { type: "blockquote", text: "Innovation, technical excellence and professional achievement must always remain inseparable from patient wellbeing, ethical responsibility and the highest standards of care." },
      { type: "p", text: "Through his work, Dr Aslani contributed to the international exchange of surgical knowledge and the continued evolution of his specialty." },
      { type: "h2", text: "A Humanitarian Legacy: Restoring Smiles and Transforming Lives in India" },
      { type: "p", text: "Beyond his distinguished career in aesthetic surgery, one of the most meaningful aspects of Dr Aslani's legacy was his commitment to humanitarian reconstructive medicine." },
      { type: "p", text: "According to his official biography published by Cirumed Clinic, Dr Aslani was an active member of Interplast, an organisation associated with humanitarian reconstructive surgery." },
      { type: "p", text: "Through this involvement, he led annual paediatric plastic surgery missions to Kolkata, India, where he performed cleft-lip operations on children from underprivileged backgrounds." },
      { type: "p", text: "These missions reflected his willingness to extend specialised surgical care beyond private medical practice and make treatment available to children facing significant barriers to accessing healthcare." },
      { type: "p", text: "For children born with cleft lips, reconstructive surgery can be life-changing." },
      { type: "p", text: "Such procedures can help address functional difficulties, support healthy development and improve overall quality of life." },
      { type: "p", text: "In communities where access to specialist healthcare may be limited by financial or geographical circumstances, humanitarian surgical initiatives can provide opportunities for treatment that might otherwise remain inaccessible." },
      { type: "p", text: "By contributing his medical expertise to these missions, Dr Aslani demonstrated that the responsibilities of a healthcare professional can extend far beyond the operating theatre and the boundaries of a successful private practice." },
      { type: "p", text: "His involvement represented an important expression of service, compassion and the belief that access to essential medical care should not be determined solely by financial circumstances." },
      { type: "p", text: "For Rehvamp Foundation, this dimension of his life holds particular significance. It reflects the understanding that:" },
      { type: "blockquote", text: "The greatest value of knowledge and professional achievement lies in the ability to use them to alleviate suffering, restore dignity and improve the lives of others." },
      { type: "p", text: "Dr Aslani's humanitarian work in India remains an important part of the legacy he leaves behind." },
      { type: "h2", text: "A Family Tradition of Medical Dedication" },
      { type: "p", text: "Dr Aslani's commitment to medicine was also rooted in a family history of medical practice." },
      { type: "p", text: "His official Cirumed Clinic biography describes the influence of his father, Dr Amir Aslani, who was recognised for his contributions to the development of modern mastectomy techniques in Germany during the 1970s." },
      { type: "p", text: "Growing up within a family connected to medicine, Dr Alexander Aslani went on to establish his own professional identity through surgical innovation, international clinical practice and humanitarian involvement." },
      { type: "p", text: "His career combined the pursuit of technical excellence with the wider responsibilities associated with caring for others." },
      { type: "p", text: "This dedication to medicine, across both professional and humanitarian settings, forms an important part of how his life's work should be remembered." },
      { type: "h2", text: "Remembering the Human Being Beyond the Surgeon" },
      { type: "p", text: "While Dr Aslani's professional accomplishments earned him international recognition, those who knew him also remember the personal qualities that distinguished him beyond his medical career." },
      { type: "p", text: "His warmth, generosity, sense of humour, integrity and kindness left lasting impressions on colleagues, friends and those whose lives intersected with his." },
      { type: "p", text: "Professional success may establish a reputation, but it is often character, compassion and the relationships we nurture that create the most enduring memories." },
      { type: "p", text: "Dr Aslani's humanitarian involvement offers a particularly meaningful insight into these values." },
      { type: "p", text: "His willingness to participate in reconstructive surgery missions for disadvantaged children reflected a commitment to making his professional expertise available where it could have a profound impact." },
      { type: "p", text: "His life reminds us that professional distinction and personal compassion are not separate achievements. At their best, they reinforce one another." },
      { type: "p", text: "Knowledge becomes more valuable when shared. Expertise becomes more meaningful when used in service of others. And professional accomplishment becomes an enduring legacy when accompanied by humanity." },
      { type: "h2", text: "Standing Against Violence and Protecting Healthcare Professionals" },
      { type: "p", text: "The tragic circumstances surrounding Dr Aslani's passing also raise an important issue concerning the safety, dignity and protection of healthcare professionals." },
      { type: "blockquote", text: "Rehvamp Foundation unequivocally condemns all forms of violence, intimidation and aggression against healthcare workers and members of society." },
      { type: "p", text: "Healthcare professionals dedicate their knowledge, skills and often their entire working lives to supporting the health and wellbeing of others." },
      { type: "p", text: "They deserve to carry out their responsibilities in environments defined by safety, respect and human dignity." },
      { type: "p", text: "Violence against any individual is unacceptable. When a healthcare professional loses their life through such circumstances, the tragedy also resonates throughout the wider community of individuals committed to caring for others." },
      { type: "p", text: "We believe that compassion, non-violence, mutual respect and the protection of human life must remain fundamental principles of a just and humane society." },
      { type: "p", text: "At this moment of sorrow, we stand in solidarity with Dr Aslani's family, colleagues and the international medical community." },
      { type: "h2", text: "Heal. Grow. Inspire. A Legacy That Reflects Our Values" },
      { type: "p", text: "At Rehvamp Foundation, our guiding philosophy Heal, Grow, Inspire reflects our belief in the transformative power of compassion, education, resilience and meaningful service to humanity." },
      { type: "p", text: "In honouring Dr Alexander Aslani, we recognise how these values resonate with different aspects of his life and work." },
      { type: "h3", text: "Heal" },
      { type: "p", text: "Through his surgical expertise and humanitarian reconstructive missions, Dr Aslani contributed to improving the health and wellbeing of patients, including disadvantaged children who required specialist medical treatment." },
      { type: "p", text: "His involvement in paediatric cleft-lip surgery in Kolkata demonstrates the profound difference that access to appropriate healthcare can make." },
      { type: "h3", text: "Grow" },
      { type: "p", text: "Through decades of clinical experience, professional development and contributions to aesthetic surgical practice, Dr Aslani pursued the advancement of medical knowledge and technical excellence." },
      { type: "p", text: "His career reflects the importance of continuous learning, innovation and responsible progress within healthcare." },
      { type: "h3", text: "Inspire" },
      { type: "p", text: "Through his humanitarian commitments, he demonstrated how professional skills can be used to serve communities beyond the immediate reach of conventional healthcare systems." },
      { type: "p", text: "His example encourages us to consider how our own knowledge, resources and opportunities can contribute to the wellbeing of others." },
      { type: "p", text: "Together, these values remind us that healing is not only a medical process, growth is not measured solely by professional achievement, and inspiration is often found in acts of kindness and service." },
      { type: "h2", text: "The Enduring Importance of Humanitarian Service" },
      { type: "p", text: "Dr Aslani's involvement in humanitarian surgery provides an opportunity to reflect on the broader importance of equitable access to healthcare." },
      { type: "p", text: "Across the world, countless individuals continue to face barriers to receiving essential medical treatment." },
      { type: "p", text: "For children living with conditions requiring reconstructive surgery, these barriers can have consequences for physical health, emotional wellbeing and everyday life." },
      { type: "p", text: "Humanitarian medical missions represent one way in which specialist expertise can reach communities where access to such treatment may otherwise be limited." },
      { type: "p", text: "Dr Aslani's participation in these initiatives serves as a reminder that medical professionals can make meaningful contributions beyond their established clinical environments." },
      { type: "p", text: "At Rehvamp Foundation, we believe that acts of service deserve recognition because they encourage a wider culture of empathy, responsibility and collective wellbeing." },
      { type: "p", text: "By remembering the humanitarian dimensions of Dr Aslani's career, we also honour the principle that every individual deserves dignity, compassion and the opportunity to receive appropriate care." },
      { type: "h2", text: "Honouring a Life of Excellence, Service and Humanity" },
      { type: "p", text: "The Rehvamp Foundation extends its deepest and most heartfelt condolences to Dr Alexander Aslani's family, loved ones, friends, colleagues, patients and the entire Cirumed Clinic team." },
      { type: "p", text: "We also extend our sympathies to the international plastic surgery community and all those who have been affected by his sudden passing." },
      { type: "p", text: "At this moment of profound sorrow, we honour Dr Aslani not only for his remarkable professional achievements, but also for the humanitarian values reflected in his life's work." },
      { type: "p", text: "His contributions to aesthetic surgery, his commitment to patient safety and his involvement in providing reconstructive care to disadvantaged children form a legacy worthy of recognition and remembrance." },
      { type: "p", text: "The lives we touch, the compassion we extend and the opportunities we create for others are among the most meaningful measures of a life well lived." },
      { type: "p", text: "Dr Aslani's humanitarian contributions remind us that the practice of medicine is, at its heart, an expression of service to humanity." },
      { type: "p", text: "While his passing is a profound tragedy, the positive impact of his work deserves to be remembered with gratitude, dignity and respect." },
      { type: "p", text: "May his legacy inspire future generations of healthcare professionals to pursue excellence with integrity, advance medical knowledge responsibly and extend their expertise to those most in need." },
      { type: "p", text: "May those mourning his loss find comfort in the memories they shared and in the knowledge that his life's work made a meaningful difference." },
      { type: "blockquote", text: "We honour Dr Alexander Aslani for the surgeon he was, the lives he helped improve and the compassion that formed an important part of his legacy. May his memory endure through the lives he touched, and may he rest in eternal peace.", by: "In loving memory of Dr Alexander Aslani · Rehvamp Foundation · Heal • Grow • Inspire" },
    ],
  },
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
      { type: "p", text: "The film, an anthology created by 22 Gazan filmmakers, brings together documentaries, animations, fiction and experimental shorts. Each story offers an unflinching glimpse into life amid conflict, while highlighting the strength, endurance and unwavering spirit of a community determined to survive and create." },
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
      { type: "p", text: "By standing with them, the RehVamp Foundation continues its commitment to building bridges across borders, nurturing hope and inspiring change. We believe that storytelling is not just about remembrance, it is about creating pathways for healing and collective growth." },
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
      { type: "p", text: "At RehVamp Foundation, we believe that every child and young person deserves the opportunity to Heal, Grow and Inspire, a belief brought to life every day by our visionary founder, Ishita Gupta." },
      { type: "p", text: "A leader not just in title, but in action, Ishita embodies a rare kind of courage, one rooted in deep compassion and a relentless commitment to serve. During one of the most testing times in modern history, she stepped forward, heart first." },
      { type: "h2", text: "International Recognition for Extraordinary Service" },
      { type: "p", text: "We are deeply honoured to share that Ishita has been formally recognised by the Ministry of Health & Prevention of the United Arab Emirates for her extraordinary contributions during the COVID-19 pandemic. In a beautifully worded certificate of appreciation, the Ministry extended their heartfelt thanks for her unwavering dedication in supporting the Emirati community." },
      { type: "blockquote", text: "Thank you for your support and loyalty to the United Arab Emirates and our community. You are a model of courage and commitment to helping others during difficult times.", by: "Ministry of Health & Prevention, UAE" },
      { type: "p", text: "This moment is more than a certificate, it's a reminder of what leadership looks like when fueled by empathy. In the darkest of times, Ishita was a beacon: calm, fearless and fully present. She didn't just serve; she stood by people, reminding them they weren't alone." },
      { type: "h2", text: "A Vision that Empowers" },
      { type: "p", text: "RehVamp Foundation was born from Ishita's dream, a dream of a world where every child feels safe, supported and seen. As a registered Charitable Incorporated Organisation (CIO), RehVamp focuses on four key pillars that mirror Ishita's values:" },
      { type: "ul", items: [
        "Healthcare & Mental Health: ensuring accessible, compassionate care for young minds and bodies",
        "Education: creating pathways for learning and growth, regardless of circumstance",
        "Anti-Bullying & Anti-Harassment Advocacy: building safe spaces where every voice matters",
        "Empowerment & Resilience: equipping young people with tools to overcome and thrive",
      ]},
      { type: "h2", text: "Leading with Heart" },
      { type: "p", text: "What makes Ishita truly remarkable isn't just her accolades, it's the way she leads. With softness and strength in equal measure. With fierce conviction and boundless compassion. She listens, uplifts and ignites hope in the hearts of those who've been silenced or sidelined." },
      { type: "p", text: "Her recognition by an international government is a powerful validation, but to those who've worked alongside her, this honour only affirms what they already knew: Ishita Gupta is a force for good." },
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
      "Your mind absorbs far more than you realize. In a world designed for constant consumption, protecting what you let in isn't avoidance, it's self-respect.",
    tags: ["Wellbeing", "DigitalHealth"],
    image: IMG.blog.featured,
    body: [
      { type: "p", text: "Your mind is sacred." },
      { type: "p", text: "It absorbs far more than you realize. Every sound, image and word you take in shapes how you think, how you feel and how you see yourself. Yet in a world designed for constant consumption, we rarely pause to ask whether what we're absorbing is actually good for us." },
      { type: "p", text: "Not everything that looks like art or inspiration nourishes the soul. Some things leave noise where there should be peace." },
      { type: "h2", text: "Your Feed Is Not Neutral" },
      { type: "p", text: "Not everyone who lands on your timeline came to add calm or clarity. Some accounts, comments and so-called hot takes are built, intentionally or not, to rattle your nervous system, poke old wounds and keep you spinning in chaos. The result is subtle but powerful: tension in the body, a clenched jaw, a racing mind." },
      { type: "p", text: "This is why boundaries online matter. Your feed is your garden. Your attention is water. You don't have to nourish the weeds." },
      { type: "p", text: "Curating what you consume isn't avoidance, it's awareness. Muting freely, blocking without guilt and unfollowing without announcement are not acts of rejection. They are acts of self-respect." },
      { type: "h2", text: "Words Stay Longer Than We Realize" },
      { type: "p", text: "Some words settle softly and help us heal. Others echo quietly and leave invisible wounds. Cruel or careless language can replay in someone's mind for years, shaping their confidence, self-worth and mental health long after the moment has passed." },
      { type: "p", text: "We may never truly know what someone else is battling internally. That's why how we speak matters so deeply. A pause before reacting, a gentler response and words chosen with empathy can make the difference between someone feeling broken or supported. Language has power. And with that power comes responsibility." },
      { type: "h2", text: "Choosing What You Let In" },
      { type: "p", text: "You deserve a mental space that feels like a deep breath, not constant tension. Being mindful of what you consume, online and offline, isn't about cutting yourself off from the world. It's about choosing gently. Choosing content that supports healing, growth and inspiration, rather than what drains your light." },
      { type: "p", text: "At The RehVamp Foundation, we believe in creating safe spaces for gentle minds and heavy hearts. Spaces where awareness leads to healing, boundaries lead to growth and intention leads to inspiration." },
      { type: "p", text: "One thought at a time. One boundary at a time. Heal. Grow. Inspire." },
    ],
  },
];
