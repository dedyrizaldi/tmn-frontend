import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import Container from "@/components/common/container/container";

import { contactData } from "../contact.data";

export default function ContactInfo() {
  return (
    <Container className="h-full">
      <div
        className="
          h-full
          rounded-[30px]
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
          lg:p-10
        "
      >
        {/* Heading */}

        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#156CFF]
          "
        >
          Get In Touch
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Contact Information
        </h2>

        <p
          className="
            mt-4
            text-[15px]
            leading-7
            text-slate-500
          "
        >
          We&apos;d love to hear about your project. Contact us using any of the
          information below.
        </p>

        {/* Contact Items */}

        <div className="mt-10 space-y-8">
          {/* Phone */}

          <div className="flex items-start gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#156CFF]/10
              "
            >
              <Phone className="text-[#156CFF]" size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-[#04162E]">Phone</h3>

              <p className="mt-2 text-slate-600">{contactData.info.phone}</p>
            </div>
          </div>

          {/* Email */}

          <div className="flex items-start gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#156CFF]/10
              "
            >
              <Mail className="text-[#156CFF]" size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-[#04162E]">Email</h3>

              <p className="mt-2 text-slate-600">{contactData.info.email}</p>
            </div>
          </div>

          {/* Address */}

          <div className="flex items-start gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#156CFF]/10
              "
            >
              <MapPin className="text-[#156CFF]" size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-[#04162E]">Office Address</h3>

              <p
                className="
                  mt-2
                  whitespace-pre-line
                  leading-7
                  text-slate-600
                "
              >
                {contactData.info.address}
              </p>
            </div>
          </div>

          {/* Working Hours */}

          <div className="flex items-start gap-5">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#156CFF]/10
              "
            >
              <Clock3 className="text-[#156CFF]" size={24} />
            </div>

            <div>
              <h3 className="font-semibold text-[#04162E]">Working Hours</h3>

              <p className="mt-2 text-slate-600">
                {contactData.info.officeHours}
              </p>
            </div>
          </div>
        </div>

        {/* Social */}

        <div className="mt-12 border-t border-slate-200 pt-8">
          <h3
            className="
              text-lg
              font-semibold
              text-[#04162E]
            "
          >
            Follow Us
          </h3>

          <div className="mt-5 flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-600
                transition-all
                duration-300
                hover:border-[#156CFF]
                hover:bg-[#156CFF]
                hover:text-white
              "
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-600
                transition-all
                duration-300
                hover:border-[#156CFF]
                hover:bg-[#156CFF]
                hover:text-white
              "
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-600
                transition-all
                duration-300
                hover:border-[#156CFF]
                hover:bg-[#156CFF]
                hover:text-white
              "
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                text-slate-600
                transition-all
                duration-300
                hover:border-[#156CFF]
                hover:bg-[#156CFF]
                hover:text-white
              "
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
