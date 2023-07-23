import React from 'react';
const data = [
  {
    title: 'Konvesional',
    paragraphs: [
      'Instruksi bersifat student centered',
      'Instruksi diberikan dalam kelompok kecil',
      'Instruksi diberikan dengan cara yang beragam (lecturing, hands-on, visual representations)',
      'Instruksi diberikan dengan cara yang beragam (lecturing, hands-on, visual representations)',
      'Guru memberikan beberapa pilihan tugas untuk siswa',
      'Selain menggunakan penilaian sumatif, guru menggunakan penilaian formatif untuk menyesuaikan instruksi pembelajarannya kepada siswa',
    ],
  },
];

const Tabelkurikulum2 = () => {
  return (
    <div className='font-andika sm:w-[503px]  w-[250px]'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='bg-[#EF841A] text-[18px] sm:text-[24px] text-center p-2'>
            <h3>{item.title}</h3>
          </div>
          <div className='space-y-2 text-[15px] sm:text-[20px]'>
            {item.paragraphs.map((paragraph, idx) => (
              <p key={idx} className='bg-[#FFF5EC] pt-2 px-2 sm:px-5'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabelkurikulum2;
