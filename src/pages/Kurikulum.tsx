import React from 'react';
import { Plane } from '../assets/img/icon';
import Tabelkurikulum from '../components/rumaharuna/Tabelkurikulum';

const Kurikulum = () => {
  const curriculumData = [
    {
      id: 1,
      title: 'HOLISTIC LEARNING',
      description:
        'Pendekatan pembelajaran yang memberikan kesempatan anak berkembang secara utuh. Utuh dalam arti seluruh aspek perkembangan anak, baik moral, fisik motorik, kognitif, bahasa, sosial emosional dan seni dikembangkan sesuai dengan usianya. Pengembangan keenam aspek perkembangan yang disebutkan diatas didasarkan pada sebuah standar yang dikeluarkan pemerintah melalui Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia Nomor 137 Tahun 2014 tentang Standar Nasional Pendidikan Anak Usia Dini, standar ini disebut dengan istilah STPPA (Standar Tingkat Pencapaian Perkembangan Anak).',
    },
    {
      id: 2,
      title: 'DIFFERENTIATED LEARNING',
      description:
        'Proses belajar mengajar dimana guru melakukan pembedaan dalam penyampaian materi, proses dan produk pembelajaran berdasarkan kesiapan, minat dan kebutuhan anak. Tujuannya adalah menumbuhkan rasa senang dalam belajar guna mengoptimalkan perkembangan setiap anak. Dalam pendekatan ini, setiap anak memiliki kurikulum mereka masing-masing yang disebut dengan Menu Belajar. Karena itulah kami memilih pendekatan Montessori sebagai salah satu pendekatan yang mendasari penyusunan kurikulum di Rumah Aruna.',
    },
    {
      id: 3,
      title: 'MONTESSORI',
      description:
        'Salah satu pendekatan dalam pendidikan yang filosofinya didasarkan pada rasa hormat pada keunikan setiap anak. Setiap anak diberi kebebasan dalam belajar tanpa batasan-batasan. Pendekatan ini tidak membandingkan seorang anak dengan standar pengukuran yang biasa diterapkan pada sistem pendidikan konvensional. Tujuan utama pendekatan Montessori adalah memberikan lingkungan yang memberikan stimulasi anak untuk bereksplorasi dan belajar tanpa tekanan. Hasil akhir yang diharapkan adalah terbentuknya kesenangan akan belajar dalam diri anak. Pendekatan Montessori memiliki 5 area pembelajaran yang akan dieksplorasi anak, yaitu: Practical Life, Sensorial, Mathematics, Language  dan Cultural.',
    },
    {
      id: 4,
      title: 'MULTIPLE INTELLIGENCES',
      description:
        'Kecerdasan Majemuk yang dikemukakan oleh Howard Gardner adalah teori yang mengatakan bahwa semua orang memiliki kecerdasan yang berbeda-beda.',
    },
  ];

  return (
    <div className='w-full bg-white font-andika py-32 lg:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-xs'>Beranda &gt; Tentang Kami &gt; Kurikulum</p>
      </div>
      <div className='px-5 pt-3 mb-10 sm:mb-5'>
        <p className='text-[#EF841A] text-lg sm:text-xl px-2'>
          Kurikulum Rumah Aruna
        </p>
      </div>
      <div className='px-2 sm:px-10'>
        {curriculumData.map((item) => (
          <div className='mb-7' key={item.id}>
            <div className='flex px-5'>
              <img src={Plane} alt='plane' className='h-6 sm:h-8' />
              <h3 className='pl-3 text-sm  font-bold'>{item.title}</h3>
            </div>
            <div className='text-justify px-7 sm:px-5 mt-2 '>
              <p className='text-xs sm:text-sm '>{item.description}</p>
            </div>
          </div>
        ))}
        <Tabelkurikulum />
      </div>
    </div>
  );
};

export default Kurikulum;
