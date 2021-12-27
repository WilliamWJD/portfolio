import { Container } from './styles';

import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { Sobre } from '../../components/Sobre';
import { Projects } from '../../components/Projects';
import { Tecnlogias } from '../../components/Tecnologias';
import { Footer } from '../../components/Footer';

export function Home(){
    return(
        <Container id="home">
            <Header/>
            <Info/>
            <Sobre/>
            <Projects/>
            <Tecnlogias/>
            <Footer/>
        </Container>
    )
}