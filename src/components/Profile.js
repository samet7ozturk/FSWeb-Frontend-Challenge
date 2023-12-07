import React from "react";
import svg1 from "../images/image 2.svg";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Profile = () => {
  const { postData } = useData();
  const { informationTitles, basicInformation, aboutMe, profile } = postData;
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#171043]" : "bg-[#4731D3]"}`}>
      <div className="ml-[10%] pt-20">
        <h2 className="text-[48px] text-[#CBF281] font-bold">{profile}</h2>
      </div>
      <div className="flex">
        <div className="w-1/3 ml-[10%]">
          <div>
            <h3 className="text-[30px] text-white font-medium mt-8 mb-4">
              {basicInformation?.title}
            </h3>
          </div>
          {informationTitles &&
            informationTitles.map((item) => (
              <div key={item.key} className="flex">
                <p className="text-[#CBF281] w-36 mb-4">{item.title}</p>
                <p className="text-white w-36 mb-4">
                  {basicInformation[item.key]}
                </p>
              </div>
            ))}
        </div>
        <div className="w-1/3">
          <img src={svg1} alt="svg1" />
        </div>
        <div className="w-1/3 ml-8 mr-[10%]">
          <div>
            <h3 className="text-[30px] text-white font-medium mt-8 mb-4">
              {basicInformation?.about}
            </h3>
          </div>
          <div>
            <p className="text-white">{aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
