import React from 'react';
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const coruselSectStyles = {
  section: {
    padding: '2rem 0',
  },
  h2: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  carouselItem: {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    flex: '1',
    paddingRight: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: {
    flex: '0 0 60vh',
    height: '40vh',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  cardText: {
    marginBottom: '1rem',
  },
};

const CoruselSect = () => {
  return (
    <div style={coruselSectStyles.section}>
      <Container>
        <h2 style={coruselSectStyles.h2}>Sistem Informasi Desa</h2>
        <Carousel>
          <Carousel.Item>
            <div style={coruselSectStyles.carouselItem}>
              <Card style={coruselSectStyles.card}>
                <div style={coruselSectStyles.cardContent}>
                  <Card.Title style={coruselSectStyles.cardTitle}>Pak Monti</Card.Title>
                  <Card.Text style={coruselSectStyles.cardText}>
                  PAKMONTI atau pasar kreatif monumen poncowatia adalah sebuah pasar kuliner yang ada di desa poncowati
                  </Card.Text>
                  <Button href='/pakmonti' variant="primary">Selengkapnya</Button>
                </div>
                <div style={coruselSectStyles.cardImage}>
                  <span>Placeholder</span>
                </div>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={coruselSectStyles.carouselItem}>
              <Card style={coruselSectStyles.card}>
                <div style={coruselSectStyles.cardContent}>
                  <Card.Title style={coruselSectStyles.cardTitle}>Makanan transad</Card.Title>
                  <Card.Text style={coruselSectStyles.cardText}>
                  Makam Transad adalah makam ........
                  </Card.Text>
                  <Button href='/makanan' variant="primary">Selengkapnya</Button>
                </div>
                <div style={coruselSectStyles.cardImage}>
                  <span>Placeholder</span>
                </div>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default CoruselSect;