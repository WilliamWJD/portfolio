import { Container, Content } from './styles';

import WillImg from '../../assets/will.jpeg';

export function Sobre() {
    return (
        <Container id="sobre">
            <Content>
                <h1>Sobre</h1>

                <div>
                    <img src={WillImg} alt="William Dias" />
                    <p>
                        Estudante de análise e desenvolvimento de sistema apaixonado por
                        tecnologia e a forma como ela facilita o dia a dia, gosto de ajudar pessoas a resolver
                        problemas utilizando a tecnologia como um meio, a sensação de ver um problema 
                        resolvido através da tecnologia é algo que me motiva e me faz querer aprofundar 
                        cada vez mais nesse universo.
                    </p>
                </div>
            </Content>
        </Container>
    )
}