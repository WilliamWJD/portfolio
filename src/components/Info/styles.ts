import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #F6F6F6;
    height:321px;
    margin-bottom: 69px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1177px){
        padding:30px;
    }
`;

export const Content = styled.div`
    width:100%;
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:779px){
        img{
            display: none;
        }
    }
`;

export const InfoDetail = styled.div`
    strong{
        font-size: 30px;
        color: #484848;
        margin-bottom: 17px;
        display: flex;
    }

    h1{
        font-size: 45px;
        color: #FA983A;
        margin-bottom: 17px;
    }

    p{
        font-size: 18px;
        color: #A9A9A9;
        margin-bottom: 17px;
        width: 387px;
        line-height: 28px;
    }

    button{
        padding: 8px 20px;
        border-radius: 15px;
        color: #0C2461;
        background-color: #F6F6F6;
        font-size:15px;
        border: 2px solid #0C2461;
        transition: background-color 0.5s;
        transition: display 0.2s;

        display: flex;
        align-items: center;

        svg{
            margin-right: 10px;
        }

        :hover{
            svg{
                -webkit-transform: rotate(360deg); 
                transform:rotate(360deg); 
                transition-duration: 0.9s;
            }
        }
    }
    @media(max-width:779px){
        width:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        p{
            text-align: center;
        }
    }
    
`;