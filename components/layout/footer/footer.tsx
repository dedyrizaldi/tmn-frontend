import Container from "@/components/common/container/container";

import FooterBottom from "./footer-bottom";
import FooterBrand from "./footer-brand";
import FooterContact from "./footer-contact";
import FooterLinks from "./footer-links";
import FooterServices from "./footer-services";

export default function Footer() {
  return (
    <footer className="bg-[#04162E] text-white">
      <Container
        className="
          max-w-[1180px]
          px-5
          sm:px-6
          lg:px-0
        "
      >
        {/* ================= Desktop ================= */}

        <div
          className="
            hidden

            lg:grid
            lg:grid-cols-12
            lg:gap-10
            lg:py-14
          "
        >
          {/* Brand */}

          <div className="lg:col-span-4">
            <FooterBrand />
          </div>

          {/* Links */}

          <div className="lg:col-span-2">
            <FooterLinks />
          </div>

          {/* Services */}

          <div className="lg:col-span-3">
            <FooterServices />
          </div>

          {/* Contact */}

          <div className="lg:col-span-3">
            <FooterContact />
          </div>
        </div>

        {/* ================= Mobile ================= */}

        <div
          className="
            space-y-10
            py-10

            lg:hidden
          "
        >
          <FooterBrand />

          <div
            className="
              grid
              grid-cols-2
              gap-8
            "
          >
            <FooterLinks />

            <FooterServices />
          </div>

          <FooterContact />
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
}
