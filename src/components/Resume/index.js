import React from 'react';
import Container from 'react-bootstrap/Container';
import Iframe from 'react-iframe';
import './style.css';

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
            

            <h3 className="title">Resume</h3> 
        <div className="resume">  
            <Iframe 
                url="https://docs.google.com/document/d/e/2PACX-1vRSlLEELDi6ftHcjWBYhj-hxe9dQg2WDcQyZ3B77VEdkjFl_zibg_Znaw1xxYA8sMhzkIAPLD7lvYWa/pub?embedded=true" 
                width="780px"
                height="800px"
                className="resume-doc"
                />
        </div>

        </Container>
    );
}

export default Resume;

{/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vTZM7p9aBTEDWSD9bKRul9xFFZ47vVJcytO1UB6Y3UG-Kaolf1eGUFZvj4u4NCFLA21MoVNT9yRbIaV/pub?embedded=true"></iframe> */}