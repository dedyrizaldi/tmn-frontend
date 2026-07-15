"use client";

const categories = [
  "Vacuum Truck",
  "Water Jet",
  "Pumping",
  "Blower",
  "Waste Handling",
  "Support Equipment",
];

export default function CategoryFilter() {
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
        Category
      </h3>

      <div className="space-y-3">
        {categories.map((item) => (
          <label
            key={item}
            className="
              flex

              cursor-pointer

              items-center

              gap-3
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

            <span
              className="
                text-sm

                text-slate-600
              "
            >
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
