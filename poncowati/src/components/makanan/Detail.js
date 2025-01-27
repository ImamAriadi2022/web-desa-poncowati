import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const detailStyles = {
  section: {
    padding: '2rem 0',
  },
  h4: {
    fontWeight: '800', // Extra bold
    fontStyle: 'italic', // Italic
    color: 'black',
    marginBottom: '1rem',
  },
  p: {
    marginBottom: '1rem',
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
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
};

const Detail = () => {
  return (
    <Container>
      <div style={detailStyles.section}>
        <Row>
          <Col xs={12} md={6} style={detailStyles.textLeft}>
            <h4 style={detailStyles.h4}>Judul Bagian Kiri</h4>
            <p style={detailStyles.p}>Ini adalah paragraf di bagian kiri. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={6}>
            <div style={detailStyles.imgPlaceholder}>
              <span>Placeholder</span>
            </div>
          </Col>
        </Row>
      </div>
      <div style={detailStyles.section}>
        <Row>
          <Col xs={12} md={6}>
            <div style={detailStyles.imgPlaceholder}>
              <span>Placeholder</span>
            </div>
          </Col>
          <Col xs={12} md={6} style={detailStyles.textRight}>
            <h4 style={detailStyles.h4}>Judul Bagian Kanan</h4>
            <p style={detailStyles.p}>Ini adalah paragraf di bagian kanan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Detail;