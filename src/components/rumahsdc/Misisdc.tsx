import React from 'react';
import { Plane } from '../../assets/img/icon';

const missionStatements = [
  'Mengembangkan kemitraan antara sekolah dengan orangtua dan mendukung orangtua sebagai guru pertama anak.',
  'Memfasilitasi pengembangan profesionalisme dari guru, keterampilan pengasuhan orangtua dan pengasuh anak.',
  'Mengintegrasikan masyarakat sebagai sumber belajar.',
  'Menciptakan lingkungan belajar seperti suasana rumah.',
  'Memfasilitasi seluruh area perkembangan anak.',
  'Melakukan diferensiasi dalam pembelajaran untuk memenuhi kebutuhan belajar setiap anak.',
];

const Misisdc = () => {
  return (
    <div className='w-full bg-white'>
      <div className='mt-5 sm:pl-20 pl-8  sm:p-10'>
        <div className='flex'>
          <img
            src={Plane}
            alt='Plane'
            className='sm:w-[40.026px] sm:h-[40.026px] h-8 w-8'
          />
          <p className='pl-2 text-[20px] sm:text-[24px] font-bold'>MISI</p>
        </div>
        <ul className='list-disc ml-8 leading-[30px] sm:leading-[40px] sm:w-100 text-[18px] sm:text-[20px] text-justify pr-5'>
          {missionStatements.map((statement, index) => (
            <li key={index}>{statement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Misisdc;
