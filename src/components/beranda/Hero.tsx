import React from 'react';
import { aruna22, plane2 } from '../../assets/img/galery/index';

const heroData = [
  {
    Judul_slide: 'Rumah Aruna ',
    Descripsi_slide:
      'Sekolah pre-school dan kindergarten yang menerapkan Differentiated Learning Membawa semangat pendidikan yang berpihak pada anak',
    Telp_slide: '9876543210',
    Image_slide: aruna22,
  },
];
const openWhatsAppChat = (phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, '_blank');
};

const Hero = () => {
  return (
    <div className='max-w-7xl mb-20 mx-auto lg:h-[85vh] bg-white pt-32 pl-12 flex flex-col-reverse lg:flex-row'>
      {heroData.map((hero, index) => (
        <>
          <div key={index}>
            <div>
              <h3 className='text-[64px] font-satisfy text-[#EF841A]'>
                {hero.Judul_slide}
              </h3>
              <p className='mt-2 sm:mt-5 font-andika text-[20px] sm:text-[28px] sm:w-[647px] sm:h-[166px] text-[#EF841A]'>
                {hero.Descripsi_slide}
              </p>
              <button
                className='pl-20 sm:pl-0'
                onClick={() => openWhatsAppChat(hero.Telp_slide)}
              >
                <div className=' flex text-white mt-10 sm:mt-15 bg-[#3BB3C3] hover:bg-gray-500 w-60 sm:w-80 p-2 py-3 rounded-2xl'>
                  <i className='text-2xl fa-brands fa-whatsapp pl-5 sm:pl-5 h-[32px] w-[32px]' />
                  <p className='pl-5 font-andika text-[18px] sm:text-[24px]'>
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
          <div className=' mt-[220px] pl-[380px] absolute hidden sm:block'>
            <img
              src={plane2}
              alt='plane2'
              className='w-[231.552px] h-[162.5px]'
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Hero;
