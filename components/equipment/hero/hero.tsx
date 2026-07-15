import Container from "@/components/common/container/container";

import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";

export default function EquipmentHero() {
  return (
    <section
      className="
           relative
           overflow-hidden
         "
    >
      <div
        className="
             relative
   
             h-[460px]
   
             lg:h-[460px]
       
           "
      >
        {/* Background */}

        <HeroBackground />

        {/* Overlay */}

        <div
          className="
               absolute
               inset-0
   
               bg-gradient-to-r
   
               from-[#04162E]
   
               via-[#04162E]/85
   
               to-[#04162E]/20
             "
        />

        {/* Content */}

        <Container
          className="
               relative
   
               z-20
   
               flex
   
               h-full
   
               items-center
   
               px-5
   
               sm:px-6
   
               lg:px-0
             "
        >
          <HeroContent />
        </Container>
      </div>
    </section>
  );
}
