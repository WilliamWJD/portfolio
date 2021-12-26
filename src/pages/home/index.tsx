import { Container } from './styles';

import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { Sobre } from '../../components/Sobre';

export function Home(){
    return(
        <Container>
            <Header/>
            <Info/>
            <Sobre/>
        </Container>
    )
}