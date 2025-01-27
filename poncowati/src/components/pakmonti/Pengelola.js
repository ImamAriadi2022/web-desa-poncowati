import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const pengelolaStyles = {
  section: {
    padding: '2rem 0',
  },
  h3: {
    textAlign: 'center',
    color: 'black',
    marginBottom: '2rem',
  },
  card: {
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    width: '100%',
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
  imgPlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
};

const Pengelola = () => {
  return (
    <Container>
      <div style={pengelolaStyles.section}>
        <Row>
          <Col xs={12}>
            <Card style={pengelolaStyles.card}>
                  <h3 style={pengelolaStyles.h3}>Pengelola Pak Monti</h3>
                <Row>
                <Col xs={12} md={4}>
                  <div style={pengelolaStyles.imgPlaceholder}>
                    <span>Placeholder</span>
                  </div>
                </Col>
                <Col xs={12} md={8}>
                  <Card.Body>
                    <Card.Title style={pengelolaStyles.cardTitle}>Nama: John Doe</Card.Title>
                    <Card.Text style={pengelolaStyles.cardText}>Umur: 30</Card.Text>
                    <Card.Text style={pengelolaStyles.cardText}>Alamat: Jl. Poncowati No. 123</Card.Text>
                    <Card.Text style={pengelolaStyles.cardText}>Domisili: Lampung Tengah</Card.Text>
                    <Card.Text style={pengelolaStyles.cardText}>Pesan: Selalu bersemangat dalam membangun desa.</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Tambahkan kartu identitas lain di sini jika diperlukan */}
        </Row>
      </div>
    </Container>
  );
};

export default Pengelola;