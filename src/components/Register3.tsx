import React, { useState } from 'react';

const Register3 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
  };
  return (
    <div className='w-full mt-10 bg-[#EF841A] p-20  flex justify-center items-center '>
      <div className='bg-white rounded-xl sm:p-5 sm:mt-10 px-[40px] sm:px-10 shadow-md sm:w-[620px] sm:h-[600px]'>
        <h2 className='text-lg sm:text-[24px] mt-10 text-center font-bold mb-6'>
          Daftarkan Dirimu Sekarang
        </h2>
        <form
          onSubmit={handleSubmit}
          className='sm:w-[500px] w-[300px] sm:mt-12 sm:ml-5'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-[16px] font-bold mb-2 '
              htmlFor='name'
            >
              Nama Lengkap
            </label>
            <input
              className='appearance-none border text-[16px] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Masukkan Nama Lengkap'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-[16px] font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='appearance-none border text-[16px] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Masukkan Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-[16px] font-bold mb-2'
              htmlFor='password'
            >
              No. Handphone
            </label>
            <input
              className='appearance-none border rounded-lg text-[16px] w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='number'
              type='number'
              placeholder='Masukkan No. Handphone'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='text-center bg-[#3BB3C3] hover:bg-gray-500 my-10 sm:mt-10 rounded-xl'>
            <button
              className=' text-white sm:text-[24px] text-[18px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register3;
