import styled from 'styled-components'

export const Container = styled.div `
    width:80%;
    height:15vw;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    
    background: linear-gradient(215deg, #F0F1F5 40%, #dfe6e9 83%);
    box-shadow:  0px 0px 1vw 0.2vw #b4b7bc;
    border-top-left-radius: 1.5vw;
    cursor:pointer;
    margin:2vw;
    transition:all 0.3s ease;

    opacity: ${props => props.devolucao ? 0.5 : 1};

    a{
        text-decoration:none;
    }

    &:hover{
        opacity:0.7
    }
`
export const BottomCard = styled.div`
    width:100%;
    display:flex;  
    justify-content: space-around;
    font-size:1.2vw;

    strong{
        font-weight:bold;
        color:#155E70;
    }

`
export const TopCard = styled.div`
    font-size:1vw;
    display:flex;   
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const chave = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    width:5vw;
    height:5vw;

    h3{
        display:flex;
        border-radius:50px;
        width:2vw;
        height:2vw;
        align-items: center;
        justify-content:center;
        position:absolute;
        margin-left:3vw;
        margin-top:2vw;
    }
    .ativo{
        
        background:#ffff00;
        color:#000;
    }
    .inativo{
        background:#155E70;
        color:#FFF;
    }

    img{
        display:flex;
        width:4vw;
        height:4vw;
        margin-bottom:0.5em;
    }
    
`