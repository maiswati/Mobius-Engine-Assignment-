import React from "react";
import '../App.css'
import logo from '../assets/fulllogo.png'
const Header = () => {
  return (
    <header className="p-4 px-5 flex justify-between items-center h-[80px] pt-5">
        <div className="flex items-center">
            <img src={logo} alt="full logo" width='250px' className="align-middle"/>
        </div>
        <ul className="text-white flex space-x-6 items-center mt-4">
            <li>
                <h2 >Home</h2>
            </li>
            <li>
                <h2 >About Us</h2>
            </li>
            <li>
                <h2>Plans</h2>
            </li>
            <li>
                <h2 >Testimonials</h2>
            </li>
            <li>
                <h2 >Privacy Policy</h2>
            </li>
            <li>
                <h2 >More</h2>
            </li>
        </ul>
        <button className="bg-white text-center p-3 rounded-5 text-[#022183] p2 w-[200px] h-[60px]">Get Started</button>
    </header>
  );
};

export default Header;