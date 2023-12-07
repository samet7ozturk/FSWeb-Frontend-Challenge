import React from "react";
import svg1 from "../images/twitter 1.svg";
import svg2 from "../images/codepen 1.svg";
import svg3 from "../images/at-sign 1.svg";
import svg4 from "../images/instagram 1.svg";
import { useData } from "../contexts/DataContext";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { postData } = useData();
  const { contact } = postData;
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === "dark" ? "bg-[#252128]" : "bg-[#F9F9F9]"} pt-20`}
    >
      <div>
        <div>
          <h2
            className={`text-[48px] ${
              theme === "dark" ? "text-[#8F88FF]" : "text-[#4731D3]"
            } font-bold text-center mb-12`}
          >
            {contact?.title}
          </h2>
        </div>

        <div>
          <p
            className={`text-[24px] ${
              theme === "dark" ? "text-white" : "text-[#120B39]"
            } font-normal text-center mb-12`}
          >
            {contact?.text}
          </p>
        </div>

        <div>
          <p
            className={`text-[20px] ${
              theme === "dark" ? "text-[#8F88FF]" : "text-[#4731D3]"
            } font-medium text-center mb-12`}
          >
            <u>{contact?.email}</u>
          </p>
        </div>

        <div className="flex justify-center gap-8 pb-28">
          <img src={svg1} alt="svg1" />
          <img src={svg2} alt="svg2" />
          <img src={svg3} alt="svg3" />
          <img src={svg4} alt="svg4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
