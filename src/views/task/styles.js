import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;

 
`

export const Form = Styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    margin-top:2vw;


`
export const legendaIcons = Styled.div`

    width:77%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:#b4b4b4;

    h3{
        font-size:1.2vw;
        width:3vw; 
        height:2vw;
        display:flex;
        align-items: center;
        justify-content: space-around;
        
    }

`

export const iconsContent = Styled.div`
    width:80%;
    display:flex;
    align-items: center;
    justify-content: space-between;

    .inative{
        opacity:0.5;
        width:5vw; 
        height:5vw;
        border:none;
        background:none;
    
    }

    img{
        width:4.5vw; 
        height:4.5vw;
    }

    button{
        display:flex;
        width:4.8vw; 
        height:4.8vw;
        border:none;
        align-items: center;
        justify-content:center;
        background:none;
        border-radius:50%;
        box-shadow: 0.5vw 0.2vw 0.7vw 0 #155E70;
        cursor:pointer;

        &:hover{
            opacity:0.7;
        }
        
    }
`
export const typeIcons = Styled.div`

    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction: column;
`
export const inputs = Styled.div`
    display:flex;   
    width:80%;
    flex-wrap:wrap;
    height:20vw;
    margin-top:1.5vw;

`
export const input = Styled.div`
    display:flex;
    width:50%;
    height:3vw;

    span{
        width:20%;
        color:#155E70;
        padding:0.7vw;
        font-size:1vw;
    }

    input{
        width:80%;
        font-size:1.2vw;
        padding:0.7vw;
        border:none;
        background:none;
        border-bottom:0.1vw solid #155E70;
        text-transform: capitalize;
    }
    .input-chave{
        
    }

`

export const textarea = Styled.div`
    display:flex;
    width:40%;
    flex-direction: column;
    margin-left:9%;
    
    textarea{
        padding:0.7vw;
        border: 0.1vw solid #155E70;
        width:90%;
        resize: none;
        display: flex;
        text-transform: capitalize;
        font-size:1vw;

    }

`
export const options = Styled.div`

    display:flex;
    width:80%;
    justify-content: space-around;
    align-items:center;    

    input{
        width:1vw;
        height:1vw;
    }

    label{
        display:flex;
        background:#efefef;        
        font-size:1.3vw;
        justify-content:center;
        align-items: center;
        cursor: pointer;
        padding: 0.2vw 1vw ;
        font-weight:bold;
        border-radius:30vw;
     
        &:hover{
            opacity:0.7;
            background:#d8d8d8;
        }

    }

    button{
        width:7vw;
        color:#FFF;
        border:0.1vw solid #155E70;
        background:#155E70;
        cursor: pointer;
        font-size:1.2vw;
        border-radius:30vw;

        &:hover{
            opacity:0.7;
            box-shadow:0 0.3vw 0.7vw #155E70;
            
        }
    }
`
export const ContainerWebCam = Styled.div`

    display:flex;
    flex-direction:column;
    width:15vw;
    height:15vw;
    top:4vw;
    left:1.5vw;
    position:absolute;
    content-justify: center;
    align-items: center;

    .ativo{
        z-index: 1; 
    }
    .inativo{
        z-index: -1; 
    }

    img{
        background:#155E70;
        width:17vw;
        height:10vw;
        display:flex;
        z-index: -1;  
    }
`
export const button = Styled.div`
    display:flex;
    width:100%;
    align-items:center;
    content-justify: center;

    .btn-capturar{
        border-radius: 0px 0px 0px 1vw ;
    }
    .btn-limpar{
        border-radius: 0px 0px 1vw 0px;
    }

    button{
        text-align: center;
        width:100%;
        height:1.5vw;
        color:#d8d8d8;
        background:#155E70;
        border:none;
        font-size: 0.8vw;
        z-index: 2; 
        
        &:hover{
            cursor: pointer;
            box-shadow: 0vw 0.3vw 1vw 0.3vw #155E70 ;
            opacity:0.8;
        }
    }

`

export const Webcss = Styled.div`
    width:15vw;
    height:15vw;
    top:-2.5vw;
    left:-0.5vw;
    position:absolute;
    display:flex;
    content-justify: center;
    align-items: center;
    
    video{
        width:16vw;
        height:15vw;

    }



`