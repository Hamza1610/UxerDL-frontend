import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Navigation = () => {
  const [offcanvasStyle, setOffcanvasStyle] = useState({color: 'white'})
  return (
    <Navbar expand="md">
      <Container className='justify-content-between'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-lg`}
          aria-labelled-by={`offcanvasNavbarLabel-expand-lg`}
          placement='end'
          onEntering={()=> setOffcanvasStyle({color: 'black'})}
          onExiting={()=> setOffcanvasStyle({color: 'white'})}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='justify-content-end'>
              <Nav fill variant='pills' defaultActiveKey='/'>
                <Nav.Link  href='#'className='me-3' style={offcanvasStyle}>Home</Nav.Link>
                <Nav.Link href='#categories' className='me-3' style={offcanvasStyle}>Book categories</Nav.Link>
                <Nav.Link href='#about' className='me-4' style={offcanvasStyle}>About</Nav.Link>
                <Button href='/sign-up' bg="primary" as='a' variant='outline-primary' style={offcanvasStyle}>Sign up</Button>
              </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
