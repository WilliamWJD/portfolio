import { Container, Content, BoxTecContainer } from './styles';

import JavaImage from '../../assets/java.png';
import NodeImage from '../../assets/nodejs.png';
import DockerImage from '../../assets/docker.png';
import ReactImage from '../../assets/react.png';
import JsImage from '../../assets/js.png';
import HtmlImage from '../../assets/html.png';
import GitImage from '../../assets/github.png';
import NextImage from '../../assets/next.png';
import SassImage from '../../assets/sass.png';
import { useState } from 'react';

interface TecnologiasProps{
    image: string;
}

export function Tecnlogias(){
    const [techs, setTechs] = useState<TecnologiasProps[]>(()=>[
        {
            image:NodeImage
        },
        {
            image:DockerImage
        },
        {
            image:JsImage
        },
        {
            image:ReactImage
        },
        {
            image:HtmlImage
        },
        {
            image:GitImage
        },
        {
            image:NextImage
        },
        {
            image:SassImage
        },
        {
            image:JavaImage
        }
    ])

    return(
        <Container id="tecnologias">
            <Content>
                <h1>Tecnologias</h1>

                <BoxTecContainer>
                    {techs.map((tech:TecnologiasProps)=>(
                        <img src={tech.image} alt="image-tech" key={tech.image} />
                    ))}
                </BoxTecContainer>
            </Content>
        </Container>
    )
}