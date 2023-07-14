import React from 'react';
import { Link } from 'react-router-dom';
import Detailartikel from '../components/artikels/Detailartikel';
import { image10 } from '../assets/img/galery';

const articles = [
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
  return (
    <div className='w-full font-andika bg-white py-32 lg:py-50'>
      <div></div>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-md sm:text-[16px] py-4 px-10'>
          Beranda &gt; Artikel
        </p>
      </div>
      <p className='sm:text-4xl text-2xl sm:px-20 px-10 sm:py-10 pt-5 text-[#EF841A]'>
        Artikel
      </p>
      {articles.map((article) => (
        <div key={article.id} className='sm:px-20 p-5 sm:flex'>
          <img src={article.image} alt='artikel' className='rounded-md' />
          <div className='sm:mx-10 pt-5'>
            <p className='text-gray-400 xl:text-lg text-xs'>{article.date}</p>
            <h3 className='sm:text-2xl text-md font-bold my-5'>
              {article.title}
            </h3>
            <p className='text-sm sm:text-xl'>
              {article.description}{' '}
              <Link to='Detailartikel' className='text-blue-400'>
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
