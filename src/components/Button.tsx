import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative inline-block'>
      <button className='flex' onClick={handleButtonClick}>
        <p>Layanan</p>
      </button>
      {isOpen && (
        <div className='w-[150px] absolute  text-black text-[18px] mt-2 py-2 w-30 text-center bg-white hover:shadow-sm rounded shadow-lg'>
          <ul>
            <li
              className='cursor-pointer hover:text-white px-4 py-2 hover:bg-[#EF841A]'
              onClick={() => handleOptionClick('Rumah-Aruna')}
            >
              <Link to={`Rumah-Aruna`}>Rumah Aruna</Link>
            </li>
            <li
              className='cursor-pointer hover:text-white px-4 py-2 hover:bg-[#EF841A]'
              onClick={() => handleOptionClick('Aruna SDC')}
            >
              <Link to={`Aruna-SDc`}>Aruna SDC</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
