import AboutHero from "@/components/about/hero/about-hero";
import AboutPreview from "@/components/about/who-we-are/about-preview";
import Values from "@/components/about/values/values";
import Timeline from "@/components/about/timeline/timeline";
import TrustedClients from "@/components/about/clients/trusted-clients";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPreview />
      <Values />
      <Timeline />
      <TrustedClients />
    </>
  );
}
