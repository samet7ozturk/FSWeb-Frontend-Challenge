import React from "react";
import { useData } from "../contexts/DataContext";

const Projects = () => {
  const { postData } = useData();
  const { project, projects, projectsImg, projectsText } = postData;

  return (
    <div className="bg-[#CBF281]">
      <div>
        <div className="ml-[10%] pt-16 pb-8">
          <h2 className="text-[48px] text-[#4731D3] font-bold">{project}</h2>
        </div>
        <div className="ml-[10%] mr-[10%] flex flex-wrap gap-12 pb-20">
          {projects &&
            projects.map((project, index) => (
              <div key={index} className=" bg-white rounded-2xl flex">
                <img src={projectsImg[index]} alt={`Project ${index + 1}`} />
                <div>
                  <h3 className="text-[32px] text-[#4731D3] font-bold ml-12 mt-12">
                    {project}
                  </h3>
                  <p className="ml-12 mt-8">{projectsText[index]}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
