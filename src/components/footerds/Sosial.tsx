import React from 'react';
import { logo3, logo4, logo6 } from '../../assets/img/icon';

const Sosial = () => {
  const socialMediaData = [
    { platform: 'Instagram', url: 'https://www.instagram.com/example/' },
    { platform: 'Facebook', url: 'https://www.facebook.com/example/' },
    { platform: 'Twitter', url: 'https://www.twitter.com/example/' },
  ];

  return (
    <div className='text-[16px] leading-normal not-italic'>
      <h4>SOSIAL MEDIA</h4>
      <ul className='mt-3 leading-[40px] '>
        {socialMediaData.map((social) => (
          <li className='flex' key={social.platform}>
            {social.platform === 'Instagram' && (
              <img src={logo6} alt='logo6' className='w-[24px] h-[24px] mt-2' />
            )}
            {social.platform === 'Facebook' && (
              <img src={logo4} alt='logo4' className='w-[24px] h-[24px] mt-2' />
            )}
            {social.platform === 'Twitter' && (
              <img src={logo3} alt='logo3' className='h-[24px] w-[24px] mt-2' />
            )}
            <a href={social.url} className='pl-2 hover:text-blue-500'>
              {social.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sosial;
