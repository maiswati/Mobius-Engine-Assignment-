import React from "react";
import Profile from "./Profile";
import Sir from '../assets/Sir.png'
import Madam from '../assets/madam.png'
const AboutSection = () => {
  return (
    <div className="p-5 about mt-5">
      <p className="text-white">About Us</p>
      <div>
        <Profile
          s={Sir}
          alt="Sir"
          info="Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
​
Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
"
        />
        <Profile
          s={Madam}
          alt="madam"
          info="Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. 
 
With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential."
        />
      </div>
      <div className="mt-5">
        <p className="p2 text-white">Learn more about our Board of Advisors​ ↗</p>
        <p className="p2 text-white">Follow us on our Linkedin page ↗</p>
      </div>
    </div>
  );
};

export default AboutSection;
