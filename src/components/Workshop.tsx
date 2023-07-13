import React from 'react';
import { Link } from 'react-router-dom';
import { image1, image2, image3, image4, image5 } from '../assets/img/galery';
import { calendar } from '../assets/img/icon';

const workshopsData = [
  {
    id: 1,
    title: 'Workshop ',
    date: '20 Maret 2023 09:00 AM',
    image: image1,
  },
  {
    id: 2,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image2,
  },
  {
    id: 3,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image3,
  },
  {
    id: 4,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image4,
  },
  {
    id: 5,
    title: 'Workshop ',
    date: '21 Maret 2023 09:00 AM',
    image: image5,
  },
];

const Workshop = () => {
  return (
    <div className='w-full bg-white py-32 font-andika lg:py-50'>
      <div className='bg-[#EF841A] w-full px-10 py-5 mt-[-24px]'>
        <p className='text-[16px]'>Beranda &gt; Aruna SDC &gt; Workshop </p>
      </div>
      <div className='sm:text-[36px] text-[25px] text-center mt-10 font-bold'>
        <h3>Workshop Mendatang</h3>
      </div>
      <div>
        <div className='mt-3 p-5 sm:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {workshopsData.map((workshop) => (
            <div
              key={workshop.id}
              className='bg-white shadow-md flex flex-col sm:flex-row sm:w-7xl p-3 rounded-lg'
            >
              <div className='h-30 rounded-lg'>
                <img
                  className='rounded-xl mt-2 sm:w-[325px] sm:h-[216.454px]'
                  src={workshop.image}
                  alt='Service'
                />
              </div>
              <div className='w-2xl mb-10  px-2 sm:pl-5 h-20 mt-3'>
                <h3 className='sm:text-[24px] text-lg text-center sm:text-left'>
                  {workshop.title}
                </h3>
                <div className='sm:mt-6 mt-2'>
                  <div className='flex'>
                    <img
                      src={calendar}
                      alt='calender'
                      className='w-[24px] h-[24px]'
                    />
                    <p className='text-[14px] text-[#939393] pl-2'>
                      {workshop.date}
                    </p>
                  </div>
                  <div>
                    <div className='bg-[#3BB3C3] hover:bg-slate-500 font-w-400 sm:text-center text-white rounded-3xl sm:mt-10 mt-5   px-[10px] py-[32px] sm:text-[24px] text-sm text-center'>
                      <Link to={`/register/${workshop.id}`}>
                        Daftar Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
