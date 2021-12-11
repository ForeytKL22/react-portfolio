import React from 'react';

function Nav() {
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
                    <a href="#href">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    );
}


export default Nav;