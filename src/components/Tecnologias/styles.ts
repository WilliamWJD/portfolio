import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
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

    h1{
        font-size: 30px;
        color: #0C2461;
        position: relative;

        ::before{
            content:'';
            position: absolute;
            width: calc(170px + 20px);
            height:5px;
            background-color: #FA983A;
            top: 40px;
        }
    }
`;

export const BoxTecContainer = styled.div`
    width:100%;
    margin-top: 50px;

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    img{
        margin-right: 20px;
        position: relative;
        cursor: pointer;

        :hover:before{
          
                content:'';
                position: absolute;
                width: 100px;
                height: 20px;
                background-color: #FA983A;
        
        }

        :last-child{
            margin-right: 0;
        }
    }

    @media(max-width:1024px){
        img{
            margin-bottom: 10px;
        }
    }

    @media(max-width:829px){
        justify-content: center;
    }
`;
