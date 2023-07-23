import React from 'react';
import Tabelkurikulum2 from './Tabelkurikulum2';

const Tabelkurikulum = () => {
  const data = [
    {
      classType: 'Konvensional',
      firstParagraph:
        'Perbedaan kelas yang menerapkna Diferensiasi Belajar dan kelas Konvensional',
      paragraphs: [
        'Instruksi bersifat teacher centered',
        'Instruksi diberikan kepada siswa dalam kelompok besar',
        'Jika guru membagi siswa dalam kelompok. Kelompok biasanya dibagi berdasarkan kemampuan akademik/prestasi siswa (kurang berprestasi, sedang dan sangat berprestasi)',
        'Instruksi diberikan satu arah (ceramah/lecturing)',
        'Guru memberikan tugas yang sama untuk semua siswa',
        'Guru menggunakan penilaian sumatif untuk menilai hasil belajar siswa',
      ],
    },
  ];

  return (
    <div className='font-andika my-5 sm:pl-[20px] px-[28px] '>
      <div className='text-[15px] sm:text-[20px] '>
        <p>
          {data.map((item, index) => (
            <span key={index}>
              {index !== 0 && <br />}
              {item.firstParagraph}
            </span>
          ))}
        </p>
      </div>
      <div className='flex mt-5  sm:mr-[150px] '>
        {data.map((item, index) => (
          <div key={index}>
            <div
              className={`bg-[#3BB3C3] text-[18px] sm:text-[24px] text-center p-2 ${item.classType
                .toLowerCase()
                .replace(/\s/g, '-')}`}
            >
              <h3>{item.classType}</h3>
            </div>
            <div className='space-y-2 text-[15px] sm:text-[20px] sm:w-[503px] w-[250px] '>
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  className={`bg-[#E7FCFF] pt-2 px-2 sm:px-5`}
                  key={paragraphIndex}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
        <Tabelkurikulum2 />
      </div>
    </div>
  );
};

export default Tabelkurikulum;
