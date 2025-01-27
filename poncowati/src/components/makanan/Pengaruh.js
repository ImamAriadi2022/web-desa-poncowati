import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const pengaruhStyles = {
  section: {
    padding: '2rem 0',
  },
  h3: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  card: {
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  cardImage: {
    height: '150px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
};

const Pengaruh = () => {
  return (
    <Container>
      <div style={pengaruhStyles.section}>
        <h3 style={pengaruhStyles.h3}>Orang yang Berpengaruh</h3>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col xs={12} md={3}>
                <Card style={pengaruhStyles.card}>
                  <div style={pengaruhStyles.cardImage}>
                    <span>Placeholder</span>
                  </div>
                  <Card.Body>
                    <Card.Title style={pengaruhStyles.cardTitle}>Nama 1</Card.Title>
                    <Card.Text>Deskripsi singkat tentang orang yang berpengaruh 1.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={3}>
                <Card style={pengaruhStyles.card}>
                  <div style={pengaruhStyles.cardImage}>
                    <span>Placeholder</span>
                  </div>
                  <Card.Body>
                    <Card.Title style={pengaruhStyles.cardTitle}>Nama 2</Card.Title>
                    <Card.Text>Deskripsi singkat tentang orang yang berpengaruh 2.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={3}>
                <Card style={pengaruhStyles.card}>
                  <div style={pengaruhStyles.cardImage}>
                    <span>Placeholder</span>
                  </div>
                  <Card.Body>
                    <Card.Title style={pengaruhStyles.cardTitle}>Nama 3</Card.Title>
                    <Card.Text>Deskripsi singkat tentang orang yang berpengaruh 3.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={3}>
                <Card style={pengaruhStyles.card}>
                  <div style={pengaruhStyles.cardImage}>
                    <span>Placeholder</span>
                  </div>
                  <Card.Body>
                    <Card.Title style={pengaruhStyles.cardTitle}>Nama 4</Card.Title>
                    <Card.Text>Deskripsi singkat tentang orang yang berpengaruh 4.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          {/* Tambahkan lebih banyak Carousel.Item jika diperlukan */}
        </Carousel>
      </div>
    </Container>
  );
};

export default Pengaruh;