import React from "react";
import play from "../assets/PlayBtn.png";
import arrow from '../assets/↗.png'
const ClientCard = () => {
  return (
    <div className="w-[371px] h-[430px] rounded-[35px] bg-[#0649E7] text-center flex flex-col">
      <div className="w-[369px] h-[255px] rounded-[35px] bg-[#FEFEFE] mx-auto my-[1px]">
        <img src={play} alt="play" className="m-[95px] ml-[160px]" />
      </div>
      <p className="p2 text-white p-3">
        Holly is a <span className="font-bold">senior executive</span> who got
        over <span className="font-bold">10 job interviews</span> and an offer
        she accepted
      </p>
      <div className="rounded-full w-[55px] h-[55px] bg-white ml-auto mr-3 mb-3">
        <img src={arrow} alt="linkedin" className="p-4" />
      </div>
    </div>
  );
};

export default ClientCard;
