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
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Habilidades</li>
                    </ul>
                </nav>

                <button>Contato</button>
            </Content>
        </Container>
    )
}