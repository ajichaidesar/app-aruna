import React from 'react';
import { Plane } from '../../assets/img/icon';

const vissionStatements = [
  'Menjadi lembaga Pendidikan Anak Usia Dini (PAUD) yang unggul dalam membangun kemitraan sekolah dengan orangtua.',
];

const Visiaruna = () => {
  return (
    <div className='w-full bg-white'>
      <div className='mt-5 sm:pl-20 pl-6 pr-5'>
        <div className='flex mb-5 pl-2'>
          <img src={Plane} alt='Plane' className=' sm:w-[40.026px] sm:h-[40.026px] h-8 w-8' />
          <p className='sm:pl-5 pl-3 text-[20px] sm:text-[24px] font-bold'>VISI</p>
        </div>
        <ul className='list-disc px-2 sm:w-100 text-[18px] sm:text-[20px] text-justify'>
          {vissionStatements.map((statement, index) => (
            <p key={index}>{statement}</p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Visiaruna;
