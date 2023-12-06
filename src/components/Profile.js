import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";
import svg1 from "../images/image 2.svg";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    instanceAxios
      .post(`/users`, engData)
      .then((res) => {
        console.log(res.data.name);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="bg-[#4731D3]">
      <div className="ml-[10%] pt-20">
        <h2 className="text-[48px] text-[#CBF281] font-bold">Profile</h2>
      </div>
      <div className="flex">
        <div className="w-1/3 ml-[10%]">
          <div>
            <h3 className="text-[30px] text-white font-medium mt-8 mb-4">
              Basic Information
            </h3>
          </div>
          {data.informationTitles &&
            data.informationTitles.map((item) => (
              <div key={item.key} className="flex">
                <p className="text-[#CBF281] w-36 mb-4">{item.title}</p>
                <p className="text-white w-36 mb-4">
                  {data.basicInformation[item.key]}
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
              About Me
            </h3>
          </div>
          <div>
            <p className="text-white">{data.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
