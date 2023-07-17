import Register3 from './Register3';
import { Service } from '../assets/img/galery';

import { Plane, calendar } from '../assets/img/icon/index';

const Register = () => {
  const workshops = [
    {
      id: 1,
      title: 'Judul Workshop',
      date: '20 Maret 2023 09:00 AM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.',
      requirements: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
      image: Service,
    },
  ];

  return (
    <div className='w-full bg-white py-32 font-andika lg:py-50'>
      <div className='bg-[#EF841A] w-full p-3 mt-[-24px]'>
        <p className='text-white pl-5 sm:pl-[70px] text-[16px]'>
          Beranda &gt; Aruna SDC &gt; Workshop
        </p>
      </div>
      <hr className='my-6 border-none' />
      <div className='px-10 sm:px-0'>
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className='flex sm:flex-row flex-col items-start mb-6'
          >
            <img
              src={workshop.image}
              alt='workshop'
              className='sm:pl-20 sm:w-[650px] sm:h-[432.908px]'
            />
            <div className='sm:pl-10 mt-5 sm:mt-0'>
              <h2 className='sm:text-[32px] text-[28px] font-bold mb-2'>
                {workshop.title}
              </h2>
              <div className='flex my-5 sm:my-10'>
                <img
                  src={calendar}
                  alt='calendar'
                  className='sm:w-[32px] sm:h-[32px] w-[28px] h-[28px]'
                />
                <p className='pl-3 sm:mt-2 mt-1 text-gray-400 sm:text-[16px] text-[16px]'>
                  {workshop.date}
                </p>
              </div>
              <div className='text-gray-600 sm:text-[20px] text-[18px]  text-left'>
                <h3>Deskripsi: </h3>
                <p className='sm:w-[630px] leading-[40px]'>
                  {workshop.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-10 sm:pl-10 pl-0 sm:mx-10'>
          <div className='flex '>
            <img
              src={Plane}
              alt='Plane'
              className='sm:w-[40.03px] sm:h-[40.03px] w-[30px] h-[30px]'
            />
            <p className='font-bold sm:text-[24px] text-[22px] pl-3'>
              PERSYARATAN PENDAFTARAN
            </p>
          </div>
          {workshops.map((workshop) => (
            <ul
              key={workshop.id}
              className='list-disc mx-10 sm:w-100 text-[20px] leading-[30px] sm:leading-[40px]'
            >
              {workshop.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <Register3 />
    </div>
  );
};

export default Register;
