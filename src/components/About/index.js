import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';


function About() {
    return (
      <Container>
          <h1>About Me</h1>
          <Figure>
            <Figure.Image
              width={171}
              heigh={180}
              alt="Me, Kristin Foreyt, overlooking a canyon"
              src="https://i.imgur.com/SeNTsZ7.jpg"
            />
          </Figure>
          <p>
          My name is Kristin and I graduated with a bachelor's degree in international studies/political science in 2013 from the University of Wisconsin - Whitewater, just an hour from my home town of Madison, Wisconsin.
          I studied abroad in Japan for a year and absolutely loved it. I love to travel and would love to have a career where I could potentially have a more flexible work schedule and ability to work remote so I can travel more and return to Japan.
          I am currently studying to become a web developer to hopefully land in a more flexible career.
          </p>
          <p>
          I love animals - I have two dogs, a cat, 27 chickens and a horse. My hobbies include taking my horse out trail riding in the Colorado Rockies or the high desert of northern New Mexico. I enjoy skiing in the winter and taking our boat out to the lake in the summer.
          </p>
      </Container>
      
    );
}

export default About;