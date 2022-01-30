import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import './style.css';


function Navigate({currentPage, setCurrentPage}) {
    return (
    <header>
        <Container>
        <Navbar bg="dark" variant="dark" class="navbar" collapseOnSelect expand="lg">
            
            <Navbar.Brand href="#home" className="name">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-links">
                <Nav.Link href="#about" onClick={() => setCurrentPage('About')}>About me</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentPage('Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setCurrentPage('Contact')}>Contact</Nav.Link>
                <Nav.Link href="#resume" onClick={() => setCurrentPage('Resume')}>Resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        </Container>
    </header>
    );
}


export default Navigate;