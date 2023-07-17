import React from 'react';
import { image3 } from '../../assets/img/galery';
import { Whatsapp, Symbol } from '../../assets/img/icon';

const programs = [
  {
    title: 'Sekolah Anak',
    image: image3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.',
    additionalDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.',
    whatsappUrl: 'https://example.com/whatsapp',
    symbolUrl: 'https://example.com/symbol',
  },
];

const Detailprogram = () => {
  return (
    <div>
      {programs.map((program, index) => (
        <div
          key={index}
          className='my-[150px] font-andika text-justify px-10 sm:px-20'
        >
          <div className='pb-5 mt-10'>
            <p className='text-[#EF841A] text-[24px]'>{program.title}</p>
          </div>
          <div className='sm:flex'>
            <div>
              <img
                src={program.image}
                alt={`image${index}`}
                className='sm:w-[646px] h-[200px]  sm:h-[388px]'
              />
            </div>
            <div>
              <p className='text-[18px] leading-[30px] sm:text-[20px] mt-3 sm:w-[700px] sm:px-10  font-andika'>
                {program.description}
              </p>
            </div>
          </div>
          <div className='py-5 text-[18px] sm:text-[20px] sm:mr-10'>
            <p>{program.additionalDescription}</p>
          </div>
          <div className='flex text-[18px] sm:text-[20px] mt-5'>
            <div className='bg-[#3BB3C3] hover:bg-slate-500 px-5 items-center mr-2 sm:mr-10 rounded-3xl'>
              <a
                href={program.whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex'
              >
                <img src={Whatsapp} alt='Whatsapp' className='h-10 p-2' />
                <h3 className='py-2  text-white'>Konsultasi Sekarang</h3>
              </a>
            </div>
            <div className='border-2 hover:bg-slate-500  px-5 items-center mr-10 rounded-3xl'>
              <a
                href={program.symbolUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex'
              >
                <img src={Symbol} alt='Symbol' className='h-10 p-2' />
                <h3 className='py-2 hover:text-white'>Panduan Pendaftaran</h3>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detailprogram;
