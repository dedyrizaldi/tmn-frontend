export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  officeHours: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactData {
  info: ContactInfo;

  social: SocialLink[];

  faq: FAQ[];

  googleMap: string;
}
