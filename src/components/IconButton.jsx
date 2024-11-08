
import React, { useState } from 'react';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { BookmarkIcon as BookmarkOutline } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolid } from '@heroicons/react/24/solid';

const IconButton = ({ iconType, activeColor, inactiveColor }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  const icons = {
    like: { active: <HeartSolid className="h-6 w-6 " />, inactive: <HeartOutline className="h-6 w-6 text-purple" /> },
    save: { active: <BookmarkSolid className="h-6 w-6" />, inactive: <BookmarkOutline className="h-6 w-6 text-purple" /> },
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



