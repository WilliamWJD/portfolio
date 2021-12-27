import { FaGithub } from 'react-icons/fa';

import { Container, Content, InfoDetail } from './styles';

import infoImg from '../../assets/info-img.png';

export function Info(){
    return(
        <Container id="info">
            <Content>
                <InfoDetail>
                    <strong>Olá! eu sou</strong>
                    <h1>William José Dias</h1>
                    <p>Desenvolvedor fullstack utilizando tecnologias como React, React Native e Node.JS</p>
                    <a href="https://www.github.com/williamwjd">
                        <button>
                            <FaGithub color="#0C2461" size={ 26 }/>
                            <span>
                                Acessar Github
                            </span>
                        </button>
                    </a>
                </InfoDetail>

                <img src={infoImg} alt="Info Image" />
            </Content>
        </Container>
    )
}