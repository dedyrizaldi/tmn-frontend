import { industries } from "./industries.data";
import IndustryCard from "./industry-card";

export default function IndustriesGrid() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {industries.map((item) => (
        <IndustryCard key={item.title} {...item} />
      ))}
    </div>
  );
}
