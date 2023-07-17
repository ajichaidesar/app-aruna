import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Message:', message);
  };

  return (
    <div className='sm:flex mt-[200px] sm:mt-0 px-5 sm:px-10  font-andika '>
      <div className='mt-500 pl-10 w-[500px]'>
        <p className='sm:text-[32px] text-lg font-bold '>
          Anda memiliki pertanyaan ?
        </p>
        <p className='sm:text-[20px] text-[#828282] mt-3'>
          kirim pesan, dan kami akan menjawab pertanyaan anda
        </p>
      </div>
      <div className='bg-white p-5 sm:p-20 flex justify-center items-center h-7xl '>
        <div className='bg-white rounded-xl p-8  shadow-xl w-[500px] '>
          <h2 className='text-2xl text-center font-bold mb-6'>Hubungi Kami</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='name'
              >
                Nama Lengkap
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Masukkan Nama Lengkap'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Masukkan Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                No. Handphone
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='number'
                type='number'
                placeholder='Masukkan No. Handphone'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='password'
              >
                Pesan
              </label>
              <textarea
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                placeholder='Masukkan Pesan Anda'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className=' text-center bg-[#3BB3C3] hover:bg-slate-500 rounded-xl'>
              <button type='submit' className='p-3 font-bold '>
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
