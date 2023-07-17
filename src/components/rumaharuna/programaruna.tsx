import React from 'react';
import { Symbol, Whatsapp } from '../../assets/img/icon/index';
import { image2 } from '../../assets/img/galery/index';

import Detailprogram from './Detailprogram';
import { Link } from 'react-router-dom';

const programData = [
  {
    image: image2,
    title: 'Sekolah Anak',
    phoneNumber: '1234567890',
    guideUrl: 'https://example.com/guide1',
  },
  {
    image: image2,
    title: 'Mitra Sekolah',
    phoneNumber: '9876543210',
    guideUrl: 'https://www.google.com',
  },
];

const openWhatsAppChat = (phoneNumber: string) => {
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  window.open(url, '_blank');
};

const programaruna = () => {
  const renderPrograms = () => {
    return programData.map((program, index) => (
      <>
        <Link to={`Detailprogram`}>
          <div
            className='sm:px-20  bg-white hover:bg-slate-200 shadow-xl rounded-2xl ml-10 sm:ml-20 sm:mr-20 mr-10 p-7 mt-5 sm:flex font-andika'
            key={index}
          >
            <div className='sm:w-[323px] sm:h-[194px]'>
              <img
                src={program.image}
                alt={`image${index}`}
                className='rounded-md '
              />
            </div>
            <div className='pl-0  sm:pl-8 mt-5'>
              <h3 className='sm:text-[32px]  text-[28px] font-bold my-2 sm:my-0'>
                {program.title}
              </h3>
              <div className='mt-2 sm:mt-10 flex text-[#3BB3C3]'>
                <button
                  className='bg-[#3BB3C3] hover:bg-slate-500 text-xs sm:text-[24px] text-[18px] text-white px-2 sm:px-4  py-0 sm:py-2 rounded-xl sm:rounded-3xl flex items-center mr-2'
                  onClick={() => openWhatsAppChat(program.phoneNumber)}
                >
                  <img
                    src={Whatsapp}
                    alt='Whatsapp'
                    className='sm:w-[32px] sm:h-[32px] w-[28px] h-[28px] mr-0 sm:mr-2'
                  />
                  Konsultasi Sekarang
                </button>
                <button
                  className='border-4 hover:bg-slate-500 text-xs sm:text-[24px] text-[18px] hover:text-white px-0 sm:px-4 py-2 rounded-xl sm:rounded-3xl flex items-center'
                  onClick={() => window.open(program.guideUrl, '_blank')}
                >
                  <img
                    src={Symbol}
                    alt='Symbol'
                    className='w-[32px] h-[32px] sm:mr-2 '
                  />
                  Panduan Pendaftaran
                </button>
              </div>
            </div>
          </div>
        </Link>
      </>
    ));
  };

  return <div>{renderPrograms()}</div>;
};

export default programaruna;
