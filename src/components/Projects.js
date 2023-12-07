import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { postData } = useData();
  const { project, projects, projectsImg, projectsText } = postData;
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#1A210B]" : "bg-[#CBF281]"}`}>
      <div>
        <div className="ml-[10%] pt-16 pb-8">
          <h2
            className={`text-[48px] ${
              theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"
            } font-bold`}
          >
            {project}
          </h2>
        </div>
        <div className="ml-[10%] mr-[10%] flex flex-wrap gap-12 pb-20">
          {projects &&
            projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  theme === "dark" ? "bg-[#2B2727]" : "bg-white"
                } rounded-2xl flex xl:flex-nowrap md:flex-nowrap flex-wrap`}
              >
                <img src={projectsImg[index]} alt={`Project ${index + 1}`} />

                <div>
                  <h3
                    className={`text-[32px] ${
                      theme === "dark" ? "text-[#C1BAED]" : "text-[#4731D3]"
                    } font-bold ml-12 mt-12`}
                  >
                    {project}
                  </h3>
                  <p
                    className={` ${
                      theme === "dark" ? "text-white" : "text-[#383838]"
                    } ml-12 mt-8 mb-12 xl:mr-0 md:mr-0 mr-12`}
                  >
                    {projectsText[index]}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
