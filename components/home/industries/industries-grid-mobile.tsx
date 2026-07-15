import { industries } from "./industries.data";
import IndustryCard from "./industry-card";

export default function IndustriesGridMobile() {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4
      "
    >
      {industries.map((item) => (
        <IndustryCard key={item.title} {...item} mobile />
      ))}
    </div>
  );
}
