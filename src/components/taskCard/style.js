import styled from 'styled-components'

export const Container = styled.div `
    width:80%;
    height:13em;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    
    background: linear-gradient(215deg, #F0F1F5 40%, #dfe6e9 83%);
    box-shadow:  0px 0px 15px 5px #b4b7bc;
    border-top-left-radius: 20px;
    cursor:pointer;
    margin:1.5em;
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
    width:5em;
    height:5em;

    .ativo{
        display:flex;
        background:#ffff00;
        color:#000;
        border-radius:50px;
        width:1.9em;
        height:1.9em;
        align-items: center;
        justify-content:center;
        position:absolute;
        margin-left:45px;
        margin-top:25px;
    }
    .inativo{
        display:flex;
        background:#155E70;
        color:#FFF;
        border-radius:50px;
        width:1.9em;
        height:1.9em;
        align-items: center;
        justify-content:center;
        position:absolute;
        margin-left:45px;
        margin-top:25px;
    }

    img{
        display:flex;
        width:4em;
        height:4em;
        margin-bottom:0.5em;
    }
    
`