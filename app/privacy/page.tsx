import type { Metadata } from "next";
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
      "Account and contact information: We collect information you provide when creating an account, requesting a quote, contacting us, or managing travel. This includes legal first and last name, email address, phone number, date of birth, organization or group name, account preferences, and information submitted to customer support.",
      "Trip and booking information: Depending on your trip, we collect destinations, travel dates, preferences, group size, invitation and membership information, roles, waitlist status, Plus-One connections, room assignments, and travel arrangements. We also collect traveler forms, signed agreements, liability waivers, signatures, and acknowledgment timestamps.",
      "Community content: When you use myOTC Community, we collect the chat messages, photos, named map pins, and pin coordinates you submit. We also collect content reports, blocking preferences, and related moderation records. Please share only information and content you have permission to provide.",
      "Payment information: Payment credentials are handled by the payment processor used for the transaction. OTC may retain transaction amounts, payment status, dates, processor references, and related booking or account information. Our application databases do not store full payment card numbers or card security codes.",
      "Technical information: Our website, application, and service providers may collect IP addresses, browser or device information, operating system information, request timestamps, and error or security logs needed to operate, secure, and troubleshoot the services. Our website also uses cookies and similar technologies as described below.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "We use personal information to create and manage accounts; prepare quotes, proposals, and agreements; arrange travel, accommodations, transportation, and events; manage invitations, guest lists, Plus-Ones, waitlists, and room assignments; collect traveler information; record signed documents; process payments; and maintain transaction records.",
      "We also use information to provide group chat, photo sharing, and trip maps; communicate about accounts and trips; provide support; investigate reports; moderate content; prevent fraud; and maintain the reliability and security of our services.",
      "We use information to meet applicable legal requirements, resolve disputes, and send promotional communications where permitted and, when required, with your consent.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "3. Information Visible to Other People",
    body: [
      "Trip members: Depending on the features enabled for your trip, authorized members can see information such as your name, guest-list status, Plus-One association, room assignment, and content you share in Community. Chat messages, photos, and map pins are shared with people who have access to that trip’s Community; they are not private communications to OTC.",
      "Other members may save, screenshot, or share content they can access. Deleting content or blocking someone cannot remove copies they previously downloaded or saved.",
      "Organizers, trip admins, and OTC: Authorized personnel can access information appropriate to their responsibilities and assigned permissions. This may include guest-list information, room assignments, completion status for required forms or waivers, and other information needed to coordinate the trip. Administrative access does not automatically grant access to every traveler’s personal information or payment details.",
      "Plus-One connections: When an invitation is accepted, the main traveler and Plus-One accounts become associated with that trip. Names and relevant participation information may be visible to each other. Payment visibility depends on the trip’s settings, which may allow individual payments, shared couple payments, or payments managed through the main traveler.",
    ],
  },
  {
    title: "4. Community Reports and Blocking",
    body: [
      "Users can report Community content and block other users through the available controls. Reports provide OTC with information about the reported content and the accounts involved so we can investigate and respond.",
      "Blocking limits visibility of Community content between the accounts involved. It does not remove either person from the trip, change a booking, or hide information needed for trip administration.",
      "OTC may remove content or restrict access when needed to enforce our rules or protect users.",
      "Uploading content to Community does not, by itself, give OTC permission to use it in public advertising. Any separate permission or media release applies according to its terms.",
    ],
  },
  {
    title: "5. Photos, Maps, and Device Permissions",
    body: [
      "Photos: Photos you select for upload are sent to our storage providers so they can appear in the trip’s Photo Drop. Saving a photo to your device may require permission to add images to your photo library. You can manage permissions through your device settings. Choosing to share a photo does not cause us to upload your entire photo library.",
      "Maps and pins: Trip maps display hotel and venue locations and places users choose to pin. We store the coordinates and names of submitted pins. A pin identifies the place selected by the user; the trip map does not continuously share your live device location with other travelers.",
      "Map, geocoding, and navigation providers may receive requested map areas, addresses, coordinates, and technical information such as an IP address. These providers include OpenStreetMap tile services and the mapping services used by your device. External applications such as Apple Maps handle information under their own privacy policies.",
      "Notifications: Where notifications are available and enabled, notification services may process a device delivery token and information needed to deliver the notification. You can manage permissions through your device settings and any notification preferences available in myOTC.",
    ],
  },
  {
    title: "6. Sharing With Service Providers and Travel Vendors",
    body: [
      "Service providers: We use providers for hosting, account authentication, database storage, photo storage, payments, and communications. For example, myOTC uses Supabase for backend services, including authentication, databases, and file storage.",
      "We require providers processing personal information on our behalf to protect it consistently with this policy and applicable law, use it for authorized purposes, and apply appropriate confidentiality and security protections.",
      "Travel vendors: We share information reasonably necessary to arrange or fulfill your travel with airlines, hotels, transportation providers, venues, and activity vendors. For example, an airline may require your legal name and date of birth, while a hotel may need names and room assignments.",
      "Travel vendors may act independently in handling information and maintain their own privacy policies and retention requirements.",
      "Other disclosures: We may disclose information when reasonably necessary to comply with law, respond to valid legal requests, investigate fraud, protect rights or safety, or resolve disputes. Information may also be transferred as part of a merger, acquisition, financing, or sale of business assets, subject to applicable privacy protections.",
    ],
  },
  {
    title: "7. Cookies and Website Analytics",
    body: [
      "Our website uses cookies and similar technologies to support functionality, remember preferences, understand website usage, and measure marketing effectiveness.",
      "You can control cookies through your browser settings and any consent controls available on the website. Disabling some cookies may affect functionality.",
      "Website cookies and optional marketing technologies are separate from the information required to sign in to myOTC and provide its account and trip features.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We use reasonable administrative and technical safeguards designed to protect personal information, including access controls and restrictions based on account permissions.",
      "No internet transmission, application, or storage system can be guaranteed completely secure.",
      "You are responsible for protecting your account credentials. Avoid posting sensitive information, payment credentials, or identification documents in group chat or shared photos.",
    ],
  },
  {
    title: "9. Data Retention",
    body: [
      "We retain personal information for as long as reasonably necessary for the purposes described in this policy.",
      "Retention depends on whether your account or trip remains active; whether information is needed to complete a booking or provide support; applicable accounting, tax, contractual, or other legal requirements; refunds, chargebacks, disputes, fraud investigations, or legal claims; and the sensitivity of the information.",
      "Signed agreements, signed waivers, and payment or transaction records may be retained after account deletion where necessary for these purposes. These records may contain names, signatures, or other information recorded at the time of the transaction.",
      "We do not retain information merely because it might be useful indefinitely. Information retained for legal, financial, or dispute-related purposes remains subject to appropriate access restrictions.",
      "Copies may remain temporarily in backups or recovery systems until replaced or expired under the applicable backup process.",
    ],
  },
  {
    title: "10. Account Deletion",
    body: [
      "You can request deletion of your myOTC account through Profile → Delete Account. You can also contact contact@otctrips.com for assistance.",
      "Account deletion removes your login account and associated account information, traveler details, room assignments, and Community messages, uploaded photos, and user-created pins from our active systems, subject to the retention exceptions described above.",
      "Signed agreements, signed waivers, and payment or transaction records may remain where retention is necessary. Removing the account’s connection to a record does not necessarily remove names, signatures, or other information already recorded within that document.",
      "Deleting an account does not automatically cancel a trip reservation, release financial obligations, or create a refund. Booking and cancellation terms continue to apply.",
      "If a main traveler deletes their account, a linked Plus-One’s separate account is not deleted. Their trip association or participation status may change and may require review by OTC or the organizer.",
      "Account deletion cannot remove content another person previously saved outside our services or information held independently by travel vendors or payment processors. Contact those providers regarding their records.",
    ],
  },
  {
    title: "11. Your Choices and Privacy Rights",
    body: [
      "You can update available personal information through your account or contact us for assistance. You can manage device permissions and available notification preferences, unsubscribe from promotional emails, and request account deletion.",
      "Depending on applicable law, you may have additional rights, including access, correction, deletion, receiving a copy of your information, restricting or objecting to certain processing, and withdrawing consent where processing relies on consent.",
      "We may need to verify your identity before fulfilling a request. Some requests may be limited by legal obligations, another person’s rights, or our need to retain records for permitted purposes.",
      "To submit a privacy request, email contact@otctrips.com. Where applicable, you may also have the right to contact your local privacy regulator.",
    ],
  },
  {
    title: "12. International Processing",
    body: [
      "OTC is based in the United States. Our service providers and travel vendors may process information in the United States or other countries.",
      "International travel arrangements may require sharing information with vendors in your destination country. Privacy laws and protections may differ between countries. Where required, we use appropriate safeguards for international transfers.",
    ],
  },
  {
    title: "13. Age Restrictions",
    body: [
      "Our services are intended for adults aged 18 and older.",
      "We do not knowingly allow children under 18 to create myOTC accounts. If you believe a child has provided personal information through our services, contact contact@otctrips.com so we can investigate and take appropriate action.",
    ],
  },
  {
    title: "14. External Services",
    body: [
      "Our services may contain links to third-party websites or applications, including travel vendors, payment processors, and mapping services.",
      "This policy covers OTC’s handling of information. Independent third parties handle information under their own privacy policies.",
    ],
  },
  {
    title: "15. Changes to This Policy",
    body: [
      "We may update this policy as our services or practices change. We will publish the revised policy with an updated date.",
      "Where required by law, we will provide additional notice or obtain consent before applying changes.",
    ],
  },
  {
    title: "16. Contact Us",
    body: [
      "OTC Trips, LLC",
      "For privacy questions, account-deletion assistance, or requests concerning your personal information, email contact@otctrips.com.",
      "Website: https://www.otctrips.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      
      <div className="container-site pt-48 pb-0 text-center">
        <h1 className="font-heading text-4xl font-bold text-brand sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/60">
          Effective / Updated Date: October 21, 2026
        </p>
      </div>

      <section className="container-site py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="text-lg leading-relaxed text-ink/65">
              OTC Trips, LLC (&ldquo;OTC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains
              how we collect, use, share, and protect personal information when you
              visit <strong>otctrips.com</strong>, use the{" "}
              <strong>myOTC mobile application</strong>, request a quote, book travel,
              or otherwise use our services.
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
