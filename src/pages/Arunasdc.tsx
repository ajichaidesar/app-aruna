import React from 'react';
import { aruna2 } from '../assets/img/galery/index';
import { image1 } from '../assets/img/galery/index';
import { image2 } from '../assets/img/galery/index';
import { image3 } from '../assets/img/galery/index';
import { image4 } from '../assets/img/galery/index';
import { image5 } from '../assets/img/galery/index';

import Visisdc from '../components/rumahsdc/visisdc';
import Misisdc from '../components/rumahsdc/Misisdc';
import Layanansdc from '../components/rumahsdc/Layanansdc';
import Kegiatanaruna from '../components/rumaharuna/Kegiatanaruna';

const Arunasdc = () => {
  return (
    <div
      className='w-full  
    bg-white  py-32 lg:py-50 font-andika  '
    >
      <div className='bg-[#EF841A] w-full p-3 px-[25px] sm:px-20 mt-[-24px] '>
        <p className='text-md'>Beranda &gt; Aruna SDC </p>
      </div>
      <div className='sm:p-10 p-7 sm:px-20 '>
        <h3 className='text-[36px] text-[#EF841A] font-bold mb-2'>
          Profil Aruna SDC
        </h3>
        <div className='flex flex-col-reverse sm:flex-row sm:mb-20  '>
          <p className='sm:text-[20px] text-[18px] text-justify sm:w-[634px] sm:mt-40 sm:justify-text-center'>
            Aruna School Development Consultant (Aruna SDC) didirikan pada tahun
            2015 oleh Ms Eva Sidabutar bersama rekannya Ms Indri. Aruna SDC
            adalah perusahaan konsultan yang menyediakan layanan konsultasi dan
            pelatihan dalam mengimplementasikan rencana pengembangan sekolah
            atau inisiatif-inisiatif peningkatan profesionalitas bagi segenap
            komunitas sekolah.
          </p>
          <img
            className='mt-2 sm:w-[520.194px] sm:h-[475px] h-50 w-60'
            src={aruna2}
            alt='aruna2'
          />
        </div>
      </div>
      <Visisdc />
      <Misisdc />
      <div className='mt-20'>
        <Layanansdc />
        <Kegiatanaruna />
      </div>
    </div>
  );
};

export default Arunasdc;
