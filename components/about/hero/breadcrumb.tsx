import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="mb-6 flex items-center gap-2 text-sm text-white/70">
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>

      <ChevronRight size={14} />

      <span className="text-white">About</span>
    </div>
  );
}
