import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";

const Projects = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    instanceAxios
      .post(`/users`, engData)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-[#CBF281]">
      <div>
        <div className="ml-[10%] pt-16 pb-8">
          <h2 className="text-[48px] text-[#4731D3] font-bold">Projects</h2>
        </div>
        <div className="ml-[10%] mr-[10%] flex flex-wrap gap-12 pb-20">
          {data.projects &&
            data.projects.map((project, index) => (
              <div key={index} className=" bg-white rounded-2xl flex">
                <img
                  src={data.projectsImg[index]}
                  alt={`Project ${index + 1}`}
                />
                <div>
                  <h3 className="text-[32px] text-[#4731D3] font-bold ml-12 mt-12">
                    {project}
                  </h3>
                  <p className="ml-12 mt-8">{data.projectsText[index]}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
