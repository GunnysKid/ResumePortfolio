import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Chris Smith's Portfolio</Navbar.Brand>
            <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#projects'>Projects</Nav.Link>
                <Nav.Link href='#contactme'>Contact Me</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}
