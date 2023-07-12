import React from 'react';
import { hero1 } from '../../assets/img/icon/index';

const heroData = [
  {
    Judul_slide: 'Rumah Aruna ',
    Descripsi_slide:
      'Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning Membawa semangat pendidikan yang berpihak pada anak',
    Telp_slide: '9876543210',
    Image_slide: hero1,
  },
];
const openWhatsAppChat = (phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, '_blank');
};

const Hero = () => {
  return (
    <div className='max-w-7xl  mx-auto lg:h-[85vh] bg-white pt-32 xl:px-20 px-10 flex flex-col-reverse lg:flex-row'>
      {heroData.map((hero, index) => (
        <>
          <div key={index}>
            <div>
              <h3 className='text-4xl font-satisfy text-[#EF841A]'>
                {hero.Judul_slide}
              </h3>
              <p className='mt-2 sm:mt-5 font-andika text-md sm:text-xl mr-10 text-[#EF841A]'>
                {hero.Descripsi_slide}
              </p>
              <button
                className='pl-20 sm:pl-0'
                onClick={() => openWhatsAppChat(hero.Telp_slide)}
              >
                <div className='items-center flex text-white mt-10 sm:mt-20 bg-[#3BB3C3] hover:bg-gray-500 w-60 sm:w-80 p-2 rounded-2xl'>
                  <i className='text-2xl fa-brands fa-whatsapp pl-5 sm:pl-10' />
                  <p className='pl-2 font-andika text-md sm:text-xl'>
                    Konsultasi Sekarang
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div>
            <img
              className='w-500 pr-20'
              src={hero.Image_slide}
              alt={`hero${index + 1}`}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Hero;
