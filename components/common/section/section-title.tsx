interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={
        center ? "mx-auto mb-14 max-w-3xl text-center" : "mb-14 max-w-3xl"
      }
    >
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {badge}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}
