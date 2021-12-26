import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
    }
    
    body, button{
        font-family: 'Roboto', sans-serif;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight:700;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }    
`;