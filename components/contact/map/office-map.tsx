import { ExternalLink, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

import { contactData } from "../contact.data";

export default function OfficeMap() {
  return (
    <section
      className="
        bg-white
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
        {/* Heading */}

        <div className="text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#156CFF]
            "
          >
            Visit Our Office
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-[#04162E]
            "
          >
            Find Us Easily
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-500
            "
          >
            Our office is strategically located and easy to reach. We welcome
            clients and partners for consultations, project discussions, and
            business meetings.
          </p>
        </div>

        {/* Map */}

        <div className="relative mt-16">
          {/* Floating Card */}

          <div
            className="
              absolute
              left-8
              top-8
              z-20
              hidden
              w-[360px]
              rounded-[24px]
              bg-white
              p-8
              shadow-2xl
              lg:block
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#156CFF]/10
              "
            >
              <MapPin className="text-[#156CFF]" size={26} />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-[#04162E]
              "
            >
              Head Office
            </h3>

            <p
              className="
                mt-4
                whitespace-pre-line
                leading-8
                text-slate-500
              "
            >
              {contactData.info.address}
            </p>

            <Button
              asChild
              className="
                mt-8
                h-12
                rounded-xl
                px-6
              "
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Google Maps
                <ExternalLink size={18} className="ml-2" />
              </a>
            </Button>
          </div>

          {/* Google Map */}

          <div
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              shadow-xl
            "
          >
            <iframe
              src={contactData.googleMap}
              width="100%"
              height="600"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
