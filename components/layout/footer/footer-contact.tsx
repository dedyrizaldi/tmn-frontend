import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">Contact</h3>

      <div className="space-y-4">
        <div className="flex gap-3">
          <MapPin size={18} className="mt-1 text-[#156CFF]" />

          <p className="text-[14px] leading-6 text-slate-300">
            Jl. Raya Merak No. 123
            <br />
            Cilegon, Banten
            <br />
            Indonesia
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-[#156CFF]" />

          <span className="text-[14px] text-slate-300">+62 812-3456-7890</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-[#156CFF]" />

          <span className="text-[14px] text-slate-300">info@tmn.co.id</span>
        </div>
      </div>
    </div>
  );
}
