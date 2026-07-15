import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface Props {
  service: {
    title: string;
    gallery?: string[];
  };
}

export default function ServiceModalGallery({ service }: Props) {
  if (!service.gallery || service.gallery.length === 0) {
    return null;
  }

  return (
    <section
      className="
        border-b
        border-slate-200
        bg-white
        p-8
        lg:p-10
      "
    >
      {/* Heading */}

      <div className="text-center">
        <span
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#156CFF]
          "
        >
          GALLERY
        </span>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-[#04162E]
          "
        >
          Dokumentasi Pekerjaan
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-3xl
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          Beberapa dokumentasi pekerjaan yang telah kami selesaikan dengan
          standar keselamatan tinggi dan kualitas terbaik.
        </p>
      </div>

      {/* Gallery */}

      <div
        className="
          mt-12
          grid
          grid-cols-2
          gap-5
          md:grid-cols-3
          xl:grid-cols-4
        "
      >
        {service.gallery.map((image, index) => (
          <div
            key={index}
            className="
              group
              relative
              aspect-square
              overflow-hidden
              rounded-2xl
              cursor-pointer
              bg-slate-100
            "
          >
            <Image
              src={image}
              alt={`${service.title} ${index + 1}`}
              fill
              sizes="(max-width:768px) 50vw,
                     (max-width:1200px) 33vw,
                     25vw"
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-[#04162E]/0
                transition-all
                duration-300
                group-hover:bg-[#04162E]/60
              "
            >
              <ImageIcon
                size={34}
                className="
                  scale-75
                  text-white
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
