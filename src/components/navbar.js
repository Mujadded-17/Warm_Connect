import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import styles from '../css/myNav.module.css';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className={`${styles.myColor} bg-body-tertiary`}>
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/">Warm Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            {/* Updated Dropdown */}
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/requests">Requests</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stories">Stories</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Login button */}
          <Button
            as={Link}
            to="/login"
            className={styles.loginBtn}
            variant="outline-primary"
          >
            Login
          </Button>

          {/* Profile icon */}
          <Button
            as={Link}
            to="/profile"
            variant="link"
            className="ms-2 p-0"
            style={{ fontSize: "1.8rem", color: "#000" }}
          >
            <CgProfile />
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
