import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, ZOMATO_URL, SOCIAL_LINKS } from "@/constants/site";
import { CONTACT_PHONE, CONTACT_EMAIL } from "@/constants/contact";
import { faqs } from "@/constants/faq";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    servesCuisine: ["Indian", "Biryani", "Mughlai", "Hyderabadi"],
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Building No 439, 1st Floor, Aghapur, Sector 41, Near HP Petrol Pump",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201303",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5667,
      longitude: 77.35,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.facebook,
      ZOMATO_URL,
    ],
    hasMenu: ZOMATO_URL,
    acceptsReservations: false,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#restaurant` },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={websiteSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
    </>
  );
}
