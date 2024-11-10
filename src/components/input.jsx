import { useState } from "react";

const Input = ({ label, placeholder, value, onChange, type  }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    console.log("Input focused");
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    console.log("Input blurred");
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label  className="mb-2 text-white">
          {label}
        </label>
      )}
<input
    type={type || "text"}
    value={value}
    onChange={onChange}
    placeholder={placeholder || ""}
    onFocus={handleFocus} 
    onBlur={handleBlur}   
    className={`p-2 w-4/5 bg-midBlack rounded-md${isFocused ? "border-2 border-purple" : ""}`}
/>

    </div>
  );
};

export default Input;