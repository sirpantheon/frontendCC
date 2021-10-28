import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    width:75vw;
    height:1vw;
    background:#FFF;
    border-radius:5vw;
    margin: 0.2vw 0vw;
    justify-content: center;
    
    &:hover{
        opacity:0.7;
    }
    
    
`
export const TopCard = styled.div`
    width:80%;
    display:flex;
    height:0.8vw;
    align-items: center;
    justify-content: space-between;
    padding:0.1vw;

    h3{
        width:15vw;        
        font-size: 0.8vw;
    }

`

export const BottomCard = styled.div`
    width:25%;
    display:flex;
    height:0.8vw;
    font-size: 0.8vw;
    align-items: center;
    justify-content: space-between;
    padding:0.1vw;
    
`