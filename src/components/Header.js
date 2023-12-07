import React from "react";
import img1 from "../images/hero-right.png";
import { useData } from "../contexts/DataContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { postData } = useData();
  const { description, name, header, links } = postData;
  const { language, toggleLanguage } = useLanguage();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-wrap ">
      <div
        className={`${
          theme === "dark" ? "bg-[#171043]" : "bg-[#4731D3]"
        } w-2/3 py-20 relative`}
      >
        <img src={img1} className="absolute top-[100px] -right-[260px]" />
        <span className="absolute top-[80px] right-[30px]">
          {language === "en" ? (
            <>
              <span
                className="text-[15px] font-bold text-[#CAF181] tracking-wider"
                onClick={toggleLanguage}
                style={{ cursor: "pointer" }}
              >
                TÜRKÇE
              </span>
              <span className=" text-[15px] font-bold text-[#D9D9D9] tracking-wider">
                'YE GEÇ
              </span>
            </>
          ) : (
            <>
              <span
                className="text-[15px] font-bold text-[#CAF181] tracking-wider"
                onClick={toggleLanguage}
                style={{ cursor: "pointer" }}
              >
                SWITCH TO
              </span>
              <span className="text-[15px] font-bold text-[#D9D9D9] tracking-wider">
                <span> ENGLISH</span>
              </span>
            </>
          )}
        </span>
        <div className="w-1/3">
          <h2 className="text-[30px] text-[#CBF281] font-bold mx-[50%]">
            {name}
          </h2>
        </div>
        <h1 className="text-[54px] text-[#CBF281] font-bold mx-[16%] mt-24 mb-10">
          {header}
        </h1>
        <h2 className="text-[24px] text-white font-normal mx-[16%] mb-10">
          {description}
        </h2>
        <div className="flex space-x-4 mx-[16%]">
          {links &&
            links.map((link, index) => (
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
      <div
        className={`${
          theme === "dark" ? "bg-[#1A210B]" : "bg-[#CBF281]"
        } w-1/3 py-20`}
      >
        <div
          className="w-14 h-6 rounded-xl bg-black relative ml-4"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        >
          <div className="w-4 h-4 rounded-2xl bg-yellow-400 absolute top-1 left-1"></div>
          <div className="w-4 h-4 rounded-2xl bg-yellow-400 absolute top-1 right-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
