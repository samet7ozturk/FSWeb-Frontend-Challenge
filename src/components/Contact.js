import React from "react";
import svg1 from "../images/twitter 1.svg";
import svg2 from "../images/codepen 1.svg";
import svg3 from "../images/at-sign 1.svg";
import svg4 from "../images/instagram 1.svg";
import { useData } from "../contexts/DataContext";

const Contact = () => {
  const { postData } = useData();
  const { contact } = postData;

  return (
    <div className="mt-20">
      <div>
        <div>
          <h2 className="text-[48px] text-[#4731D3] font-bold text-center mb-12">
            {contact?.title}
          </h2>
        </div>

        <div>
          <p className="text-[24px] text-black font-normal text-center mb-12">
            {contact?.text}
          </p>
        </div>

        <div>
          <p className="text-[20px] text-[#4731D3] font-medium text-center mb-12">
            <u>{contact?.email}</u>
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-28">
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
