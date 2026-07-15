"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    // TODO:
    // API Email
    // Resend
    // Laravel
    // NodeJS

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  return (
    <div
      className="
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
        Send Message
      </span>

      <h2
        className="
          mt-4
          text-3xl
          font-bold
          text-[#04162E]
        "
      >
        Request a Consultation
      </h2>

      <p
        className="
          mt-4
          text-[15px]
          leading-7
          text-slate-500
        "
      >
        Fill in the form below and our team will contact you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        {/* Row 1 */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <input
              required
              type="text"
              placeholder="John Doe"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-300
                px-5
                outline-none
                transition
                focus:border-[#156CFF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Company</label>

            <input
              type="text"
              placeholder="Company Name"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-300
                px-5
                outline-none
                transition
                focus:border-[#156CFF]
              "
            />
          </div>
        </div>

        {/* Row 2 */}

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              required
              type="email"
              placeholder="example@email.com"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-300
                px-5
                outline-none
                transition
                focus:border-[#156CFF]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              required
              type="text"
              placeholder="+62"
              className="
                h-14
                w-full
                rounded-xl
                border
                border-slate-300
                px-5
                outline-none
                transition
                focus:border-[#156CFF]
              "
            />
          </div>
        </div>

        {/* Service */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Service Interest
          </label>

          <select
            className="
              h-14
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-5
              outline-none
              transition
              focus:border-[#156CFF]
            "
          >
            <option>Tank Cleaning</option>
            <option>Industrial Cleaning</option>
            <option>Vacuum Truck</option>
            <option>Hydro Jetting</option>
            <option>Waste Management</option>
            <option>General Inquiry</option>
          </select>
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-medium">Message</label>

          <textarea
            rows={7}
            placeholder="Tell us about your project..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              p-5
              outline-none
              transition
              focus:border-[#156CFF]
            "
          />
        </div>

        {/* Button */}

        <Button
          disabled={loading}
          className="
            h-14
            w-full
            rounded-xl
            text-base
            font-semibold
          "
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
}
