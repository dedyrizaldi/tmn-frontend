"use client";

const applications = [
  "Tank Cleaning",
  "Tank Washing",
  "Sludge Removal",
  "Pumping",
  "Industrial Cleaning",
  "Waste Management",
];

export default function ApplicationFilter() {
  return (
    <div>
      <h3
        className="
          mb-5
          text-sm
          font-bold
          uppercase
          tracking-[0.15em]
        "
      >
        Application
      </h3>

      <div className="space-y-3">
        {applications.map((item) => (
          <label
            key={item}
            className="
              flex
              items-center
              gap-3
              cursor-pointer
            "
          >
            <input
              type="checkbox"
              className="
                h-4
                w-4
                accent-[#156CFF]
              "
            />

            <span className="text-sm text-slate-600">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
