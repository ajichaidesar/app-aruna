import React from 'react';
import { Link } from 'react-router-dom';

const Beranda = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='text-[16px] font-andika leading-normal not-italic '>
      <h4>BERANDA</h4>
      <ul className='mt-3'>
        <li className='pb-2'>
          <Link
            to={'Tentang'}
            className='hover:text-blue-500'
            onClick={scrollToTop}
          >
            Tentang Kami
          </Link>
        </li>
        <li className='pb-2'>
          <Link
            to={'Kontak'}
            className='hover:text-blue-500'
            onClick={scrollToTop}
          >
            Kontak Kami
          </Link>
        </li>
        <li className='pb-2'>
          <Link
            to={'Artikel'}
            className='hover:text-blue-500'
            onClick={scrollToTop}
          >
            Artikel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Beranda;
