import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100px;
    background-color: #0C2461;

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;

    strong, a{
        color:#fff;
        font-weight: 400;
    }
    
    a{
        color: #FA983A;
    }

    @media(max-width: 1177px){
        padding:20px;
    }

    @media(max-width:498px){
        strong, a{
            font-size:15px;
        }
    }
`;

export const Content = styled.div`
    width:100%;
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    >div{
        svg{
            margin-right:20px;

            &&:last-child{
                margin-right:0;
            }
        }
    }

    @media(max-width:498px){
        flex-direction: column;

        >div{
            margin-top:20px;
        }
    }
`