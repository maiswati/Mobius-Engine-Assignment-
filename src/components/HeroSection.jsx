import React from "react";
import Header from "./Header";
import HeroLeftSection from "./HeroLeftSection";
import HeroRightSection from "./HeroRightSection";
import WorkSection from "./WorkSection";

const HeroSection = () => {
  return (
    <>
      <div className="header mb-3">
        <Header />
        <div className="flex items-center justify-around m-5">
          <HeroLeftSection />
          <HeroRightSection />
        </div>
      </div>
      <WorkSection />
    </>
  );
};

export default HeroSection;
