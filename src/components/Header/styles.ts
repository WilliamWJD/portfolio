import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 159px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1177px){
        padding:20px;
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
        display: flex;
        align-items: center;
        cursor: pointer;

        img{
            width: 50px;
            height: 50px;
        }

        strong{
            margin-left: 10px;
            font-size:25px;
            color: #0C2461;
        }
    }

    nav{
        ul{
            display: flex;
            
            li{
                margin-right: 37px;
                font-size:18px;
                color: #484848;
                cursor: pointer;

                :last-child{
                    margin-right: 0px;
                }
            }
        }
    }

    button{
        border: 2px solid #0C2461;
        background-color: #fff;
        color: #0C2461;
        border-radius:20px;
        padding: 8px 25px;
        font-size:16px;
        transition: background-color 0.5s;

        :hover{
            background-color:#0C2461;
            color:#fff;
        }
    }

    @media(max-width:858px){
        nav{
            display: none;
        }
    }
`;