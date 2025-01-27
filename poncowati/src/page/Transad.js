import React from 'react';
import Hero from '../components/makanan/Hero';
import Detail from '../components/pakmonti/Detail';
import Peta from '../components/makanan/Peta';
import Pengaruh from '../components/makanan/Pengaruh';
import Footer from '../components/Footer';
import CustomNavbar from '../components/Navbar';

const Transad = () => {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Detail />
      <Pengaruh />
      <Peta />
      <Footer />
    </div>
  );
};

export default Transad;