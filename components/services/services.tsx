import Hero from "./hero/hero";
// import Overview from "./overview/overview";
import DetailServices from "./detail-services/detail-services";
import Process from "./process/process";
import Industries from "./industries/industries";
import FAQ from "./faq/faq";

export default function Services() {
  return (
    <>
      <Hero />
      {/* <Overview /> */}
      <DetailServices />
      <Process />
      <Industries />
      <FAQ />
    </>
  );
}
