export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappRaw: string;
    email: string;
    receptionHours: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
  siteUrl: string;
  referenceUrl: string;
  gstin: string;
}

export const siteConfig: SiteConfig = {
  name: "Hotel Sai Rama",
  shortName: "Sai Rama",
  tagline: "Comfortable Stay in the Heart of Vijayawada",
  heroHeading: "Comfortable Stay in the Heart of Vijayawada",
  heroSubheading: "Conveniently located beside Apsara Theatre in Governorpet, offering modern AC rooms, clean environment, and 24/7 hospitable service.",
  address: {
    street: "Beside Apsara Theatre",
    landmark: "Governorpet",
    area: "Governorpet",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: "520002",
    fullAddress: "Beside Apsara Theatre, Governorpet, Vijayawada, Andhra Pradesh 520002",
  },
  contact: {
    phoneDisplay: "+91 95051 00627",
    phoneRaw: "+919505100627",
    whatsappDisplay: "+91 95051 00627",
    whatsappRaw: "919505100627",
    email: "info@hotelsairamavizag.com",
    receptionHours: "24 Hours / 7 Days a Week",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.26315802271!2d80.62758117514561!3d16.512686184235207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35effd1adad1d1%3A0x6b10705f1595166f!2sGovernorpet%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Hotel+Sai+Rama+Beside+Apsara+Theatre+Governorpet+Vijayawada",
  },
  siteUrl: "https://hotelsairama.com",
  referenceUrl: "https://www.justdial.com/Vijayawada/Hotel-Sai-Rama-Beside-Apsara-Theatre-Governerpet/0866PX866-X866-181108193906-H4L7_BZDET",
  gstin: "37ADSF54110J1ZR",
};
