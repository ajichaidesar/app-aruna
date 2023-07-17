import React from 'react';
import Contact from './Contact';
import Sosialmendia from './Sosialmendia';

const Map: React.FC = () => {
  return (
    <div className='flex flex-col-reverse  mt-5 sm:flex-row px-10 sm:px-20  my-5 sm:my-10 '>
      <div className=' sm:w-[718px]  h-[300px] sm:h-[500px]  rounded-xl'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5612904928435!2d99.06898617670113!3d2.941568655230535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031844d040a599b%3A0x5e058203c42fad47!2sFoto%20Kopi%20Juntak%20Star!5e0!3m2!1sen!2sid!4v1619868249936!5m2!1sen!2sid'
          width='100%'
          height={450}
          loading='lazy'
        ></iframe>
      </div>
      <div className='flex flex-col   mb-3'>
        <div className='w-170 sm:w-[317px]  sm:h-[80px]   gap-8 sm:px-5 mt-2 my-1 sm:mx-1'>
          <Contact />
          <Sosialmendia />
        </div>
      </div>
    </div>
  );
};

export default Map;
