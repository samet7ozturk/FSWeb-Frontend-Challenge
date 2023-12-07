import React from "react";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { postData } = useData();
  const { skills, skill } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#2B2727]" : "bg-white"
      } flex pt-8 pb-20`}
    >
      <div className="mt-16  ml-[10%] mr-[15%] w-1/8">
        <h2
          className={`text-[48px] ${
            theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"
          } font-bold`}
        >
          {skill}
        </h2>
      </div>

      <div className="flex flex-wrap w-7/8">
        {skills &&
          skills.map((skill, index) => {
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
