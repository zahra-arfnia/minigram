import React from 'react';

const EditProfile = ({ label, icon: Icon, color = "bg-black-500", textColor = "text-white", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-3 ${color} ${textColor} rounded-lg shadow hover:bg-purple-600 transition duration-200`}
    >
      {Icon && <Icon className="h-5 w-5 mr-2 text-purple" />}
      <span>{label}</span>
    </button>
  );
};

export default EditProfile;
