"use client";

import { useState } from "react";

import { contactData } from "../contact.data";

import FAQItem from "./faq-item";

export default function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
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
          max-w-5xl
          px-5
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
            FAQ
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-[#04162E]
            "
          >
            Frequently Asked Questions
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
            Find answers to the most common questions regarding our industrial
            cleaning services.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">
          {contactData.faq.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={active === index}
              onClick={() => setActive(active === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
