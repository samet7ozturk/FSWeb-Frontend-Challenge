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
    <div className="bg-white rounded-md shadow flex-1">
      <div>
        <h2>Profile</h2>
      </div>
      <div>
        <h3>Basic Information</h3>
      </div>
      {data.informationTitles &&
        data.informationTitles.map((item) => (
          <div key={item.key}>
            <p>
              {item.title}: {data.basicInformation[item.key]}
            </p>
          </div>
        ))}
      <div>
        <img src={svg1} alt="svg1" />
      </div>
      <div>
        <h3>About Me</h3>
      </div>
      <div>
        <p>{data.aboutMe}</p>
      </div>
    </div>
  );
};

export default Profile;
