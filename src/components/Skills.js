import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";
import svg1 from "../images/js-logo 1.svg";
import svg2 from "../images/Rectangle 35.svg";
import svg3 from "../images/Group 101.svg";
import svg4 from "../images/node-logo 1.svg";
import svg5 from "../images/Group 101 (1).svg";
import svg6 from "../images/figma-logo 1.svg";

const Movie = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    instanceAxios
      .get(`/users/2`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="">
      <div>
        <h2>Skills</h2>
      </div>

      <div>
        <img src={svg1} alt="svg1" />
        <img src={svg2} alt="svg2" />
        <img src={svg3} alt="svg3" />
        <img src={svg4} alt="svg4" />
        <img src={svg5} alt="svg5" />
        <img src={svg6} alt="svg6" />
      </div>
    </div>
  );
};

export default Movie;
