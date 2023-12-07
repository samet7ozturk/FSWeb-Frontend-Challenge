import React from "react";
import img1 from "../images/image-2.png";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Profile = () => {
  const { postData } = useData();
  const { informationTitles, basicInformation, aboutMe, profile } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#171043]" : "bg-[#4731D3]"
      } xl:pb-16 md:pb-16 sm:pb-16 pb-16 flex xl:flex-nowrap md:flex-nowrap flex-wrap flex-col `}
    >
      <div className="ml-[10%] pt-20">
        <h2 className="xl:text-[30px] md:text-[30px] text-[25px] text-[#CBF281] font-bold">
          {profile}
        </h2>
      </div>
      <div className="flex xl:flex-nowrap md:flex-nowrap flex-wrap">
        <div className="xl:w-1/3 md:w-1/3 w-full ml-[10%] xl:flex-col md:flex-col flex-row xl:pb-0 md:pb-0 pb-8">
          <div>
            <h3 className="xl:text-[30px] md:text-[30px] text-[25px] text-white font-medium mt-8 mb-4">
              {basicInformation?.title}
            </h3>
          </div>
          {informationTitles &&
            informationTitles.map((item) => (
              <div key={item.key} className="flex xl:flex-row md:flex-row ">
                <p className="text-[#CBF281] w-36 mb-4">{item.title}</p>
                <p className="text-white w-36 mb-4">
                  {basicInformation[item.key]}
                </p>
              </div>
            ))}
        </div>
        <div className="xl:w-1/3 md:w-1/3 w-full flex flex-col xl:mx-0 md:mx-0 mx-[20%]">
          <img
            src={img1}
            alt="img1"
            className="rounded-xl xl:mt-0 md:mt-12 xl:flex-nowrap md:flex-nowrap flex-wrap"
          />
        </div>
        <div className="xl:w-1/3 md:w-1/3 w-full ml-8 mr-[10%] flex flex-col">
          <div>
            <h3 className="xl:text-[30px] md:text-[30px] text-[25px] text-white font-medium mt-8 mb-4">
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
