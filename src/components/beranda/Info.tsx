import React from 'react';
import { icon1, icon2, icon3 } from '../../assets/img/icon/index';

const data = [
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum ',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum ',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum ',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Info = () => {
  return (
    <div className='max-w-7xl font-andika mx-auto flex justify-center items-center sm:m-8'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-white  rounded-md py-[40px] sm:py-[42px] px-5 sm:px-[35px] mx-2 sm:mx-9 shadow-lg flex flex-col items-center'
        >
          <img
            src={item.Icon_info}
            alt={`icon${index + 1}`}
            className='sm:w-[76px] sm:h-[76px] w-[35px] h-[35px]'
          />

          <div className='text-center sm:w-[210px]'>
            <h3 className='text-[15px] sm:text-[20px] mt-2'>
              {item.Judul_info}
            </h3>
            <p className='text-xs sm:text-[12px] hidden sm:block mt-2 '>
              {item.Descripsi_info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
