import React from 'react';
import { logo5, logo2 } from '../../assets/img/icon';

const Kontak = () => {
  const contactData = [
    { title: 'phone', telp: '082211223399' },
    { type: 'email', email: 'rumaharuna@gmail.com' },
  ];

  return (
    <div className='text-[16px] font-andika leading-normal font-w-400 not-italic'>
      <h4>KONTAK KAMI</h4>
      <ul className='mt-3 leading-[40px]'>
        {contactData.map((contact, index) => (
          <li className='flex' key={index}>
            {contact.title === 'phone' ? (
              <img src={logo5} alt='logo5' className='h-[24px] w-[24px] mt-2' />
            ) : (
              <img src={logo2} alt='logo2' className='h-[24px] w-[24px] mt-2' />
            )}
            {contact.title === 'phone' ? (
              <a
                href={`https://wa.me/${contact.telp}`}
                className='pl-2 hover:text-blue-500'
              >
                {contact.telp}
              </a>
            ) : (
              <a
                href={`mailto:${contact.email}`}
                className='pl-2 text-[16px] hover:text-blue-500'
              >
                {contact.email}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kontak;
