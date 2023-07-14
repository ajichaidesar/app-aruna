import React from 'react';
import { Link } from 'react-router-dom';

const Layanan = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='text-[16px] font-andika leading-normal font-w-400 not-italic '>
      <h4>LAYANAN</h4>
      <ul className='mt-3'>
        <li className='pb-2'>
          <Link
            to={'Rumaharuna'}
            className='hover:text-blue-500'
            onClick={handleLinkClick}
          >
            Rumah Aruna
          </Link>
        </li>
        <li className='pb-2'>
          <Link
            to={'Arunasdc'}
            className='hover:text-blue-500'
            onClick={handleLinkClick}
          >
            Aruna SDC
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Layanan;
