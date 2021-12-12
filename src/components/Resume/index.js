import React from 'react';
import Container from 'react-bootstrap/Container';

function Resume() {
    return(
        <Container>
            <br />
        <h3>Front-end Technologies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>mobile responsive design</li>
                <li>React</li>
                <li>Bootstrap/React-Bootstrap</li>
            </ul>
        <h3>Back-end Technologies</h3>
            <ul>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
        <h3>Resume:</h3>
        </Container>
    );
}

export default Resume;