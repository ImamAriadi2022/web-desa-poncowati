import React from 'react';

const heroStyles = {
  '@import': 'url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap")',
  hero: {
    height: '85vh',
    backgroundImage: 'url("img/bg-hero.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  p: {
    paddingTop: '2rem',
    paddingButtom: 'none',
    marginButtom: 'none',
  },
  h1: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: '800', // Extra bold
    fontStyle: 'italic', // Italic
  },
  h3: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  searchEngine: {
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    padding: '0.5rem',
    marginRight: '0.5rem',
    border: 'none',
    borderRadius: '5px',
    width: '70%',
  },
  select: {
    padding: '0.5rem',
    border: 'none',
    borderRadius: '5px',
    width: '30%',
  },
  mainPageButton: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    color: '#208327',
    textDecoration: 'none',
    borderRadius: '5px',
    border: '2px solid #208327',
    transition: 'background-color 0.3s, color 0.3s',
  },
  mainPageButtonHover: {
    backgroundColor: '#208327',
    color: 'white',
  },
};

const Hero = () => {
  return (
    <div style={heroStyles.hero}>
      <div style={heroStyles.heroContent}>
        <h1 style={heroStyles.h1}>Portal Desa Poncowati</h1>
        <h3 style={heroStyles.h3}>Kec. Terbanggi Besar Kab. Lampung Tengah</h3>
        <h3 style={heroStyles.h3}>Provinsi Lampung</h3>
        <p style={heroStyles.p}>Temukan Informasi Publik Terkini Mengenai Desa Poncowati</p>
        <div style={heroStyles.searchEngine}>
          <input type="text" placeholder="Search..." style={heroStyles.input} />
          <select style={heroStyles.select}>
            <option value="all">All</option>
            <option value="profil">Profil Desa</option>
            <option value="pemerintah">Pemerintah Desa</option>
            <option value="data">Data Desa</option>
            <option value="regulasi">Regulasi</option>
          </select>
        </div>
        <a href="#main-page" style={heroStyles.mainPageButton} onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = heroStyles.mainPageButtonHover.backgroundColor;
          e.currentTarget.style.color = heroStyles.mainPageButtonHover.color;
        }} onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = heroStyles.mainPageButton.backgroundColor;
          e.currentTarget.style.color = heroStyles.mainPageButton.color;
        }}>Kunjungi Halaman Utama</a>
      </div>
    </div>
  );
};

export default Hero;