import React from 'react';
import { icon1, icon2, icon3 } from '../../assets/img/icon/index';

const data = [
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum 1',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum 2',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    Icon_info: icon1,
    Judul_info: 'Lorem Ipsum 3',
    Descripsi_info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const Info = () => {
  return (
    <div className='max-w-7xl font-andika mx-auto flex justify-center items-center m-8'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-white w-[200px] h-[180px] sm:h-[250px] rounded-md p-2 sm:p-4 shadow-lg flex flex-col items-center mx-2 sm:ml-8'
        >
          <img
            src={item.Icon_info}
            alt={`icon${index + 1}`}
            className='h-[60px] sm:h-[100px]'
          />

          <div className='text-center'>
            <h3 className='text-[15px] sm:text-xl mt-2'>{item.Judul_info}</h3>
            <p className='text-xs sm:text-sm mt-2 '>{item.Descripsi_info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
