import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 69px;

    display: flex;
    align-items: center;
    justify-content: center;
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
            width: calc(169px + 20px);
            height:5px;
            background-color: #FA983A;
            top: 40px;
        }
    }
`;

export const BoxProjectsContainer = styled.div`
    width:100%;
    margin-top: 27px;

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

export const BoxProject = styled.div`
    width:350px;
    height:280px;
    cursor: pointer;
    border-radius: 0 0 20px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img{
        width: 100%;
        height: 100%;
        background-size:cover;
    }

    >div{
        width: 100%;
        height:45px;
        display: flex;
        justify-content: center;
        background-color: #F7F7F7 ;
        border-radius: 0 0 20px 20px;
    }

    strong{
        font-size:18px;
        color:#484848;
        font-weight: 400;
        margin: 15px;
    }
`;

