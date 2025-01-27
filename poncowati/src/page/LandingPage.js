import React from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import InformasiSect from '../components/InformasiSect';
import CoruselSect from '../components/CoruselSect';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
        <CustomNavbar />
        <Hero />
        <InformasiSect />
        <CoruselSect />
        <Footer />
      {/* Add other components or content for the landing page here */}
    </div>
  );
};

export default LandingPage;