import React from 'react';
import { aruna1 } from '../assets/img/galery/index';
import Visiaruna from '../components/rumaharuna/visiaruna';
import Misiaruna from '../components/rumaharuna/Misiaruna';
import Filosofiaruna from '../components/rumaharuna/Filosofiaruna';
import Programaruna from '../components/rumaharuna/programaruna';
import Kegiatanaruna from '../components/rumaharuna/Kegiatanaruna';
import Kurikulumaruna from '../components/rumaharuna/kurikulumaruna';

const Rumaharuna = () => {
  const data = [
    {
      heading: 'Profil Rumah Aruna',
      content:
        'Rumah Aruna berdiri pada tahun 2016. Rumah Aruna adalah sekolah pre-school dan kindergarten yang membawa semangat pendidikan yang berpihak pada anak. Rumah Aruna juga menerapkan Differentiated Learning, setiap anak memiliki kurikulumnya sendiri.',
      image: aruna1,
      alt: 'aruna1',
    },
    // Add more data objects for additional sections if needed
  ];

  return (
    <div className='w-full bg-white  sm-px-20 pt-[100px] '>
      <div className='bg-[#EF841A] w-full'>
        <p className='text-[16px] sm:px-20 px-7 text-white py-2 sm:py-5'>
          Beranda &gt; Rumah Aruna
        </p>
      </div>
      {data.map((section, index) => (
        <div key={index} className='p-7 sm:p-20'>
          <h3 className='text-[24px] sm:text-[36px] text-[#EF841A] font-bold mb-2'>
            {section.heading}
          </h3>
          <div className='flex flex-col-reverse sm:flex-row mt-5 sm:mt-10'>
            <p className='sm:text-[20px] text-[18px] mt-5 sm:mt-20 font-w-400 leading-[30px] sm:leading-[40px] sm:w-[634px]'>
              {section.content}
            </p>
            <div className='pl-10'>
              <img
                className=' h-[150px] sm:w-[520.195px] w-[250px] sm:h-[366px]'
                src={section.image}
                alt={section.alt}
              />
            </div>
          </div>
        </div>
      ))}
      <Visiaruna />
      <Misiaruna />
      <Filosofiaruna />
      <Kurikulumaruna />
      <Programaruna />
      <Kegiatanaruna />
    </div>
  );
};

export default Rumaharuna;
