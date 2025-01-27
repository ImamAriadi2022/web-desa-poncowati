import React from 'react';
import Hero from '../components/pakmonti/Hero';
import Footer from '../components/Footer';
import CustomNavbar from '../components/Navbar';
import Detail from '../components/pakmonti/Detail';
import Pengelola from '../components/pakmonti/Pengelola';
import Peta from '../components/pakmonti/Peta';

const PakMonti = () => {
  return (
    <div>
        <CustomNavbar />
        <Hero />
        <Detail />
        <Pengelola />
        <Peta />
        <Footer />
    </div>
  );
};

export default PakMonti;