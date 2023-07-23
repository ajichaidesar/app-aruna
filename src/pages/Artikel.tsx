import React from 'react';
import { Link } from 'react-router-dom';
// import Detailartikel from '../components/artikels/Detailartikel';
import { image10 } from '../assets/img/galery';

const artikel = [
  {
    id: 1,
    image: image10,
    date: '05 April 2023',
    title: 'Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya',
    description:
      'Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres, dan menyelesaikan masalah.',
  },
  {
    id: 1,
    image: image10,
    date: '05 April 2023',
    title: 'Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya',
    description:
      'Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres, dan menyelesaikan masalah.',
  },
  {
    id: 1,
    image: image10,
    date: '05 April 2023',
    title: 'Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya',
    description:
      'Pendidikan anak usia dini (PAUD) dapat membantu proses perkembangan anak lebih optimal. Beberapa manfaat yang bisa didapat oleh anak yang mengikuti PAUD antara lain belajar bersosialisasi dengan teman sebayanya, mengelola stres, dan menyelesaikan masalah.',
  },
];

const Artikel = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='w-full font-andika bg-white py-32 sm:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-md sm:text-[16px] text-white pl-4 sm:pl-[70px]'>
          Beranda &gt; Artikel
        </p>
      </div>
      <p className='sm:text-[36px] text-2xl sm:px-20 px-7 sm:py-10 pt-5 text-[#EF841A]'>
        Artikel
      </p>
      {artikel.map((artikel) => (
        <div
          key={artikel.id}
          className='sm:px-20 p-7 sm:flex'
          onClick={handleNavClick}
        >
          <img
            src={artikel.image}
            alt='artikel'
            className='rounded-md sm:w-[487.5px] sm:h-[315.75px] w-[300px] h-[200px]'
          />
          <div className='sm:mx-10 pt-5'>
            <p className='text-gray-400 xl:text-[16px] text-xs'>
              {artikel.date}
            </p>
            <h3 className='sm:text-[32px] text-[20px] font-bold my-2 sm:my-5'>
              {artikel.title}
            </h3>
            <p className='text-[15px] text-justify k sm:text-[16px]'>
              {artikel.description}{' '}
              <Link to='Detail-artikel' className='text-blue-400'>
                Baca selengkapnya
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artikel;
