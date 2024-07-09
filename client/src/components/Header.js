import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import HoverInfoBox from './info';
import HoverInfoBox1 from './tech';
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  const [isShown, setIsShown] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 border-b shadow-xl sm:w-full">
      <div className="flex items-center space-x-4 sm:w-auto mb-4 sm:mb-0 ">
        <img src="https://cdn2.downdetector.com/static/uploads/logo/UDEMY_3_ymWlISr.png"  alt="Udemy Logo" 
        onClick={() => navigate("/")}
        className="h-12 cursor-pointer" />
        <span className="sm:hidden sm:block cursor-pointer items-center hover:text-secondary">Categories</span>
      </div>
      <div className="flex-grow mx-4 sm:w-full">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full p-2 border rounded-full"
        />
      </div>
      <div className=" sm:hidden sm:flex items-center space-x-4 sm:w-auto">
        <span className='cursor-pointer hover:text-secondary'>Plans & Pricing</span>
        <HoverInfoBox1
        text="Udemy Business"
        hoverText="Get your team access to over 26,000 top Udemy courses, anytime, anywhere."
        className='hover:text-secondary sm:hidden'
        />
        <HoverInfoBox1
        text="Tech on Udemy"
        hoverText="Turn what you know into an opportunity and reach millions around the world."
        className='hover:text-secondary sm:hidden'
        />
        <HoverInfoBox
        text="🛒"
        hoverText="Your Cart is empty"
        className='hover:text-secondary sm:hidden'
        />
      
        
        <button className="px-4 py-2 rounded text-gray-700 cursor-pointer hover:bg-secondary hover:text-white" onClick={() => navigate("/login")}>Log in</button>
        <button className="bg-black text-white px-4 py-2 rounded cursor-pointer  hover:bg-secondary hover:border-black">Sign up</button>
        <span role="img" aria-label="language" className="text-2xl cursor-pointer">
          🌐
        </span>
      </div>
      <div className="sm:flex sm:items-center hidden sm:visible ">
        <button onClick={toggleMenu} className="text-2xl">
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="visible sm:flex sm:flex-col items-start sm:absolute top-16 right-0 shadow-lg border rounded p-4">
          <span className='cursor-pointer'>Categories</span>
          <span className='cursor-pointer'>Plans & Pricing</span>
          <span className='cursor-pointer'>Udemy Business</span>
          <span className='cursor-pointer'>Teach on Udemy</span>
          <span role="img" aria-label="cart" className="text-2xl cursor-pointer">
            🛒
          </span>
          <button className="text-gray-700 cursor-pointer">Log in</button>
          <button className="bg-black text-white px-4 py-2 rounded cursor-pointer">Sign up</button>
          <span role="img" aria-label="language" className="text-2xl cursor-pointer">
            🌐
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
