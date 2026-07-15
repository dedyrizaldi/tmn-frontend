import AboutPreview from "@/components/home/about-preview/about-preview";
import Hero from "@/components/home/hero/hero";
import { createMetadata } from "@/lib/metadata";
import TrustedClients from "@/components/home/trusted-clients/trusted-clients";
import Services from "@/components/home/services/services";
import Projects from "@/components/home/projects/projects";
import Industries from "@/components/home/industries/industries";
export const metadata = createMetadata(
  "Tank Cleaning Indonesia",
  "PT Tirta Mega Nusantara merupakan perusahaan spesialis Tank Cleaning, Sludge Removal, Tank Washing dan Penanganan Limbah B3 sejak 2007.",
);

export default function HomePage() {
  return (
    <>
      <section className="bg-[#F8FAFC]">
        <Hero />
        <TrustedClients />
        <AboutPreview />
        <Services />
        <Projects />
        <Industries />
      </section>
    </>
  );
}
