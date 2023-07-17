import React from 'react';
import { pendiri } from '../assets/img/galery/index';
import Arunatentang from '../components/arunatentang';

const data = [
  {
    title: 'Pendiri Rumah Aruna & Aruna SDC',
    image: pendiri,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. ',
  },
];

const Tentang = () => {
  return (
    <div className='w-full font-andika bg-white py-32 lg:py-50'>
      <div>
        <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
          <p className=' text-white pl-4 sm:pl-20 text-[16px]'>
            Beranda &gt; Tentang Kami
          </p>
        </div>
        <div className='sm:px-10 sm:py-10'>
          <p className='text-[#EF841A] text-[30px] sm:text-[36px] px-5 sm:px-2'>
            Tentang Kami
          </p>
          {data.map((item, index) => (
            <div className='sm:flex sm:mt-10  mt-5 px-10 sm:p-20' key={index}>
              <img
                src={item.image}
                alt={item.image}
                className='sm:w-[388.75px] sm:h-[518.333px] w-[200px] rounded-xl'
              />
              <div className='sm:mx-10  gap-20 mt-2'>
                <p className='sm:text-[40px] text-xl font-bold mt-3'>
                  {item.title}
                </p>
                <p className='sm:text-[20px] font-w-400 mt-5 leading-[40px] '>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Arunatentang />
    </div>
  );
};

export default Tentang;
