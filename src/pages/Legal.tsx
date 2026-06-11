import PageTransition from "../components/PageTransition";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE } from "../site";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "REHVAMP Foundation is committed to protecting your privacy. This policy explains how we collect, use and safeguard your information.",
    sections: [
      {
        h: "Information we collect",
        p: "We collect information you provide directly, such as your name, email and message when you contact us, donate, or sign up for our programmes, as well as basic analytics about how the site is used.",
      },
      {
        h: "How we use your information",
        p: "We use your information to respond to enquiries, process donations, deliver our programmes, send updates you've opted into, and improve our work. We never sell your personal data.",
      },
      {
        h: "Data security",
        p: "We apply appropriate safeguards to protect your information. Where third-party providers are involved, we require them to handle data responsibly and lawfully.",
      },
      {
        h: "Your rights",
        p: "You may request access to, correction of, or deletion of your personal data at any time by emailing us.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "By using this website and our services, you agree to the following terms. Please read them carefully.",
    sections: [
      {
        h: "Use of our website",
        p: "You agree to use this site lawfully and not to misuse its content. All content is provided for information about REHVAMP Foundation and its programmes.",
      },
      {
        h: "Donations",
        p: "Donations support our charitable mission. Where a specific appeal is named, we direct funds accordingly while retaining discretion to allocate where need is greatest.",
      },
      {
        h: "Programmes & challenges",
        p: "Participation in programmes such as the Digital Well-Being Challenge is subject to the eligibility, consent and conduct rules set out at the point of sign-up.",
      },
      {
        h: "Liability",
        p: "We provide information and coordination in good faith. Third-party services are delivered by properly licensed providers and are subject to their own terms.",
      },
    ],
  },
};

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const c = CONTENT[kind];
  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title={c.title} subtitle={c.intro} />
      <section className="container-x py-14 md:py-20">
        <div className="mx-auto max-w-2xl space-y-8">
          {c.sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05}>
              <h2 className="font-display text-2xl text-ink">{s.h}</h2>
              <p className="mt-2 text-body">{s.p}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="rounded-2xl bg-teal-50 p-6 text-sm text-body">
              Questions about this policy? Email us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-teal hover:underline">
                {SITE.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
