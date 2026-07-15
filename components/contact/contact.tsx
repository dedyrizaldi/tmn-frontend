import ContactCTA from "./cta/contact-cta";
import ContactFAQ from "./faq/faq";
import ContactForm from "./form/contact-form";
import ContactHero from "./hero/hero";
import ContactInfo from "./info/contact-info";
import OfficeMap from "./map/office-map";

export default function Contact() {
  return (
    <>
      {/* Hero */}

      <ContactHero />

      {/* Contact Section */}

      <section
        className="
          bg-[#F8FAFC]
          py-20
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            lg:px-8
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[420px_1fr]
            "
          >
            {/* Left */}

            <ContactInfo />

            {/* Right */}

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}

      <OfficeMap />

      {/* FAQ */}

      <ContactFAQ />

      {/* CTA */}

      <ContactCTA />
    </>
  );
}
