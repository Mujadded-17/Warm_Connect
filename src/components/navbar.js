import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"; 
import styles from '../css/myNav.module.css';

const NavBarComponent = () => {
  const navigate = useNavigate();

  // Handlers
  const handleStoriesClick = () => {
    navigate("/"); // Go to home
    setTimeout(() => {
      const el = document.getElementById("testimonials");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleRequestsClick = () => {
    navigate("/browse");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Navbar expand="lg" className={`${styles.myColor} bg-body-tertiary`}>
      <Container>
        <Navbar.Brand as={Link} to="/">Warm Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleRequestsClick}>Requests</NavDropdown.Item>
              <NavDropdown.Item onClick={handleStoriesClick}>Stories</NavDropdown.Item>
              <NavDropdown.Item onClick={handleContactClick}>Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button
            as={Link}
            to="/login"
            className={styles.loginBtn}
            variant="outline-primary"
          >
            Login
          </Button>

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
