import { useState } from "react";
import Link from "next/link";
import Project from "../sample/projects.json";

const ProyectComponent = () => {
  const [optionProject, setOptionProject] = useState(0);
  const renderProject = () => {
    if (optionProject == 0) {
      return <p>Seleccione un proyecto</p>;
    }
    if (optionProject != 0) {
      const data = Project.filter(({ id }) => id == optionProject);
      return (
        <>
          {data.map(({ id, projectName, projectDescription, tags, link }) => (
            <div key={id}>
              <h2 className="text-[#C0C0C0] text-base lg:text-3xl sm:text-xl font-bold mb-10">
                {projectName}
              </h2>
              <p className="text-justify text-sm lg:text-xl sm:text-base ml-5">
                {projectDescription}
              </p>
              {/*TAGS*/}
              <div className="w-[100%] lg:w-[50%] mt-10 ml-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {tags.map((index) => (
                  <p
                    key={index}
                    className="text-[#C0C0C0] text-xs lg:text-sm bg-[#1E1E1E] border-[#333333] border text-center p-1 cursor-pointer"
                  >
                    {index}
                  </p>
                ))}
              </div>
              {/*Link*/}
              <div className="w-[100%] mt-10 ml-5">
                <Link
                  href={link}
                  target="_blank"
                  className="inline-block bg-gray-700 hover:bg-gray-800 text-gray-400 hover:text-gray-300 font-bold px-5 py-2 rounded-full transition-all duration-300 ease-in-out"
                >
                  Visitar sitio
                </Link>
              </div>
            </div>
          ))}
        </>
      );
    }
  };
  return (
    <section className="w-[100%] py-2 px-10 mt-14">
      <h3 className="text-[#C0C0C0] text-2xl font-semibold underline">
        Mis Proyectos
      </h3>
      <div className="w-[100%] flex flex-col lg:flex-row items-center gap-10 mt-5 p-2">
        <div className="w-[100%] sm:w-[30%] flex flex-col items-center">
          {Project.map(({ projectName, id }) => (
            <button
              key={id}
              className="text-white text-xs sm:text-base hover:text-gray-600 hover:underline transition-all duration-300 ease-linear mb-5"
              onClick={() => setOptionProject(id)}
            >
              {projectName}
            </button>
          ))}
        </div>
        <div className="w-[5%] hidden lg:block">
          <div className="h-96 border-l border-[#333333]"></div>
        </div>
        <div className="w-[100%]">{renderProject()}</div>
      </div>
    </section>
  );
};

export default ProyectComponent;
