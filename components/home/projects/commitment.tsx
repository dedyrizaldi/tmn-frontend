import { ShieldCheck, BadgeCheck, Leaf, ClipboardCheck } from "lucide-react";

import { commitments } from "./commitment.data";
import IsoCard from "./iso-card";
import { certifications } from "./iso.data";

const icons = {
  shield: ShieldCheck,
  award: BadgeCheck,
  leaf: Leaf,
  clipboard: ClipboardCheck,
};

export default function Commitment() {
  return (
    <div className="relative h-full overflow-hidden">
      {/* Background */}
      <div className="absolute -right-16 top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute -right-8 top-1/2 h-[150px] w-[150px] -translate-y-1/2 rounded-full border border-white/5" />

      <div className="relative z-10">
        {/* Heading */}
        <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#1F7BFF]">
          OUR COMMITMENT
        </p>

        <h2 className="mt-1 text-[22px] font-bold leading-tight text-white">
          Safety . Quality . Environment.
        </h2>

        {/* Grid */}
        <div className="mt-4 grid grid-cols-2 border-l border-t border-white/10">
          {commitments.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.title}
                className="border-r border-b border-white/10 p-3"
              >
                <Icon size={16} className="mb-2 text-[#1F7BFF]" />

                <h4 className="text-[12px] font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-[10px] leading-4 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ISO */}
        {/* <div className="mt-3 grid grid-cols-4 gap-1.5">
          {certifications.map((item) => (
            <IsoCard key={item} title={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
