import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pagesCss/HvtHeader.css';

export const HvtHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-light">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Holy Vrindavan Tour shashank"
            className="rounded-circle"
            style={{ maxHeight: '60px', marginRight: '10px',width:"60px" }}
          />
          <h3 className="mb-0 h5">Holy Vrindavan Tour</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/destinations">
                Destinations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className='d-none d-sm-block d-md-none d-lg-none'>
              <Nav.Link as={Link} to="/login">
                Admin
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
