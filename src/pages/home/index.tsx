import { Container } from './styles';

import { Header } from '../../components/Header';
import { Info } from '../../components/Info';

export function Home(){
    return(
        <Container>
            <Header/>
            <Info/>
        </Container>
    )
}