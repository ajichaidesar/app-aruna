import React from 'react';
import { logoaruna } from '../../assets/img/icon/index';
import { logo1 } from '../../assets/img/icon/index';
import Beranda from './Beranda';
import Layanan from './Layanan';
import Kontak from './Kontak';
import Sosial from './Sosial';
const Footer = () => {
  return (
    <footer>
      <div className='w-full mt-10 mx-auto font-andika p-10 sm:px-20 bg-slate-100'>
        <div className='flex sm:flex-row flex-col'>
          <div className='mb-3 '>
            <img
              src={logoaruna}
              alt='logoaruna'
              className='w-[134.377px] h-[76px]'
            />
            <div className='w-[423px] text-16 font-w-400 '>
              <h4>Alamat :</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col  mt-10'>
            <div className='sm:px-8'>
              <Beranda />
            </div>

            <div className='sm:px-8 mt-5 sm:mt-0'>
              <Layanan />
            </div>
            <div className='sm:px-8 sm:mr-10 mt-5 sm:mt-0'>
              <Kontak />
            </div>

            <div className='mt-5 sm:mt-0'>
              <Sosial />
            </div>
          </div>
        </div>
      </div>
      <div className='mb-3 mt-5 sm:ml-10 px-10 '>
        <h4 className='text-[12px] '>COLABORATION WITH</h4>
        <img src={logo1} alt='image1' />
      </div>

      <div className='flex justify-center items-center px-2 py-4'>
        <p>Copyright ©2023 Rumah Aruna. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
