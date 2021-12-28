import { useState } from 'react';

import DtMoney from '../../assets/dt-money.png';
import CovidCasesImage from '../../assets/covid-cases.png';
import devRarar from '../../assets/dev-radar.png';
import GoRestaurant from '../../assets/go-restaurant.png';
import GoBarber from '../../assets/gobarber.png';
import Ecoleta from '../../assets/ecoleta.jpeg';
import Aircnc from '../../assets/aircnc.jpg';
import Letmeask from '../../assets/letmeask.png';
import JobsCalc from '../../assets/jobscalc.png';

import { Container, Content, BoxProjectsContainer, BoxProject } from './styles';

interface ProjectsProps {
    name: string;
    image: string;
    repo: string;
}

export function Projects() {
    const [projects, setProjects] = useState(() => [
        {
            name: "Dt-Money",
            image: DtMoney,
            repo:"https://github.com/WilliamWJD/dtmoney"
        },
        {
            name: "Covid-Cases",
            image: CovidCasesImage,
            repo:"https://github.com/WilliamWJD/Covid-Cases"
        },
        {
            name: "Dev-Radar",
            image: devRarar,
            repo:"https://github.com/WilliamWJD/Search-Dev"
        },
        {
            name: "Go-Restaurant",
            image: GoRestaurant,
            repo:"https://github.com/WilliamWJD/desafio-gorestaurant"
        },
        {
            name: "Gobarber",
            image: GoBarber,
            repo:"https://github.com/WilliamWJD/gobarber-web"
        },
        {
            name: "Ecoleta",
            image: Ecoleta,
            repo:"https://github.com/WilliamWJD/ecoleta"
        },
        {
            name: "Aircnc",
            image: Aircnc,
            repo:"https://github.com/WilliamWJD/Aircnc"
        },
        {
            name: "Letmeask",
            image: Letmeask,
            repo:"https://github.com/WilliamWJD/Letmeask"
        },
        {
            name: "JobsCalc",
            image: JobsCalc,
            repo: "https://github.com/WilliamWJD/jobscalc"
        }
    ]);

    return (
        <Container id="projects">
            <Content>
                <h1>Projetos</h1>

                <BoxProjectsContainer>
                    {projects.map((project: ProjectsProps) => (
                        <a href={project.repo} target="_blank">
                            <BoxProject key={project.name}>
                                <img src={project.image} alt={project.name} />
                                <div>
                                    <strong>{project.name}</strong>
                                </div>
                            </BoxProject>
                        </a>
                    ))}

                </BoxProjectsContainer>
            </Content>
        </Container>
    )
}