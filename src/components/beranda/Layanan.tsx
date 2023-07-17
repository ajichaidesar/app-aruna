import React from 'react';
import { logoaruna } from '../../assets/img/icon/index';
import { aruna2 } from '../../assets/img/icon/index';
import { bglayanan } from '../../assets/img/galery';

const servicesData = [
  {
    id: 1,
    logo: logoaruna,
    title: 'Rumah Aruna',
    description: 'Pre School dan Kindergarten',
  },
  {
    id: 2,
    logo: aruna2,
    title: 'Aruna SDC',
    description: 'Lembaga Konsultan Pendidikan',
  },
];

const Layanan = () => {
  return (
    <div className='max-w-full mx-auto w-screen  pt-5 pb-10 sm:pb-40 flex justify-center items-center overflow-hidden rounded-b-none relative flex-col'>
      <div>
        <img src={bglayanan} alt='bglayanan' className='h-[300px] sm:h-full ' />
      </div>
      <div className='flex absolute mt-[-240px] sm:mt-[-400px] '>
        <h3 className='text-white text-2xl sm:text-[48px] '>Layanan Kami</h3>
      </div>
      <div className='flex-row flex  absolute'>
        {servicesData.map((service) => (
          <div
            className='bg-white rounded-xl   first:shadow-lg  items-center flex flex-col sm:pt-[32px] pt-[12px] sm:px-[50px] px-[20px] sm:pb-[50px] pb-[20px] sm:mx-8 mx-4'
            key={service.id}
          >
            <div>
              <img
                src={service.logo}
                alt='service logo'
                className='sm:w-[176.812px] w-[100px] h-[50px] sm:h-[100px] '
              />
            </div>
            <div className='text-center '>
              <h3 className='text-[18px] sm:text-[24px] mt-2'>
                {service.title}
              </h3>
              <p className='sm:text-[16px] text-[12px]  mt-2 w-[120px] sm:w-[200px]'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
