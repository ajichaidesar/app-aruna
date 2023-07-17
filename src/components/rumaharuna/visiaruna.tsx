import React from 'react';
import { Plane } from '../../assets/img/icon';

const vissionStatements = [
  'Menjadi lembaga Pendidikan Anak Usia Dini (PAUD) yang unggul dalam membangun kemitraan sekolah dengan orangtua.',
];

const Visisdc = () => {
  return (
    <div className='w-full bg-white font-andika'>
      <div className='mt-5 font-andika sm:pl-20 p-10'>
        <div className='flex'>
          <img
            src={Plane}
            alt='Plane'
            className='sm:w-[40.026px] w-[30px] h-[30px]  sm:h-[40.026px]'
          />
          <p className='pl-2 text-[20px] sm:text-[24px] font-bold'>VISI</p>
        </div>
        <ul className='list-disc font-w-400 sm:leading-[40px] leading-[30px]  sm:w-100 text-[18px] sm:text-[20px] text-justify'>
          {vissionStatements.map((statement, index) => (
            <p key={index}>{statement}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Visisdc;
