import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" sticky="top" bg="light" variant="light" collapseOnSelect>
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand href="#home">Ana Bykova Logo</Navbar.Brand>

        {/* Toggler button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

/*
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle collapse on button click
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar after clicking a link
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Ana Bykova Logo</a>

        /* Toggle button 
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        /* Collapse 
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" href="#home" onClick={closeNavbar}>
              Home
            </a>
            <a className="nav-link" href="#about" onClick={closeNavbar}>
              About Me
            </a>
            <a className="nav-link" href="#projects" onClick={closeNavbar}>
              Projects
            </a>
            <a className="nav-link" href="#contact" onClick={closeNavbar}>
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
*/