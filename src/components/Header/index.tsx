import { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { Container, Content, ButtonContact } from './styles';

import imgLogo from '../../assets/logo.png';

interface NavProps {
    title: string;
    path: string;
    active: boolean;
}

export function Header() {
    const [navItems, setNavItems] = useState<NavProps[]>([
        {
            title: "Home",
            path: "home",
            active: true
        },
        {
            title: "Sobre",
            path: "sobre",
            active: false
        },
        {
            title: "Projetos",
            path: "projects",
            active: false
        },
        {
            title: "Tecnologias",
            path: "tecnologias",
            active: false
        },
    ]);

    function handleActiveNavItem(path: string) {
        if (navItems) {
            const updateNavItems = navItems.map((item: NavProps) => {
                if (item.path === path) {
                    item.active = true;
                    return item;
                } else {
                    item.active = false;
                    return item;
                }
            })
            console.log(navItems)
            setNavItems(updateNavItems)
        }
    }

    return (
        <Container>
            <Content>
                <div>
                    <img src={imgLogo} alt="Logo" />
                    <strong>William Dias</strong>
                </div>

                <nav>
                    <ul>
                        {navItems.map(navItem => (
                            <li
                                key={navItem.path}
                            >
                                <Link
                                    to={navItem.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => handleActiveNavItem(navItem.path)}
                                >
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ButtonContact href="mailto:william.jose.wjd@gmail.com">Contato</ButtonContact>
            </Content>
        </Container>
    )
}