import type { ContactData } from "./types/contact";

export const contactData: ContactData = {
  info: {
    phone: "+62 21 1234 5678",
    email: "info@tmn.co.id",
    whatsapp: "+62 812 3456 7890",

    address: `Jl. Industri Raya No.10
Kawasan Industri Cakung
Jakarta Timur 13910
Indonesia`,

    officeHours: "Monday - Friday • 08:00 - 17:00 WIB",
  },

  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
    },
  ],

  faq: [
    {
      question: "How long does a tank cleaning project usually take?",
      answer:
        "The duration depends on the tank size, contamination level, and site conditions. Most projects are completed within several days to two weeks.",
    },

    {
      question: "Do you provide emergency industrial cleaning services?",
      answer:
        "Yes. Our team is available for emergency response and urgent industrial cleaning operations depending on project location and availability.",
    },

    {
      question: "Which industries do you serve?",
      answer:
        "We serve oil & gas, petrochemical, marine, mining, manufacturing, power plants, logistics, and various industrial sectors.",
    },

    {
      question: "Can you handle hazardous waste?",
      answer:
        "Yes. We follow all applicable environmental regulations and safety procedures when handling hazardous industrial waste.",
    },

    {
      question: "Do you provide nationwide services?",
      answer:
        "Yes. Our operational team can mobilize across Indonesia depending on project requirements.",
    },
  ],

  googleMap:
    "https://www.google.com/maps?q=PT+Trans+Mandiri+Nusantara&output=embed",
};
