import React from 'react';
import { artikel1 } from '../../assets/img/galery/index';
import Artikellainnya from './Artikellainnya';

const articles = [
  {
    id: 1,
    title: 'Beragam Manfaat Pendidikan Anak Usia Dini dan Kekurangannya',
    image: artikel1,
    publicationDate: '05 April, 2023',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
    ],
  },
];

const Detailartikel = () => {
  return (
    <div className='w-full bg-white font-andika py-32 lg:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px] '>
        <p className='text-[16px] px-7 py-3'>
          Beranda &gt; Artikel &gt; Detail{' '}
        </p>
      </div>
      {articles.map((article) => (
        <>
          <div key={article.id} className='p-10 sm:flex'>
            <img
              src={article.image}
              alt={article.image}
              className='w-[777.833px] h-[505.2px] rounded-xl'
            />
            <Artikellainnya />
          </div>
          <div className='pl-10 sm:w-[718px] justify-text-center '>
            <h3 className='xl:text-[36px] text-lg font-bold font-w-400  leading-[36px]'>
              {article.title}
            </h3>
            <p className='text-[#4F4F4F] my-3 text-sm sm:text-[24px] font-w-400  leading-[36px]'>
              {article.publicationDate}
            </p>
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className='text-[#4F4F4F] text-[24px]  mb-4 font-w-400  leading-[36px]'
              >
                {paragraph}
              </p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Detailartikel;
