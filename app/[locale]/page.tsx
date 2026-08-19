import AboutPreview from "@/components/home/about-preview/about-preview";
import Hero from "@/components/home/hero/hero";
import Industries from "@/components/home/industries/industries";
import Projects from "@/components/home/projects/projects";
import Services from "@/components/home/services/services";
import TrustedClients from "@/components/home/trusted-clients/trusted-clients";
import WelcomeModal from "@/components/home/welcome-modal/welcome-modal";
import { createMetadata } from "@/lib/metadata";

import { getHome } from "@/services/home.service";

export const metadata = createMetadata(
  "Tank Cleaning Indonesia",
  "PT Tirta Mega Nusantara merupakan perusahaan spesialis Tank Cleaning, Sludge Removal, Tank Washing dan Penanganan Limbah B3 sejak 2007.",
);

export default async function HomePage() {
  const home = await getHome();

  return (
    <section className="bg-[#F8FAFC]">
      <WelcomeModal />

      <Hero />

      <TrustedClients />

      <AboutPreview />

      <Services />

      <Projects projects={home.featured_projects} />

      <Industries />
    </section>
  );
}
