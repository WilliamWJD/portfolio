import { Container, Content } from './styles';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa';

export function Footer(){
    return(
        <Container>
            <Content>
                <strong>Desenvolvido por <a href="https://www.github.com/williamwjd" target="_blank">William José Dias</a></strong>

                <div>
                    <a href="https://www.linkedin.com/in/william-jose-dias/">
                        <FaLinkedin size={22} color="#fff"/>
                    </a>
                    <a href="https://github.com/WilliamWJD">
                        <FaGithub size={22} color="#fff" />
                    </a>
                    <a href="">
                        <FaEnvelope size={22} color="#fff"/>
                    </a>
                </div>
            </Content>
        </Container>
    )
}