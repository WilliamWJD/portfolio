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
    gap: 10px;
`;

export const BoxProject = styled.div`
    width:208px;
    height:208px;
    background-color:#ddd;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    strong{
        font-size:18px;
        color:#484848;
        font-weight: 400;
    }
`;

