import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src="/images/about.jpg"
        alt="Tank Cleaning"
        width={700}
        height={800}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
