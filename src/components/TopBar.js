import React from 'react';
import { Nav } from 'react-bootstrap';

const TopBar = () => {
  return (
    <>
      <div className='header2'>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#skill-section">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ayush Som</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav classNameName="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skill-section">Skills</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Download Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  )
}

export default TopBar
