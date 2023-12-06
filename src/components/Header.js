import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";
import img1 from "../images/hero-right.png";

const Header = () => {
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
    <div className="flex flex-wrap ">
      <div className="bg-[#4731D3] w-2/3 py-20 relative">
        <img src={img1} className="absolute top-[100px] -right-[260px]" />
        <div className="w-1/3">
          <h2 className="text-[30px] text-[#CBF281] font-bold mx-[50%]">
            {data.name}
          </h2>
        </div>
        <h1 className="text-[54px] text-[#CBF281] font-bold mx-[16%] mt-24 mb-10">
          {data.header}
        </h1>
        <h2 className="text-[24px] text-white font-normal mx-[16%] mb-10">
          {data.description}
        </h2>
        <div className="flex space-x-4 mx-[16%]">
          {data.links &&
            data.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.image} alt={`Link ${index + 1}`} />
              </a>
            ))}
        </div>
      </div>
      <div className="bg-[#CBF281] w-1/3 py-20">
        <div className="w-14 h-6 rounded-xl bg-black relative ml-4">
          <div className="w-4 h-4 rounded-2xl bg-yellow-400 absolute top-1 left-1"></div>
          <div className="w-4 h-4 rounded-2xl bg-yellow-400 absolute top-1 right-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
