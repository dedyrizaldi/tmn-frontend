import Image from "next/image";

interface Props {
  client: {
    name: string;
    logo: string;
  };
}

export default function TrustedClientsItem({ client }: Props) {
  return (
    <div
      className="
        flex
        h-20
        w-full
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-105
        sm:h-24
        md:h-28
      "
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={320}
        height={85}
        className="
          h-[52px]
          w-auto
          max-w-[90%]
          object-contain
          mix-blend-multiply
          sm:h-[60px]
          md:h-[68px]
        "
      />
    </div>
  );
}
