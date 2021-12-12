import React from 'react';
import PortfolioList from '../Project-list/index.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Portfolio() {

    return (
        <div>
        {
            PortfolioList.map((items, i) => (
                <div>
                    <a href={items.link} target="_blank">
                        <img
                            src={require(`../../assets/portfolio-photos/portfolio-${i}.PNG`).default}
                            key={`img_${i}`}
                            alt={`${items.name} + project`}
                        />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;