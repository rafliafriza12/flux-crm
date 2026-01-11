"use client";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "@/config";
import Container from "@/components/atoms/container/Container";
import {
  BodyLargeMedium,
  BodyMediumRegular,
  BodySmallMedium,
  Heading1,
  Heading4,
} from "@/components/atoms";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <div className="w-full">
          <div className="mb-14 text-center">
            <BodyLargeMedium className="inline-block mb-4 text-primary">
              PROJECTS
            </BodyLargeMedium>
            <Heading1 className="text-foreground">
              Our Creative Digital Projects
            </Heading1>
            <BodyMediumRegular className="mx-auto mt-4 max-w-2xl text-foreground">
              Every project we work on is an opportunity to demonstrate our
              dedication to creating creative solutions that meet clients’
              business needs.
            </BodyMediumRegular>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {projectsData.map((project, index) => {
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group  overflow-hidden transition-all duration-300 ease-out
                    
                   `}
                >
                  <div className="relative flex justify-center mb-6 overflow-hidden ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={100}
                      className="aspect-video object-cover  w-auto transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="">
                    <BodySmallMedium className="uppercase text-primary">
                      02 January 2026
                    </BodySmallMedium>
                    <Heading4
                      className={`mt-2 text-foreground line-clamp-1 uppercase`}
                    >
                      {project.title}
                    </Heading4>

                    <BodyMediumRegular
                      className={`mt-2 text-foreground line-clamp-2 `}
                    >
                      {project.description}
                    </BodyMediumRegular>

                    <button
                      className={`mt-6 inline-flex items-center gap-2 text-sm transition-all duration-300
                      `}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectsSection;
