type Props = {
  badge?: string;

  title: string;

  description?: string;

  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold leading-tight">{title}</h2>

      {description && <p className="mt-4 text-slate-600">{description}</p>}
    </div>
  );
}
