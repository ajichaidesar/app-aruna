import React from 'react';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from '../../assets/img/galery';
const Kegiatanaruna = () => {
  return (
    <div>
      <div>
        <div className='mt-40'>
          <p className='sm:text-[48px] font-bold font-andika text-[30px] mb-10 text-center'>
            Kegiatan
          </p>
          <div className='mt-5 px-8  sm:px-20 grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='sm:h-15  rounded-lg'>
              <img src={image1} alt='image1' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg  overflow-hidden'>
              <img src={image2} alt='image2' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image3} alt='image3' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image4} alt='image4' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image5} alt='image5' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image2} alt='image2' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image3} alt='image3' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image4} alt='image4' className='sm:h-full w-full' />
            </div>
            <div className='h-15 rounded-lg'>
              <img src={image5} alt='image5' className='sm:h-full w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatanaruna;
