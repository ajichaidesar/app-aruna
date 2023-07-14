import React, { useState } from 'react';
import {
  iconkurikulum,
  iconpendidikan,
  iconworkshop,
  iconsahabat,
} from '../../assets/img/icon/index';

import { Link } from 'react-router-dom';

const Layanansdc = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: 'Konsultasi Pendidikan',
      icon: iconpendidikan,
      whatsapp: '628123456789', // Replace with the dynamic WhatsApp number
    },
    {
      title: 'Konsultasi Kurikulum',
      icon: iconkurikulum,
      whatsapp: '628987654321', // Replace with the dynamic WhatsApp number
    },
  ];

  return (
    <div>
      <p className='text-2xl font-bold text-center'>Layanan Kami</p>
      <div className='max-w-7xl  sm:mx-auto p-5 justify-center items-center sm:m-8 grid grid-cols-2 sm:grid-cols-4 gap-2'>
        <div className=' bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5'>
          <div>
            <img src={iconsahabat} alt='iconsahabat' className='h-20' />
          </div>
          <div className='text-center'>
            <h3 className='text-xl mt-2'>Sahabat Aruna</h3>
            <div className='mt-5 text-white'>
              <i className='fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full' />
            </div>
          </div>
        </div>
        <div className=' bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5'>
          <Link to={'Workshop'} onClick={scrollToTop}>
            <div>
              <img src={iconworkshop} alt='iconworkshop' className='h-20' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl mt-2'>Workshop</h3>
              <div className='mt-5 text-white'>
                <i className='fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full' />
              </div>
            </div>
          </Link>
        </div>
        {services.map((service, index) => (
          <div
            key={index}
            className=' bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5'
          >
            <div>
              <img src={service.icon} alt={service.title} className='h-20' />
            </div>
            <div className='text-center'>
              <h3 className='text-xl mt-2'>{service.title}</h3>
              <div className='mt-5 text-white'>
                {service.whatsapp ? (
                  <a
                    href={`https://wa.me/${service.whatsapp}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full' />
                  </a>
                ) : (
                  <i className='fa-solid fa-chevron-up fa-rotate-90 p-2 bg-gray-500 hover:bg-gray-800 rounded-full' />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanansdc;
