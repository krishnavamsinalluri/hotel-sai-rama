import { siteConfig } from "@/data/siteConfig";

export default function JsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": siteConfig.name,
    "description": siteConfig.heroSubheading,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contact.phoneRaw,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.512686,
      "longitude": 80.627581
    },
    "image": [
      `${siteConfig.siteUrl}/images/exterior/hotel-sai-rama-building.webp`,
      `${siteConfig.siteUrl}/images/reception/hotel-sai-rama-reception.webp`,
      `${siteConfig.siteUrl}/images/exterior/hotel-sai-rama-entrance.webp`
    ],
    "checkinTime": "12:00",
    "checkoutTime": "12:00",
    "priceRange": "Contact for rates",
    "paymentAccepted": "Cash, UPI, Debit Card, Credit Card",
    "currenciesAccepted": "INR"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
    />
  );
}
