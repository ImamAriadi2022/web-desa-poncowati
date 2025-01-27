import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const informasiSectStyles = {
  section: {
    backgroundColor: 'white',
    padding: '2rem 0',
  },
  container: {
    backgroundColor: '#A9EEAA',
    borderRadius: '15px',
    padding: '2rem',
    textAlign: 'center',
  },
  h2: {
    color: 'black',
    textTransform: 'uppercase',
    marginBottom: '2rem',
    fontWeight: 'bold', // Bold
  },
  card: {
    margin: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '1rem',
    cursor: 'pointer',
  },
  cardImage: {
    height: '100px',
    marginBottom: '1rem',
  },
  cardTitle: {
    backgroundColor: '#208327',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600', // Semi-bold
    padding: '0.5rem',
    borderRadius: '5px',
  },
};

const cardData = [
  { title: 'Identitas Desa', image: 'img/logo-identitasDesa.png', link: '#identitas-desa' },
  { title: 'Aparatur Desa', image: 'img/logo-aparaturDesa.png', link: '#aparatur-desa' },
  { title: 'Statistik Wilayah', image: 'img/logo-statistikDesa.png', link: '#statistik-wilayah' },
  { title: 'Galeri Foto', image: 'img/logo-galeryDesa.png', link: '#galeri-foto' },
  { title: 'Bangun Desa', image: 'img/logo-bangunDesa.png', link: '#bangun-desa' },
  { title: 'Lapak Desa', image: 'img/logo-lapakDesa.png', link: '#lapak-desa' },
  { title: 'Peta Desa', image: 'img/logo-peta.png', link: '#peta-desa' },
  { title: 'Arsip Artikel', image: 'img/logo-arsip.png', link: '#arsip-artikel' },
  { title: 'Ruang Lapor', image: 'img/logo-lapor.png', link: '#ruang-lapor' },
];

const InformasiSect = () => {
  return (
    <div style={informasiSectStyles.section}>
      <Container style={informasiSectStyles.container}>
        <h2 style={informasiSectStyles.h2}>Sistem Informasi Desa</h2>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card style={informasiSectStyles.card} onClick={() => window.location.href = card.link}>
                <Card.Img variant="top" src={card.image} style={informasiSectStyles.cardImage} />
                <Card.Body>
                  <Card.Title style={informasiSectStyles.cardTitle}>{card.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InformasiSect;