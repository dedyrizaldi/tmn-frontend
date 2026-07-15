import { processSteps } from "./process.data";

export default function ProcessMobile() {
  return (
    <div className="relative pl-8">
      {/* Vertical Line */}

      <div
        className="
          absolute
          left-[19px]
          top-0
          bottom-0
          w-[2px]
          bg-slate-200
        "
      />

      <div className="space-y-8">
        {processSteps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Circle */}

            <div
              className="
                absolute
                -left-8
                top-0

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-[#156CFF]

                text-sm
                font-bold
                text-white

                shadow-lg
              "
            >
              {step.number}
            </div>

            {/* Card */}

            <div
              className="
                rounded-2xl

                border

                border-slate-200

                bg-white

                p-6

                shadow-sm
              "
            >
              <h3
                className="
                  text-lg

                  font-bold

                  text-[#04162E]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-3

                  text-[15px]

                  leading-7

                  text-slate-600
                "
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
