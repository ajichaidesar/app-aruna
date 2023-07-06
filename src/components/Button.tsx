import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button className=" " onClick={handleButtonClick}>
        Layanan
      </button>
      {isOpen && (
        <div className="w-[150px] absolute text-sm mt-2 py-2 w-30 text-center bg-white border border-gray-300 rounded shadow-lg">
          <ul>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("Rumah-Aruna")}>
              <Link to={`Rumah-Aruna`}>Rumah Aruna</Link>
            </li>
            <li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("Aruna SDC")}>
              <Link to={`Aruna-SDc`}>Aruna SDC</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
