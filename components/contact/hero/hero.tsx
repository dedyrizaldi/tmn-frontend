import Image from "next/image";
import { Clock3, Headset } from "lucide-react";

import Container from "@/components/common/container/container";
import Section from "@/components/common/section/section";

import { Link } from "@/i18n/navigation";

export default function ContactHero() {
  return (
    <Section className="relative overflow-hidden py-0">
      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/images/contact/hero-contact.png"
          alt="Contact Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#04162E]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#04162E] via-[#04162E]/85 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div
          className="
            flex
            min-h-[620px]
            items-center
          "
        >
          <div className="max-w-4xl">
            {/* Breadcrumb */}

            <div
              className="
                mb-8
                flex
                flex-wrap
                items-center
                gap-2
                text-sm
                text-white/70
              "
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>

              <span>/</span>

              <span className="text-white">Contact</span>
            </div>

            {/* Label */}

            <span
              className="
                inline-flex
                rounded-full
                bg-[#156CFF]/20
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#7CC3FF]
              "
            >
              Contact Us
            </span>

            {/* Title */}

            <h1
              className="
                mt-8
                max-w-4xl
                text-5xl
                font-bold
                leading-tight
                text-white
                lg:text-6xl
              "
            >
              Let&apos;s Discuss Your
              <br />
              Industrial Cleaning Project
            </h1>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-slate-200
              "
            >
              Our experienced team is ready to provide consultation,
              professional industrial cleaning solutions, and fast responses
              tailored to your operational needs.
            </p>

            {/* Features */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-10
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#156CFF]/20
                  "
                >
                  <Headset size={26} className="text-[#FFD24A]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Professional Consultation
                  </h3>

                  <p className="text-sm text-slate-300">
                    Expert industrial cleaning solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#156CFF]/20
                  "
                >
                  <Clock3 size={26} className="text-[#FFD24A]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Fast Response</h3>

                  <p className="text-sm text-slate-300">
                    Available to support your inquiries quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
