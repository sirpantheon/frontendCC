import styled from 'styled-components'

export const Container = styled.div `
    width:100%;
    height:2.5vw;
    background:${props => props.actived ? '#F0F1F5' : '#155E70'};
    color:${props => props.actived ? '#155E70' : '#F0F1F5'};
    border-radius:1vw;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    text-shadow: #000 1vw 0 1.5vw;

    span{
        font-weight:bold;
    }

    &:hover{
        background:#F0F1F5;
        color:#155E70;
        text-shadow: #155E70 1vw 0 2vw;
        box-shadow: 0.3vw 0.2vw #155E70;
        opacity:0.7
    }

`