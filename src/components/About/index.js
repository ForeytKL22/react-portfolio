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
            My name is Kristin and I graduated with a bachelor's degree in international studies/political science in 2013 from the University of Wisconsin - Whitewater.
            I studied abroad in Japan for a year and absolutely loved it. I love to travel and would love to have a career where I could potentially have a more flexible work schedule and ability to work remote so I can travel more and return to Japan.
          </p>
          <p>
            Covid has re-shaped the world as we know it. Businesses are having to adjust to a more virtual and online-centered work force. After having spent over 6 years in my current field, covid has made me sit down and think how I really want my life to be in the next 5 to 10 years. Several months of research and self-study made me realize that the web developer career is something I am very passionate about and an exciting and fulfilling role I wish to pursue. I enrolled in a full-stack web development bootcamp through the University of Arizona and graduated with a 95%. I continue to study to expand my knowledge, while taking pro-bono projects on for friends and family to allow myself to practice my skills while searching for a job. 
          </p>
          <p>
            If I'm not studying or at work, you can find me riding my mustang Dakota through the mountains of Colorado or high desert of northern New Mexico. I also have two dogs, two cats, and 40 chickens. I also enjoy skiing in the winter and taking our boat out to the lake in the summer.
          </p>
          <p>
            If you have any questions about me or would like to reach out to discuss my skills further to see if I could be an asset to your organization, please contact me through any of the links below, or at my email: krforeyt@gmail.com, or by phone: 608-698-1749.
          </p>

      </Container>
      
    );
}

export default About;