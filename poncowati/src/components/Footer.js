import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const footerStyles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '2rem 0',
    borderTop: '2px solid #208327', // Green top border
  },
  logo: {
    height: '100px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left', // Align text to the left
  },
  h4: {
    fontSize: '2rem',
    fontWeight: '800', // Extra bold
    fontStyle: 'italic', // Italic
    color: '#208327',
  },
  p: {
    marginBottom: '0',
  },
};

const Footer = () => {
  return (
    <div style={footerStyles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <img src="img/logo-lamteng.png" alt="Logo" style={footerStyles.logo} />
          </Col>
          <Col xs={12} md={10} style={footerStyles.textContainer}>
            <h4 style={footerStyles.h4}>PEMERINTAH DESA PONCOWATI</h4>
            <p style={footerStyles.p}>Kecamatan Terbanggi Besar, Kabupaten Lampung Tengah, Provinsi Lampung</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;