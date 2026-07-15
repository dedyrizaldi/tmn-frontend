"use client";

export default function StatusFilter() {
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
        Availability
      </h3>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="status"
            defaultChecked
            className="accent-[#156CFF]"
          />

          <span className="text-sm text-slate-600">All Equipment</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="status" className="accent-[#156CFF]" />

          <span className="text-sm text-slate-600">Ready</span>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="status" className="accent-[#156CFF]" />

          <span className="text-sm text-slate-600">Maintenance</span>
        </label>
      </div>
    </div>
  );
}
