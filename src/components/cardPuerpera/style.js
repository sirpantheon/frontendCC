import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    width:95%;
    height:1.5em;
    background:#FFF;
    border-radius:5px;
    margin: 3px 0;
    justify-content: center;
    
    &:hover{
        opacity:0.7;
    }
    
    
`
export const TopCard = styled.div`
    width:80%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:5px;

    h3{
        width:25%;
        font-size: 0.8vw;
    }

`

export const BottomCard = styled.div`
    width:25%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:5px;
    
`