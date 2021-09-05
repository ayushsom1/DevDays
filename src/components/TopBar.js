import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopBar = () => {
  return (
    <>

      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Developer Days</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="Skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default TopBar
