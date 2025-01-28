import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h2 style={heroStyles.h2}>Makanan Transad</h2>
        <p style={heroStyles.p}>Temukan Informasi Publik Terkini Mengenai Desa Poncowati</p>
        <Carousel>
          <Carousel.Item>
            <img src="img/hero-pakmonti.png" alt="Desa Poncowati" style={heroStyles.image} />
          </Carousel.Item>
          <Carousel.Item>
            <div style={heroStyles.image}>
              <span>Placeholder 2</span>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={heroStyles.image}>
              <span>Placeholder 3</span>
            </div>
          </Carousel.Item>
          {/* Tambahkan lebih banyak Carousel.Item jika diperlukan */}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;