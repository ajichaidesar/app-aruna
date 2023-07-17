import React from 'react';
import { telp, sms } from '../../assets/img/icon';

const Contact = () => {
  const contactData = [
    { type: 'phone', value: '082211223399', url: 'tel:082211223399' },
    {
      type: 'email',
      value: 'rumaharuna@gmail.com',
      url: 'mailto:rumaharuna@gmail.com',
    },
  ];

  return (
    <div className='sm:pl-5 mb-3 font-andika'>
      <h3 className='text-lg sm:text-[24px]'>Kontak Kami</h3>
      <ul className='sm:mt-5 mt-2'>
        {contactData.map((contact, index) => (
          <li key={index} className='pb-2 flex'>
            {contact.type === 'phone' ? (
              <img src={telp} alt='telp' className='  sm:text-[32px] mt-1' />
            ) : (
              <img
                src={sms}
                alt='sms'
                className='text-[24px] sm:text-[32px] mt-1'
              />
            )}
            <a
              href={contact.url}
              className='hover:text-blue-500 pl-2 text-[20px] sm:text-[24px]'
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
