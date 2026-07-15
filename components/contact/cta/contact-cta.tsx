import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/common/container/container";

import { Link } from "@/i18n/navigation";

export default function ContactCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
      "
    >
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/contact/hero-contact.png"
          alt="Contact CTA"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/80 to-[#156CFF]/60" />
      </div>

      <Container className="relative z-10">
        <div
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >
          {/* Label */}

          <span
            className="
              inline-flex
              rounded-full
              bg-[#156CFF]/20
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#8FC0FF]
            "
          >
            Ready To Start?
          </span>

          {/* Title */}

          <h2
            className="
              mt-8
              text-5xl
              font-bold
              leading-tight
              text-white
              lg:text-6xl
            "
          >
            Let&apos;s Build A Safer
            <br />
            Industrial Environment Together
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Contact our professional team today to discuss your industrial
            cleaning, waste management, or maintenance requirements. We are
            ready to provide the best solution for your business.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              gap-5
            "
          >
            <Button
              asChild
              size="lg"
              className="
                h-14
                rounded-xl
                px-8
              "
            >
              <Link href="/quote">
                Request a Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                h-14
                rounded-xl
                border-white
                bg-transparent
                px-8
                text-white

                hover:bg-white
                hover:text-[#04162E]
              "
            >
              <a href="tel:+622112345678">
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Stats */}

          <div
            className="
              mt-20
              grid
              gap-10
              text-center
              sm:grid-cols-3
            "
          >
            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#FFD24A]
                "
              >
                150+
              </h3>

              <p
                className="
                  mt-3
                  text-slate-300
                "
              >
                Projects Completed
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#FFD24A]
                "
              >
                10+
              </h3>

              <p
                className="
                  mt-3
                  text-slate-300
                "
              >
                Years Experience
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#FFD24A]
                "
              >
                24/7
              </h3>

              <p
                className="
                  mt-3
                  text-slate-300
                "
              >
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
