const timeline = [
  {
    year: "2007",
    title: "Established",
    subtitle: "Company Founded",
  },
  {
    year: "Growing",
    title: "Nationwide",
    subtitle: "Industrial Services",
  },
  {
    year: "Today",
    title: "Trusted Partner",
    subtitle: "Across Indonesia",
  },
];

export default function AboutTimeline() {
  return (
    <div className="hidden lg:flex justify-center">
      <div className="relative pl-8">
        {/* Vertical Line */}
        <div
          className="
            absolute
            left-[8px]
            top-2
            bottom-2
            w-px
            bg-slate-200
          "
        />

        <div className="space-y-10">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              {/* Dot */}
              <div
                className="
                  absolute
                  left-[-24px]
                  top-[8px]

                  h-4
                  w-4

                  rounded-full

                  border-[3px]
                  border-[#156CFF]

                  bg-white
                "
              />

              <h4 className="text-[18px] font-bold text-slate-900">
                {item.year}
              </h4>

              <p className="mt-1 text-[14px] font-semibold text-slate-700">
                {item.title}
              </p>

              <p className="mt-1 text-[13px] leading-6 text-slate-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
