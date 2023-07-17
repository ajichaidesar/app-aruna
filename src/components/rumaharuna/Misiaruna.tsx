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

const Misiaruna = () => {
  return (
    <div className='w-full bg-white font-andika'>
      <div className='mt-5 sm:pl-20 p-10'>
        <div className='flex'>
          <img
            src={Plane}
            alt='Plane'
            className='sm:w-[40.026px] sm:h-[40.026px] w-[30px] h-[30px]'
          />
          <p className='pl-2 text-[20px] sm:text-[24px] font-bold'>MISI</p>
        </div>
        <ul className='list-disc mx-9 font-w-400 sm:leading-[40px] leading-[30px] sm:w-100 text-[18px] sm:text-[20px] text-justify'>
          {missionStatements.map((statement, index) => (
            <li key={index}>{statement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Misiaruna;
