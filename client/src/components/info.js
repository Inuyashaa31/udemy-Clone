import React, { useState } from 'react';

const HoverInfoBox = ({ text, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block px-4 py-2">
      <a
        className=" hover:font-secondary"
        onMouseEnter={() => setIsHovered(true)}
        onclick={() => setIsHovered(true)}
        //onDoubleClick={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </a>
      {isHovered && (
        <div className="hover:visible flex flex-col gap-7 items-center text-justify justify-center absolute right-6 top-full mt-1 w-64 p-4 bg-white border border-gray-300 shadow-lg z-10">
          {hoverText}
          <p className='font-semibold text-secondary cursor-pointer'>Keep Shopping</p>
        </div>
      )}
    </div>
  );
};

export default HoverInfoBox;
