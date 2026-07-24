import Link from "next/link";

import Container from "@/components/common/container/container";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/10">
      <Container
        className="
          max-w-[1180px]
          px-5
          sm:px-6
          lg:px-0
        "
      >
        <div
          className="
            flex
            flex-col

            items-center

            gap-5

            py-6

            lg:flex-row

            lg:justify-between

            lg:gap-8
          "
        >
          {/* Copyright */}

          <p
            className="
              max-w-[340px]

              text-center

              text-[13px]

              leading-6

              text-slate-400

              lg:max-w-none

              lg:text-left
            "
          >
            © {currentYear}{" "}
            <span className="font-semibold text-white">
              PT Tirta Mega Nusantara
            </span>
            . All Rights Reserved.
          </p>

          {/* Footer Menu */}

          <nav
            className="
              flex

              flex-wrap

              items-center

              justify-center

              gap-x-6

              gap-y-3

              text-[13px]
            "
          >
            {/* <Link
              href="/privacy-policy"
              className="
                text-slate-400

                transition-all

                duration-300

                hover:text-[#156CFF]
              "
            >
              Privacy Policy
            </Link> */}

            {/* <Link
              href="/terms"
              className="
                text-slate-400

                transition-all

                duration-300

                hover:text-[#156CFF]
              "
            >
              Terms & Conditions
            </Link> */}

            <Link
              href="/sitemap"
              className="
                text-slate-400

                transition-all

                duration-300

                hover:text-[#156CFF]
              "
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </Container>
    </div>
  );
}
