import {
  BriefcaseBusiness,
  CalendarClock,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: CalendarClock,
    value: "19+",
    title: "Years Experience",
  },
  {
    icon: BriefcaseBusiness,
    value: "150+",
    title: "Projects Completed",
  },
  {
    icon: ShieldCheck,
    value: "Zero",
    title: "Accident Commitment",
  },
  {
    icon: Users,
    value: "50+",
    title: "Professional Team",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-lg
      "
    >
      {/* Mobile scroll - Desktop normal */}
      <div
        className="
          overflow-x-auto
          lg:overflow-visible
          scrollbar-hide
        "
      >
        <div
          className="
            grid
            min-w-[680px]
            grid-cols-4

            lg:min-w-0
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  relative
                  flex
                  items-center

                  gap-3

                  px-4
                  py-4

                  lg:gap-3
                  lg:px-6
                  lg:py-5
                "
              >
                {/* Divider */}

                {index !== stats.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-10
                      w-px
                      -translate-y-1/2
                      bg-slate-200
                      lg:block
                    "
                  />
                )}

                {/* Icon */}

                <div
                  className="
                    flex

                    h-10
                    w-10

                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0D6EFD]
                    text-white

                    lg:h-11
                    lg:w-11
                  "
                >
                  <Icon size={16} strokeWidth={2.2} />
                </div>

                {/* Text */}

                <div>
                  <h3
                    className="
                      text-[24px]
                      font-black
                      leading-none
                      text-[#0F172A]

                      lg:text-[30px]
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      leading-4
                      text-slate-500

                      lg:text-[12px]
                    "
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
