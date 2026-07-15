import Services from "@/components/services/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Services",
  "Professional Industrial Cleaning Services by PT Tirta Mega Nusantara.",
);

export default function ServicesPage() {
  return <Services />;
}
