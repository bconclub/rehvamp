import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

type Block = { p?: string; sub?: string; list?: string[] };
type Section = { h: string; body: Block[] };
type Doc = { title: string; updated: string; sections: Section[] };

const PRIVACY: Doc = {
  title: "Privacy Policy",
  updated: "RehVamp Foundation (CIO) · Last updated: 04-09-2025",
  sections: [
    {
      h: "1. Introduction",
      body: [
        { p: 'RehVamp Foundation (CIO) ("we", "us", "our") is committed to protecting the privacy and personal data of everyone who interacts with us, including children, young people, families, supporters, donors and visitors to our website at www.rehvampfoundation.org.' },
        { p: "This Privacy Policy explains how we collect, use, store and protect your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018." },
      ],
    },
    {
      h: "2. Who We Are",
      body: [
        { p: "RehVamp Foundation (CIO) is a registered Charitable Incorporated Organisation in England and Wales, working to advance health, education and wellbeing for children and young people." },
        { p: "Registered Address: 11 Old Bond Street, London, England, W1S 4PN, United Kingdom" },
        { p: "Email: connect@rehvampfoundation.org · Phone: +44 7415 999508 · Website: www.rehvampfoundation.org" },
      ],
    },
    {
      h: "3. What Data We Collect",
      body: [
        { p: "We may collect and process the following types of personal data:" },
        { sub: "Website Visitors" },
        { list: ["IP address and browser information", "Pages visited and time spent on the site"] },
        { sub: "Supporters & Donors" },
        { list: ["Full name and contact details", "Payment information (processed securely via third-party platforms)", "Gift Aid declarations (if applicable)", "Donation history"] },
        { sub: "Event Participants or Volunteers" },
        { list: ["Name, contact details and emergency contact info", "DBS check results (where required for safeguarding)"] },
        { sub: "Children and Young People (if engaged directly)" },
        { list: ["First name, age and non-identifying demographic info", "Safeguarding information (where relevant)"] },
      ],
    },
    {
      h: "4. How We Use Your Data",
      body: [
        { p: "We only use your data where we have a legal basis to do so. This includes:" },
        { list: ["Responding to your enquiries or requests", "Processing donations and claiming Gift Aid", "Administering events, programmes or volunteer opportunities", "Safeguarding children and vulnerable people", "Improving our website and digital services", "Complying with legal and regulatory obligations"] },
      ],
    },
    {
      h: "5. Legal Basis for Processing",
      body: [
        { p: "We rely on the following legal grounds to process your data:" },
        { list: ["Legal obligation, for Gift Aid, safeguarding or record-keeping", "Legitimate interests, for general operations, supporter engagement and website analytics", "Vital interests, where data is needed to protect life or prevent harm"] },
      ],
    },
    {
      h: "6. Data Sharing and Third Parties",
      body: [
        { p: "We do not sell or rent your data." },
        { p: "We may share your personal data with trusted third parties in limited circumstances, such as:" },
        { list: ["Payment processors (e.g. Stripe, PayPal)", "Email marketing platforms (e.g. Mailchimp)", "Event partners or venues (if applicable)", "Regulatory bodies or law enforcement (if legally required)", "IT and website service providers (for secure hosting and functionality)"] },
        { p: "All third parties are required to process your data securely and lawfully, under contract." },
      ],
    },
    {
      h: "7. Data Retention",
      body: [
        { p: "We retain personal data only for as long as necessary:" },
        { sub: "Retention Periods:" },
        { list: ["Donation and supporter data: up to 6 years (for tax and accounting)", "Safeguarding records: in line with legal and sector-specific guidance", "Enquiry and communication data: up to 2 years"] },
      ],
    },
    {
      h: "8. Your Rights",
      body: [
        { p: "Under the UK GDPR, you have the following rights:" },
        { list: ["Right to access, request a copy of your personal data", "Right to rectification, correct inaccurate or incomplete data", "Right to erasure, request deletion of your data (in certain cases)", "Right to restrict processing, limit how we use your data", "Right to object, object to direct marketing or certain processing", "Right to data portability, receive your data in a usable format"] },
        { p: "To exercise any of these rights, please contact us at connect@rehvampfoundation.org." },
        { sub: "Making a Complaint:" },
        { p: "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO): www.ico.org.uk" },
      ],
    },
    {
      h: "9. Data Security",
      body: [
        { p: "We take data protection seriously and implement appropriate physical, technical and organisational safeguards to prevent unauthorised access, loss or misuse of your data." },
        { sub: "Our Security Measures:" },
        { list: ["Encrypted connections", "Access control measures", "Secure, reputable third-party platforms", "Regular review of our data practices"] },
      ],
    },
    {
      h: "10. Changes to This Policy",
      body: [
        { p: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised 'last updated' date." },
      ],
    },
  ],
};

const TERMS: Doc = {
  title: "Terms & Conditions",
  updated: "RehVamp Foundation (CIO) · Last updated: 04-09-2025",
  sections: [
    {
      h: "1. Introduction",
      body: [
        { p: 'Welcome to the official website of RehVamp Foundation (CIO) ("RehVamp", "we", "us", or "our"). By accessing or using our website at www.rehvampfoundation.org (the "Site"), you agree to be bound by these Terms and Conditions. If you do not accept these Terms, please discontinue use of the Site immediately.' },
        { p: "We may update these Terms from time to time. Your continued use of the Site constitutes your acceptance of any changes. Please review them periodically." },
      ],
    },
    {
      h: "2. About Us",
      body: [
        { p: "RehVamp Foundation is a registered Charitable Incorporated Organisation (CIO) in England and Wales, founded by Ishita Gupta. We are committed to creating safe, supportive and empowering environments for children and young people." },
        { p: "Our mission focuses on advancing health, education and wellbeing through four key pillars:" },
        { list: ["Healthcare & Mental Health, improving access to physical and emotional care", "Education, enabling learning and personal growth through equal opportunities", "Anti-Bullying & Advocacy, building inclusive spaces free from stigma and harm", "Empowerment & Resilience, supporting children to overcome adversity and inspire positive change"] },
        { p: "We believe every child deserves the chance to Heal • Grow • Inspire." },
      ],
    },
    {
      h: "3. Use of the Website",
      body: [
        { p: "You may use the Site for lawful, personal and non-commercial purposes only. You agree not to:" },
        { list: ["Use the Site in a way that causes harm, is unlawful, fraudulent or offensive", "Interfere with the security or proper functioning of the Site", "Attempt to gain unauthorised access to any part of the Site or its systems", "Copy, distribute or commercially exploit any content without written permission"] },
        { p: "We reserve the right to restrict or terminate your access if we believe you are in breach of these Terms." },
      ],
    },
    {
      h: "4. Intellectual Property",
      body: [
        { p: "All content on the Site, including text, images, graphics, videos and logos, is the property of RehVamp Foundation or its licensors and is protected by copyright and other intellectual property laws." },
      ],
    },
    {
      h: "5. Accuracy and Disclaimer",
      body: [
        { p: 'We aim to provide accurate, up-to-date content but do not guarantee the completeness or reliability of any information on the Site. The Site is provided "as is," and we accept no liability for any loss or damage resulting from reliance on its content or functionality.' },
      ],
    },
    {
      h: "6. Third-Party Links",
      body: [
        { p: "The Site may contain links to third-party websites for your convenience. These links do not imply our endorsement, and we are not responsible for the content, practices or availability of such sites." },
      ],
    },
    {
      h: "7. Donations and Fundraising",
      body: [
        { p: "If you choose to make a donation through our Site, it will be processed securely. By donating, you confirm that the payment is from your own funds or that you are authorised to use them. Refunds are only issued at our discretion in exceptional circumstances." },
        { p: "We are committed to responsible fundraising and safeguarding donor information in line with our Privacy Policy." },
      ],
    },
    {
      h: "8. Safeguarding and Child Protection",
      body: [
        { p: "RehVamp Foundation is deeply committed to the safety and wellbeing of children and young people. We maintain strict safeguarding policies and expect all users of our platform to respect these values." },
        { p: "If you have any safeguarding concerns, please contact us immediately at connect@rehvampfoundation.org." },
      ],
    },
    {
      h: "9. Feedback and Complaints",
      body: [
        { p: "We value your feedback and are committed to handling concerns transparently and respectfully." },
        { p: "To share feedback or make a complaint, contact us by email at connect@rehvampfoundation.org or by post at 11 Old Bond Street, London, England, W1S 4PN, United Kingdom (Phone: +44 7415 999508)." },
        { p: "We aim to respond to all complaints within 10 working days." },
      ],
    },
    {
      h: "10. Governing Law and Jurisdiction",
      body: [
        { p: "These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales." },
      ],
    },
    {
      h: "11. Contact Information",
      body: [
        { p: "For questions or concerns about these Terms and Conditions, please get in touch:" },
        { p: "Email: connect@rehvampfoundation.org · Website: www.rehvampfoundation.org · Address: 11 Old Bond Street, London, England, W1S 4PN, United Kingdom · Phone: +44 7415 999508" },
        { p: "Together, we can help children Heal • Grow • Inspire." },
      ],
    },
  ],
};

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const doc = kind === "privacy" ? PRIVACY : TERMS;
  return (
    <PageTransition>
      <PageHero title={doc.title} tone="ink" />
      <section className="container-x py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple">
            {doc.updated}
          </p>
          <div className="mt-8 space-y-10">
            {doc.sections.map((s) => (
              <Reveal key={s.h}>
                <h2 className="font-display text-2xl text-ink">{s.h}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((b, i) =>
                    b.sub ? (
                      <p key={i} className="pt-1 font-semibold text-purple">{b.sub}</p>
                    ) : b.list ? (
                      <ul key={i} className="space-y-1.5">
                        {b.list.map((li) => (
                          <li key={li} className="flex gap-2.5 text-body">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i} className="text-body">{b.p}</p>
                    )
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
