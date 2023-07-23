import React from 'react';
import Hero from '../components/beranda/Hero';
import Info from '../components/beranda/Info';
import Layanan from '../components/beranda/Layanan';
import Kegiatanaruna from '../components/rumaharuna/Kegiatanaruna';
import Paq from '../components/Paq';

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Layanan />
      <Kegiatanaruna />,
      <Paq />
    </div>
  );
};

export default Home;
