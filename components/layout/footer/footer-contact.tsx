import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">Contact</h3>

      <div className="space-y-4">
        <div className="flex gap-3">
          <MapPin size={18} className="mt-1 text-[#156CFF]" />

          <p className="text-[14px] text-slate-300">
            <b>Head Office & Workshop</b>
            <br />
            Green Sedayu Bizpark Cakung Blok GS 17/25
            <br />
            JL Cakung Cilincing Timur- Raya KM 2
            <br />
          </p>
        </div>

        <div className="flex gap-3">
          <MapPin size={18} className="mt-1 text-[#156CFF]" />

          <p className="text-[14px] text-slate-300">
            <b>Operational Office</b>
            <br />
            JL. Sunter II NO 6A Komplek Deperla
            <br />
            Jakarta Utara 14230
            <br />
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-[#156CFF]" />

          <span className="text-[14px] text-slate-300">021-2945-231</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-[#156CFF]" />

          <span className="text-[14px] text-slate-300">
            tirtameganusantara@tmn.co.id
          </span>
        </div>
      </div>
    </div>
  );
}
