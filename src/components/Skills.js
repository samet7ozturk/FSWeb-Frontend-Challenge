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
          className={`xl:text-[48px] md:text-[48px] text-[30px] ${
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
                  className="xl:w-40 xl:h-40 md:w-40 md:h-40 w-20 h-20 mt-16"
                />
                <p className="text-[#777777] font-medium xl:text-2xl md:text-2xl text-xl xl:ml-8 xl:mt-14 md:ml-8 md:mt-14 mt-14 ml-4">
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
