interface Props {
  children: React.ReactNode;
}

export default function SectionBadge({ children }: Props) {
  return (
    <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
      {children}
    </span>
  );
}
