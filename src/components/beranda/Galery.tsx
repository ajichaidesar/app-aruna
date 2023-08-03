import React from 'react';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from '../../assets/img/galery';
const Gallery = () => {
  const images = [
    { id: 1,
      gambar: image1 
    },
    { id: 2,
      gambar: image2 },
    { id: 3,
      gambar: image3 },
    { id:3,
      gambar: image4 },
    { id:4 ,
      gambar: image3 },
    { id:5,
      gambar: image5 },
  ];

  return (
    <div className='max-w-7xl pt-10 mx-auto'>
      <div className='text-3xl text-center z-10'>
        <h1 className='font-andika'>Galeri Rumah Aruna</h1>
      </div>
      <div className='mt-3 p-5 grid grid-cols-6 sm:grid-cols-6 gap-3'>
        {images.map((image) => (
          <div key={image.id} className='h-15 rounded-lg col-span-2'>
            <img
              className='object-cover h-full'
              src={image.gambar}
              alt={`gambar${image.id + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
