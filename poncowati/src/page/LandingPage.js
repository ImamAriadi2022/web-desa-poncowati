import React from 'react';
import CustomNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import InformasiSect from '../components/InformasiSect';

const LandingPage = () => {
  return (
    <div>
        <CustomNavbar />
        <Hero />
        <InformasiSect />
      {/* Add other components or content for the landing page here */}
    </div>
  );
};

export default LandingPage;