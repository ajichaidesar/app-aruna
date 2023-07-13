import React from 'react';
import { Link } from 'react-router-dom';
import { icon1 } from '../../assets/img/icon';

const data = [
  {
    title: 'Holistic Learning',
    description:
      'Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh.',
  },
  {
    title: 'Differeanted Learning',
    description:
      'Pembedaan dalam penyampaian materi, proses, dan produk pembelajaran berdasarkan kesiapan, minat, dan kebutuhan anak.',
  },
  {
    title: 'Montessori',
    description:
      'Pendekatan dalam pendidikan yang filosofinya didasarkan pada rasa hormat pada keunikan setiap anak.',
  },
  {
    title: 'Multiple Intelligences',
    description:
      'Kecerdasan Majemuk yang dikemukakan oleh Howard Gardner adalah teori yang mengatakan bahwa semua orang memiliki kecerdasan yang berbeda-beda.',
  },
];

const kurikulumaruna = () => {
  return (
    <div className='mt-20 font-andika'>
      <p className='sm:text-[48px] text-[30px] font-bold text-center'>
        Kurikulum Rumah Aruna
      </p>
      <div className='text-right pr-10 text-[18px] sm:text-[20px] mt-5 '>
        <Link to={'kurikulum'} className='text-[#3BB3C3]'>
          Lihat Kurikulum
        </Link>
        <span className='pl-2'>
          <i className='fa-solid fa-chevron-up fa-rotate-90 p-1 bg-[#3BB3C3] hover:bg-slate-500 text-white rounded-full ' />
        </span>
      </div>
      <div className='max-w-7xl sm:mx-auto  p-5 justify-center items-center sm:m-8 grid grid-cols-2 sm:grid-cols-4 gap-2'>
        {data.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-md p-6 shadow-lg flex flex-col items-center mb-5 mx-5'
          >
            <div>
              <img
                src={icon1}
                alt='icon1'
                className='sm:h-[76px] sm:w-[76px] h-[50px] w-[50px]'
              />
            </div>
            <div className='aspect-w-1 aspect-h-1'>
              <div className='flex flex-col items-center text-center'>
                <h3 className=' w-auto h-auto text-md sm:text-[16px] mt-2'>
                  {item.title}
                </h3>
                <p className='text-xs sm:text-[12px] mt-2 hidden sm:block'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <h3 className='sm:text-[48px] text-[30px] font-bold'>Program Kami</h3>
      </div>
    </div>
  );
};

export default kurikulumaruna;
