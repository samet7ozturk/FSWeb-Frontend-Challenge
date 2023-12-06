import React, { createContext, useState, useContext, useEffect } from "react";

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const userLanguage =
    navigator.language ||
    (navigator.languages && navigator.languages[0]) ||
    "en";
  const isTurkish = userLanguage.startsWith("tr");

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || (isTurkish ? "tr" : "en")
  );
  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "tr" : "en"));
  };
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
