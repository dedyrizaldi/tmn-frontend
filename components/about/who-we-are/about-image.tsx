import Image from "next/image";

export default function AboutImage() {
  return (
    <div
      className="
        relative

        aspect-[4/3]

        w-full

        overflow-hidden

        rounded-2xl

        shadow-xl

        sm:aspect-[16/10]

        lg:h-[460px]

        lg:aspect-auto

        lg:rounded-[26px]

        lg:shadow-2xl
      "
    >
      <Image
        src="/logo/logo-icon.png"
        alt="TMN Worker"
        fill
        sizes="(max-width:1024px) 100vw, 50vw"
        className="
          object-cover

          transition-transform

          duration-700

          hover:scale-105
        "
      />
    </div>
  );
}
