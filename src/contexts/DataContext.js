import React, { createContext, useState, useEffect, useContext } from "react";
import { instanceAxios } from "../api/api";
import { engData, trData } from "../data";
import { useLanguage } from "./LanguageContext";

export const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const { language } = useLanguage();
  const [postData, setPostData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataToSend = language === "en" ? engData : trData;
    instanceAxios
      .post("/posts", dataToSend)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [language]);

  return (
    <DataContext.Provider value={{ postData, setPostData, error }}>
      {children}
    </DataContext.Provider>
  );
};
