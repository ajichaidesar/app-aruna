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
          <p className=' text-white pl-4 sm:pl-[70px] text-[16px]'>
            Beranda &gt; Tentang Kami
          </p>
        </div>
        <div className='sm:px-10 mt-3 sm:py-10'>
          <p className='text-[#EF841A] text-[20px] sm:text-[36px] px-7 sm:px-9'>
            Tentang Kami
          </p>
          {data.map((item, index) => (
            <div className='sm:flex sm:mt-10  mt-5 pl-8 sm:pl-10' key={index}>
              <img
                src={item.image}
                alt={item.image}
                className='sm:w-[388.75px] sm:h-[518.333px] w-[150px] h-[200px] rounded-xl'
              />
              <div className='sm:mx-10 pr-10 sm:pr-0 gap-20 mt-2'>
                <p className='sm:text-[40px] text-[20px] font-bold mt-3'>
                  {item.title}
                </p>
                <p className='sm:text-[20px] text-justify text-[18px] font-w-400 mt-2 sm:mt-5 sm:w-[754px] sm:leading-[40px] '>
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
