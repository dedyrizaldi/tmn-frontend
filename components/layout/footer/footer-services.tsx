const services = [
  "Tank Cleaning",
  "Tank Washing",
  "Sludge Removal",
  "Industrial Cleaning",
  "Waste Management",
];

export default function FooterServices() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">Services</h3>

      <ul className="space-y-3">
        {services.map((item) => (
          <li key={item} className="text-[14px] text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
