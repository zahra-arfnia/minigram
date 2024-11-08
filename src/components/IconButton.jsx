import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark} from 'react-icons/fa';

const IconButton = ({ iconType, activeColor, inactiveColor }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const icons = {
    like: { active: <FaHeart className="h-6 w-6 " />, inactive: <FaRegHeart className="h-6 w-6 text-purple" /> },
    save: { active: <FaBookmark className="h-6 w-6" />, inactive: <FaRegBookmark className="h-6 w-6 text-purple" /> },
  };

  return (
    <button
      onClick={toggleActive}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
        active ? activeColor : inactiveColor
      }`}
    >
     {active ? icons[iconType].active : icons[iconType].inactive}
    </button>
    
  );
};

export default IconButton;



  

  

