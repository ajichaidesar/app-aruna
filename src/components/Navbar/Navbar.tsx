import React, { useState } from 'react';
import { logoaruna } from '../../assets/img/icon/index';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='shadow-md w-full text-[16px] text-[#3BB3C3]  top-0 left-0 fixed z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 sm:px-20 px-6 '>
        <div className='flex items-center'>
          <div>
            <Link to={'/'}>
              <img
                src={logoaruna}
                alt='logoaruna'
                className='w-[123.77px]  h-[70px]'
              />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
          >
            <i
              className={
                open ? 'fa-solid fa-xmark' : 'fa-sharp fa-solid fa-bars'
              }
            ></i>
          </div>
        </div>
        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-20 ' : 'top-[-490px]'
            }`}
          >
            <li
              className='sm:ml-8 rounded-lg p-2 hover:bg-[#EF841A] text-[20px] md:my-0 my-7 hover:text-white'
              onClick={handleNavClick}
            >
              <Link to={`tentang`}>Tentang Kami</Link>
            </li>
            <li className='md:ml-8 text-[20px] md:my-0 my-7 rounded-lg p-2 hover:bg-[#EF841A] hover:radius-xl hover:text-white'>
              <Button />
            </li>
            <li
              className='md:ml-8 text-[20px] md:my-0 my-7 rounded-lg p-2 hover:bg-[#EF841A] hover:text-white'
              onClick={handleNavClick}
            >
              <Link to={`kontak`}>Kontak Kami</Link>
            </li>
            <li
              className='md:ml-8 text-[20px] md:my-0 my-7 rounded-lg p-2 hover:bg-[#EF841A] hover:text-white'
              onClick={handleNavClick}
            >
              <Link to={`artikel`}>Artikel</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
