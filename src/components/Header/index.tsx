import { Link, animateScroll as scroll } from "react-scroll";

import { Container, Content } from './styles';

import imgLogo from '../../assets/logo.png';

export function Header() {

    return (
        <Container>
            <Content>
                <div>
                    <img src={imgLogo} alt="Logo" />
                    <strong>William Dias</strong>
                </div>

                <nav>
                    <ul>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Home</li>
                        </Link>
                        <Link 
                            to="sobre"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Sobre</li>
                        </Link>
                        <Link 
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Projetos</li>
                        </Link>
                        <Link 
                            to="tecnologias"
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <li>Habilidades</li>
                        </Link>
                    </ul>
                </nav>

                <button>Contato</button>
            </Content>
        </Container>
    )
}