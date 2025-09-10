import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"; // Profile icon
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
            <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Correct About link */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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

          {/* Profile icon button */}
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
