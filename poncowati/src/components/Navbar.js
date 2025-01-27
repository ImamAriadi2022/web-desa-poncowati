import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navbar.css'; // Import custom CSS file

const customStyles = {
  navbar: {
    height: '15vh',
    backgroundImage: 'url("img/bg-navbar.png")',
    backgroundSize: 'cover',
  },
  logo: {
    height: '15vh',
    marginRight: '20px',
    padding: '10px',
  },
  rightIcons: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  icon: {
    marginLeft: '10px',
    height: '70px',
  },
  icon2: {
    marginLeft: '10px',
    height: '60px',
  },
  dropdownToggle: {
    display: 'flex',
    alignItems: 'center',
  },
  dropdownMenu: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  navItem: {
    marginRight: '20px',
  },
};

const CustomNavbar = () => {
  return (
    <Navbar style={customStyles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="img/logo-transad.png" alt="Logo" style={customStyles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={<span style={customStyles.dropdownToggle}>Profil Desa <FaChevronDown /></span>} id="basic-nav-dropdown" style={customStyles.navItem}>
              <NavDropdown.Item href="#profil-wilayah">Profil Wilayah Desa</NavDropdown.Item>
              <NavDropdown.Item href="#sejarah-desa">Sejarah Desa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span style={customStyles.dropdownToggle}>Pemerintah Desa <FaChevronDown /></span>} id="basic-nav-dropdown" style={customStyles.navItem}>
              <NavDropdown.Item href="#visi-misi">Visi Misi Desa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span style={customStyles.dropdownToggle}>Data Desa <FaChevronDown /></span>} id="basic-nav-dropdown" style={customStyles.navItem}>
              <NavDropdown.Item href="#data-wilayah1">Data Wilayah Administrasi 1</NavDropdown.Item>
              <NavDropdown.Item href="#data-wilayah2">Data Wilayah Administrasi 2</NavDropdown.Item>
              <NavDropdown.Item href="#data-wilayah3">Data Wilayah Administrasi 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span style={customStyles.dropdownToggle}>Regulasi <FaChevronDown /></span>} id="basic-nav-dropdown" style={customStyles.navItem}>
              <NavDropdown.Item href="#produk-hukum">Produk Hukum</NavDropdown.Item>
              <NavDropdown.Item href="#informasi-publik">Informasi Publik</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={customStyles.rightIcons}>
            <Nav.Link href="#icon1">
              <img src="img/logo-lampung.png" alt="Icon 1" style={customStyles.icon} />
            </Nav.Link>
            <Nav.Link href="#icon2">
              <img src="img/logo-lamteng.png" alt="Icon 2" style={customStyles.icon2} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;