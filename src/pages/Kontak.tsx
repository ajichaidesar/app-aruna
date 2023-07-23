import React from 'react';
import { Logo } from '../assets/img/galery';
import Map from '../components/kontakkami/Map';
import Register2 from '../components/kontakkami/Register2';

const kontak = () => {
  const data = [
    {
      id: 1,
      image: Logo,
      address:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ',
    },
  ];

  return (
    <div className='w-full bg-white font-andika  py-32 sm:py-50 flex flex-col'>
      <div className='bg-[#EF841A] w-full p-3  mt-[-24px]'>
        <p className='text-[ 16px] pl-5 sm:pl-[70px] text-white'>
          Beranda &gt; Kontak
        </p>
      </div>
      <div>
        <p className='sm:pt-8 pt-4 pl-10  sm:pl-20 text-[30px] mb-3 sm:text-[36px] text-[#EF841A]'>
          Hubungi Kami
        </p>
      </div>
      {data.map((item) => (
        <div className='sm:flex font-andika pl-10' key={item.id}>
          <img
            src={item.image}
            alt={`Image ${item.id}`}
            className='sm:p-10 sm:w-[443.797px] sm:h-[251px] w-[250px] h-[200px] object-contain'
          />
          <div className='sm:px-5 pr-5 sm:pr-0 text-[18px] sm:text-[24px] sm:w-[750px] mt-5 sm:mt-20'>
            <p>Alamat :</p>
            <p>{item.address}</p>
          </div>
        </div>
      ))}
      <Map />

      <Register2 />
    </div>
  );
};

export default kontak;
