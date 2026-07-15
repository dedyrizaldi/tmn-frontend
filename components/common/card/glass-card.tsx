import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
