import React, { useEffect, useState } from "react";
import { instanceAxios } from "../api/api";
import { engData } from "../data";

const Movie = () => {
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
      {data.name}
      {data.header}
      {data.description}
      {data.links}
    </div>
  );
};

export default Movie;
