import React from 'react';

const Button = ({ children, color, size, onClick }) => {
  const baseStyle = "font-bold rounded-md focus:outline-none focus:ring-2 transition duration-200";

  const colors = {
    blue: "bg-purple hover:bg-blue-600 text-white",
    black: "bg-strongGray hover:bg-gray-800 text-white",
  };

  const sizes = {
    full: "w-full py-2 px-4 text-sm", 
    large: "py-3 px-8 text-sm",
    medium: "py-2 px-6 text-lg",
    xlarge: "py-7 px-6 text-lg",
    larger: "py-3 w-full text-sm",
    small: "py-7 min-w-80 text-xl",
    xsmall: "py-3 w-80 text-sm",
  };

  const buttonStyle = `${baseStyle} ${colors[color]} ${sizes[size]}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;