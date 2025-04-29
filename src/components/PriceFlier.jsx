import React from "react";
import check from '../assets/correct.png'
const PriceFlier = () => {
  return (
    <div className="w-[1296px] h-[324px] bg-[#0649E7] rounded-[35px] mt-5 mx-auto p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white">Advance</p>
          <p className="p2 text-white">
            Top-tier support for serious job hunters:
          </p>
          <hr className="text-white" />
        </div>
        <div>
          <p className="text-white">
            $150/<span className="text-sm">week</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">

      <div>
        <div className="flex items-center gap-2">
          <div  className="flex items-start gap-3">
            <img src={check} alt="check" />
            <p className="p2 text-white">Everything in Plus</p>
          </div>
          <div  className="flex items-start gap-3">
            <img src={check} alt="check" />
            <p className="p2 text-white">Custom Resumes & Cover Letters</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div  className="flex items-start gap-3">
            <img src={check} alt="check" />
            <p className="p2 text-white">20 fully customized applications/week</p>
          </div>
          <div  className="flex items-start gap-3">
            <img src={check} alt="check" />
            <p className="p2 text-white">Help with complex job searches</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div  className="flex items-start gap-3">
            <img src={check} alt="check" />
            <p className="p2 text-white">Access to senior resume experts, Founder & Exec Coaches</p>
          </div>
        </div>
      </div>
      <button className="bg-white text-center p-3 rounded-5 text-[#022183] p2 w-[200px] h-[60px]">Get Started</button>
      </div>
    </div>
  );
};

export default PriceFlier;
