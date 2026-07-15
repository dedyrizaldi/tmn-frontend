interface Props {
  title: string;
}

export default function Certification({ title }: Props) {
  return (
    <div
      className="
rounded-2xl
border
border-blue-100
bg-blue-50
px-6
py-4
font-bold
text-[#0066D9]
text-center
"
    >
      {title}
    </div>
  );
}
