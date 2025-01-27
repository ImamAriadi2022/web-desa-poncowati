import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const petaStyles = {
  section: {
    padding: '2rem 0',
  },
  h3: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: '2rem',
  },
  iframe: {
    width: '100%',
    height: '400px',
    border: 'none',
    borderRadius: '10px',
  },
  card: {
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'left', // Align text to the left
  },
  cardText: {
    marginBottom: '0.5rem',
    textAlign: 'left', // Align text to the left
  },
};

const Peta = () => {
  return (
    <Container>
      <div style={petaStyles.section}>
        <h3 style={petaStyles.h3}>Peta Lokasi</h3>
        <Row>
          <Col xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.918398839676!2d-122.084249684692!3d37.421999979825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              style={petaStyles.iframe}
              allowFullScreen=""
              loading="lazy"
              title="Peta Lokasi"
            ></iframe>
          </Col>
          <Col xs={12} md={6}>
            <Card style={petaStyles.card}>
              <Card.Body>
                <Card.Title style={petaStyles.cardTitle}>Lokasi Kawasan</Card.Title>
                <Card.Text style={petaStyles.cardText}>
                  Desa Poncowati, Kecamatan Terbanggi Besar, Kabupaten Lampung Tengah, Provinsi Lampung
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={petaStyles.card}>
              <Card.Body>
                <Card.Title style={petaStyles.cardTitle}>Aksesibilitas</Card.Title>
                <Card.Text style={petaStyles.cardText}>
                  Desa Poncowati dapat diakses melalui jalan utama yang menghubungkan dengan kota-kota besar di sekitarnya. Terdapat fasilitas transportasi umum yang memadai untuk memudahkan akses ke desa ini.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Peta;