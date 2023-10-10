import React, { useState } from 'react';

const SkillIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='relative inline-block cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='bg-[#1f1f1f] p-2 rounded-lg m-2'>
        {props.icon}
      </div>
      {isHovered && (
        <div className='absolute text-sm  font-semibold bg-[#1f1f1f] text-white px-2 py-1 rounded-md top-0 left-0 mt-2 transition'>
          {props.hoverText}
        </div>
      )}
    </div>
  );
};

export default SkillIcon;
