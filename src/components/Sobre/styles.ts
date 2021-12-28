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
            width: calc(131px + 20px);
            height:5px;
            background-color: #FA983A;
            top: 40px;
        }
    }

    > div{
        display:flex;
        align-items: center;
        margin-top: 50px;

        img{
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin-right: 25px;
            transition: box-shadow 0.5s;

            :hover{
                -webkit-box-shadow: 0px 4px 20px 2px #0C2461; 
                box-shadow: 0px 4px 20px 2px #0C2461;
            }
        }

        p{
            font-size: 18px;
            line-height: 28px;
            color: #A9A9A9;
            
        }
    }

`;