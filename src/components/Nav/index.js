import React from 'react';
import './style.css';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';


function Navigate({currentPage, setCurrentPage}) {
    return (
    <header>


        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Kristin</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#about" onClick={() => setCurrentPage('About')}>About Me</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentPage('Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setCurrentPage('Contact')}>Contact</Nav.Link>
                <Nav.Link href="#resume" onClick={() => setCurrentPage('Resume')}>Resume</Nav.Link>
            </Nav>
            </Container>
        </Navbar>


        {/* <nav class="nav-links">
            <ul>
                <li>
                    <a 
                    href="#href" 
                    onClick={() => setCurrentPage('About')}>
                        About Me
                    </a>
                </li>
                <li>
                    <a 
                    href="#portfolio" 
                    onClick={() => setCurrentPage('Portfolio')}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a 
                    href="#contact"
                    onClick={() => setCurrentPage('Contact')}>
                        Contact
                    </a>
                </li>
                <li>
                    <a 
                    href="#resume"
                    onClick={() => setCurrentPage('Resume')}>
                        Resume
                    </a>
                </li>
            </ul>
        </nav> */}

    </header>
    );
}


export default Navigate;