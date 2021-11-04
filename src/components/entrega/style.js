import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin:3vw;

`

export const Content = styled.div `

    width:3vw;
    height: 3vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    button{

        background:{(props.entrega) ? "#FFF":"#FFFF00"};
        border-radius:50% ;
        border: 0.4vw ridge #155E70;
        
        img{
            display:flex;
            width:100%;
            height:100%;
    
        }
    }
    

`