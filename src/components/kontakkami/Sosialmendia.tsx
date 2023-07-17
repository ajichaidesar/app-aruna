import React from 'react';
import { ig, fb, twitter } from '../../assets/img/icon';

const SocialMedia = () => {
  const socialMediaData = [
    {
      name: 'Instagram',
      icon: ig,
      url: 'https://www.instagram.com',
    },
    {
      name: 'Facebook',
      icon: fb,
      url: 'https://www.facebook.com',
    },
    {
      name: 'Twitter',
      icon: twitter,
      url: 'https://www.twitter.com',
    },
  ];

  return (
    <div className='sm:pl-5 mb-3 mt-5 font-andika'>
      <h3 className='text-lg sm:text-[24px] text-black'>SOSIAL MEDIA</h3>
      <ul className='sm:pl-2 sm:mt-5 mt-2'>
        {socialMediaData.map((item, index) => (
          <li className='pb-2 flex' key={index}>
            <img
              src={item.icon}
              alt={item.name}
              className='w-[32px] h-[32px] mt-1'
            />
            <a
              href={item.url}
              className='hover:text-blue-500 pl-2 text-md sm:text-[24px]'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
