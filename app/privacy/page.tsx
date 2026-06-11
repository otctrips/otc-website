import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How OTC Trips collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "When you request a quote, contact us, or book a trip, we collect information you provide directly: name, email address, phone number, organization name, travel preferences, group details, and payment information processed through our secure payment partners.",
      "We also collect certain information automatically when you visit our site, including IP address, browser type, device information, pages visited, and referring URLs, through cookies and similar technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use your information to: prepare and deliver custom trip quotes; book and manage travel arrangements with airlines, hotels, and other vendors; communicate with you about your trip; process payments; improve our website and services; and, with your consent, send promotional communications about destinations and offers.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "3. Sharing With Travel Vendors",
    body: [
      "To book your trip, we share necessary traveler information (such as names and dates of birth for airline tickets) with airlines, hotels, transportation providers, and activity vendors. These vendors use your information solely to fulfill your travel arrangements and are subject to their own privacy policies.",
    ],
  },
  {
    title: "4. Cookies & Analytics",
    body: [
      "Our website uses cookies and similar technologies to remember your preferences, understand how visitors use the site, and measure the effectiveness of our marketing. You can control cookies through your browser settings; disabling them may affect site functionality.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We use commercially reasonable administrative, technical, and physical safeguards to protect your personal information. Payment details are processed by PCI-compliant payment processors and are never stored on our servers.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain personal information for as long as needed to provide our services, comply with legal obligations (including Florida Seller of Travel requirements), resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "7. Your Choices & Rights",
    body: [
      "You may opt out of promotional emails at any time using the unsubscribe link in any message. Depending on your state of residence, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us using the information below.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our services are intended for users 18 and older. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us and we will delete it.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this policy from time to time. The updated version will be posted on this page with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    body: [
      "Questions about this policy or your personal information? Reach us at hello@otctrips.com, or by mail at OTC Trips, LLC, Florida, USA. OTC Trips, LLC is an Independent Affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578. California Seller of Travel No. 2090937-50.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Effective date: January 1, 2025"
      />
      <section className="container-site py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-lg leading-relaxed text-ink/65">
              OTC Trips, LLC (&ldquo;OTC,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;) respects your privacy. This policy explains
              what information we collect when you use our website and
              services, how we use it, and the choices you have.
            </p>
          </FadeIn>
          <div className="mt-12 space-y-10">
            {SECTIONS.map((section) => (
              <FadeIn key={section.title}>
                <h2 className="font-heading text-2xl">{section.title}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-ink/65">
                    {paragraph}
                  </p>
                ))}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
