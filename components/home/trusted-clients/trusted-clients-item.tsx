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
        h-16
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={170}
        height={60}
        className="
          h-[42px]
          w-auto
          object-contain
        "
      />
    </div>
  );
}
