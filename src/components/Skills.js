import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";

const Skills = () => {
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
    <div className="flex mt-8 mb-20">
      <div className="mt-16  ml-[10%] mr-[15%] w-1/8">
        <h2 className="text-[48px] text-[#4731D3] font-bold">Skills</h2>
      </div>

      <div className="flex flex-wrap w-7/8">
        {data.skills &&
          data.skills.map((skill, index) => {
            const svg = Object.values(skill)[0];
            const name = skill.name;

            return (
              <div key={index} className="flex items-center mb-4 min-w-[450px]">
                <img
                  src={svg}
                  alt={`Skill ${index + 1}`}
                  className="w-40 h-40 mt-16"
                />
                <p className="text-[#777777] font-medium text-2xl ml-8">
                  {name}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
