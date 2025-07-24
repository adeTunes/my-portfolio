import { projects } from "../constants/project-list";
import ProjectLink from "./project-link";
import Technology from "./technology";
import { Tooltip } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { MdInfoOutline } from "react-icons/md";

function Projects() {
  return (
    <section id="projects" className="py-[15rem] bg-tunes-hero">
      <div className="app-container flex gap-[6rem] flex-col">
        <div className="flex flex-col gap-[1rem]">
          <h3 className="section-heading">PORTFOLIO</h3>
          <h4 className="section-subheading">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        <section className="flex flex-col gap-[5rem]">
          {projects?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg flex items-center max-[800px]:flex-col gap-[8rem] p-[2rem] rounded-[1.7rem]"
            >
              <div className="w-[50%] h-full max-[800px]:w-full rounded-[1.7rem] bg-tunes-project overflow-hidden shadow-lg">
                <a href={item.liveLink} target="_blank">
                  <Image
                    src={item.image}
                    width={530}
                    height={500}
                    alt="project"
                    className="h-auto max-h-[700px] w-full"
                    style={{
                      transition: "transform 10s ease-in-out 0s",
                      objectFit: item.objectFit
                        ? (item.objectFit as any)
                        : undefined,
                    }}
                  />
                </a>
              </div>
              <div className="flex  flex-col max-[800px]:w-full gap-[30px] h-full w-[50%] overflow-auto items-center">
                <div className="flex w-full flex-col gap-5">
                  <h3 className="flex items-center gap-[0.2rem] font-bold text-tunes-heading text-primary">
                    {item.name}
                    {item.info && (
                      <Tooltip label={item.info}>
                        <span className="cursor-pointer hover:text-tunes-link">
                          <MdInfoOutline />
                        </span>
                      </Tooltip>
                    )}
                  </h3>
                  <p className="text-tunes-paragraph text-justify font-medium text-primary">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap w-full px-2 gap-[1rem]">
                    {item.technologies.map((el, id) => (
                      <Technology key={id} tech={el} />
                    ))}
                  </div>
                </div>
                <ProjectLink sourceCode={item.codeLink} live={item.liveLink} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Projects;
