import styled from 'styled-components'


export const Container = styled.div `
    width:100%;
    height:3vw;
    background:#F0F1F5;
    border-bottom:0.3vw solid #155E70;
    display:flex;

`

export const leftSide = styled.div `
    width: 50%;
    display:flex;
    align-items: center;
    padding-left: 1vw;

    h1{
        font-size:2vw;
        color:#000
    }

`

export const rightSide = styled.div `
    width: 50%;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    
    a{
        color:#000;
        font-weight: bold;
        text-decoration: none;
        margin:0 2vw;
        font-size:1.3vw;

        &:hover{
            color:#155E70;
        }

        span{
        
            background:#000;
            border-radius:40%
        }
    }

`