import React from 'react';

const heroStyles = {
  '@import': 'url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap")',
  hero: {
    height: '85vh',
    backgroundColor: '#DCFDDD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#208327',
    fontFamily: "'Merriweather Sans', sans-serif",
  },
  heroContent: {
    maxWidth: '600px',
  },
  h2: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '800', // Extra bold
    fontStyle: 'italic', // Italic
  },
  p: {
    fontSize: '1.5rem',
    fontWeight: 'bold', // Bold
    fontStyle: 'italic', // Italic
    marginBottom: '1rem',
  },
  image: {
    width: '100%',
    maxWidth: '1000px',
    height: 'auto',
  },
};

const Hero = () => {
  return (
    <div style={heroStyles.hero}>
      <div style={heroStyles.heroContent}>
        <h2 style={heroStyles.h2}>Pak Monti </h2>
        <p style={heroStyles.p}>Temukan Informasi Publik Terkini Mengenai Desa Poncowati</p>
        <img src="img/hero-pakmonti.png" alt="Desa Poncowati" style={heroStyles.image} />
      </div>
    </div>
  );
};

export default Hero;