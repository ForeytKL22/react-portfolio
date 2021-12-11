import React from 'react';

function Nav({currentPage, setCurrentPage}) {
    return (
    <header>
        <h2 class="name">
            <a href="/">
                Kristin
            </a>
        </h2>
        <nav>
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
        </nav>
    </header>
    );
}


export default Nav;