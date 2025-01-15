// React
import React, { useEffect, useState } from "react";

// Style & CSS
import { TiArrowForward } from "react-icons/ti";
import AnimatedImage from "../components/AnimatedImg";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Haus Design Culture",
      folder_name: new URL(
        `../assets/images/projects/HausDesignCulture/Thumbnail.png`,
        import.meta.url
      ).href,
      category: "Website",
      year: "",
    },
    {
      id: 2,
      name: "CA Renovations",
      folder_name: new URL(
        `../assets/images/projects/CARenovation/Thumbnail.png`,
        import.meta.url
      ).href,
      category: "Website",
    },
    {
      id: 3,
      name: "Caroline Style",
      folder_name: new URL(
        `../assets/images/projects/CarolineStyle/Thumbnail.png`,
        import.meta.url
      ).href,
      category: "Website",
    },
    // {
    //   id: 4,
    //   name: "Termi",
    //   folder_name: "CARenovation",
    //   category: "Website",
    // },
    // {
    //   id: 5,
    //   name: "Caroline Style",
    //   folder_name: "CARenovation",
    // },
    // {
    //   id: 6,
    //   name: "Caroline Style",
    //   folder_name: "CARenovation",
    // },
    // {
    //   id: 7,
    //   name: "Caroline Style",
    //   folder_name: "CARenovation",
    // },
    // {
    //   id: 8,
    //   name: "Caroline Style",
    //   folder_name: "CARenovation",
    // },
  ];

  return (
    <div className="pt-24 h-svh">
      <h1 className="text-text-0 text-5xl text-center lg:text-8xl">Projects</h1>
      <div className="pt-10 grid grid-cols-1 mx-16 gap-10 h-3/4 lg:grid-cols-2">
        <div className="flex flex-col overflow-hidden gap-1">
          <h5 className="text-text-100 text-lg text-right">
            {projects.length} Projects
          </h5>
          <div className="overflow-y-scroll">
            {/* Selector */}
            {projects.map((project) => (
              <div key={project.id}>
                <hr />
                <div
                  className="group text-text-100 text-2xl pt-10 cursor-pointer transition-all lg:text-4xl hover:text-text-0 hover:py-16"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex flex-row gap-3">
                    <TiArrowForward className="collapse group-[:hover]:visible" />
                    <span>{project.name}</span>
                  </div>
                  <div className="invisible group-[:hover]:block group-[:hover]:visible text-text-100">
                    <span className="text-end text-lg border rounded-full px-2 py-1 bg-white">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <hr />
          </div>
        </div>
        {/* Displayer */}
        <AnimatedImage
          src={
            hoveredProject
              ? projects.find((project) => project.id === hoveredProject)
                  ?.folder_name
              : projects[0].folder_name
          }
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
