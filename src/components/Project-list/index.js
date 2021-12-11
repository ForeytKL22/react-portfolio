import React from 'react';

const PortfolioList = () => {
    const [projects] = useState([
        {
            name: 'AZ and UT National Park Camping',
            link: 'https://foreytkl22.github.io/NPS-Camping/',
            github: 'https://github.com/ForeytKL22/NPS-Camping'
        },
        {
            name: 'Gaming Forum',
            link: 'https://gaming-fourm-page.herokuapp.com/',
            github: 'https://github.com/TheWizard421/Gaming_Form'
        },
        {
            name: 'Tech Blog',
            link: 'https://evening-plateau-62072.herokuapp.com/',
            github: 'https://github.com/ForeytKL22/tech-blog'
        },
        {
            name: 'Password Generator',
            link: 'https://foreytkl22.github.io/Password-generator/',
            github: 'https://github.com/ForeytKL22/Password-generator'
        },
        {
            name: 'Work Day Scheduler',
            link: 'https://foreytkl22.github.io/Weekly-schedule/',
            github: 'https://github.com/ForeytKL22/Weekly-schedule'
        },
        {
            name: 'Budget Tracker',
            link: 'https://shrouded-coast-07063.herokuapp.com/',
            github: 'https://github.com/ForeytKL22/budget-tracker'
        }
    ]);


    return (
        <div>
            <img
                src={require(`../../assets/portfolio-photos/portfolio-1.PNG`).default}
                alt={projects.name}
                key={projects.name}
            />
        </div>

    );
}

export default PortfolioList;