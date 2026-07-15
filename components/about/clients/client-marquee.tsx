"use client";

import Image from "next/image";

interface Props {
  logos: string[];
}

export default function ClientMarquee({ logos }: Props) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              mx-10
              flex
              h-20
              w-36
              items-center
              justify-center
            "
          >
            <Image
              src={logo}
              alt="Client"
              width={120}
              height={60}
              className="
                h-auto
                w-auto
                max-h-12
                grayscale
                opacity-70
                transition-all
                duration-300
                hover:grayscale-0
                hover:opacity-100
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
