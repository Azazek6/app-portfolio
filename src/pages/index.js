import React from "react";
import Image from "next/image";
import LayoutComponent from "@/components/LayoutComponent";
import ProyectComponent from "@/components/ProyectComponent";

const Index = () => {
  return (
    <LayoutComponent>
      <section className="w-[100%] flex flex-col-reverse lg:flex-row items-center gap-5 mt-14">
        <div className="w-[100%] py-2 px-10">
          <h2 className="text-[#C0C0C0] text-4xl mb-6 text-center lg:text-left sm:text-8xl">
            Bienvenidos.
          </h2>
          <p className="text-justify text-xs ml-2 sm:text-base">
            Egresado de Ingeniería de Sistemas, mi perfil se destaca por un
            firme compromiso con el aprendizaje continuo y el desarrollo
            profesional. Mi naturaleza autodidacta me ha permitido abordar con
            agilidad diversos retos, tanto en el ámbito tecnológico como en mi
            vida personal. Cuento con un sólido conocimiento en tecnologías
            fundamentales como MySQL, MongoDB, JavaScript y PHP.
          </p>
          <p className="text-justify text-xs ml-2 sm:text-base mt-7">
            Mi enfoque responsable y orientado a metas, junto a mi habilidad de
            adaptación, me distinguen y busco aplicar y fortalecer estas
            capacidades en entornos que demanden soluciones creativas y
            competencias tecnológicas sólidas.
          </p>
        </div>
        <div className="w-[5%] hidden lg:block">
          <div className="h-96 border-l border-[#333333]"></div>
        </div>
        <div className="w-[60%] flex justify-center">
          <Image
            src="/cv_profile.jpg"
            width={300}
            height={100}
            alt="profile"
            className="rounded-full"
          />
        </div>
      </section>
      <ProyectComponent />
    </LayoutComponent>
  );
};

export default Index;
