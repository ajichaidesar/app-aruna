import React from 'react';
import { Logo, aruna3 } from '../assets/img/galery/index';

const data = [
  {
    title: 'Rumah Aruna',
    description:
      'Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning. Membawa semangat pendidikan yang berpihak pada anak',
    image: Logo,
  },
  {
    title: 'Aruna SDC',
    description:
      'Lembaga konsultan pendidikan yang memberikan pelatihan dan konsultasi kepada kepala sekolah, guru, orang tua dan pengasuh anak',
    image: aruna3,
  },
];

const Arunatentang = () => {
  return (
    <div className='Max-w-7xl bg-white font-andika py-10 lg:py-20'>
      {data.map((item, index) => (
        <div
          className='flex flex-col-reverse mt-7  sm:mt-10 sm:flex-row-reverse sm:p-5 p-2 '
          key={index}
        >
          <div className='  sm:mt-20 px-3 sm:px-20  '>
            <p className='text-[40px] mb-2 font-bold'>{item.title}</p>
            <p className='text-[20px]  font-w-400 leading-[40px]'>
              {item.description}
              <span className='pl-2 sm:pl-5'>
                <i className='fa-solid fa-chevron-up fa-rotate-90 p-1 bg-blue-400 hover:bg-blue-800 text-white rounded-full ' />
              </span>
            </p>
          </div>
          <div className=' px-10  '>
            <img
              className='h-[300px] sm:h-[250px] sm:w-[530.435px] w-[350px] '
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Arunatentang;
