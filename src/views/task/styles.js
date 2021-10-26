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
    margin-top:50px;


`
export const legendaIcons = Styled.div`

    width:77%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:#b4b4b4;

    h3{
        font-size:1.2vw;
        width:2em; 
        height:2em;
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
        width:5em; 
        height:5em;
        border:none;
        background:none;
    
    }

    button{
        display:flex;
        width:4.8em; 
        height:4.8em;
        border:none;
        align-items: center;
        justify-content:center;
        background:none;
        border-radius:50%;
        box-shadow: 3px 3px 7px 0 #155E70;
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
    height:20em;
    margin-top:1.5em;

`
export const input = Styled.div`
    display:flex;
    width:50%;
    height:3vw;

    span{
        width:20%;
        color:#155E70;
        padding:0.7em;
        font-size:1vw;
    }

    input{
        width:80%;
        font-size:1.2vw;
        padding:0.7em;
        border:none;
        background:none;
        border-bottom:1px solid #155E70;
        text-transform: capitalize;
    }

`

export const textarea = Styled.div`
    display:flex;
    width:40%;
    flex-direction: column;
    margin-left:9%;
    
    textarea{
        padding:0.7em;
        border: 1px solid #155E70;
        heigth:60px;
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

    label{
        display:flex;
        background:#efefef;        
        font-size:1.3vw;
        justify-content:center;
        align-items: center;
        cursor: pointer;
        padding: 3px 30px ;
        font-weight:bold;
        border-radius:15px;
     
        &:hover{
            opacity:0.7;
            background:#d8d8d8;
        }

    }

    button{
        width:7vw;
        color:#FFF;
        border-bottom:1px solid #155E70;
        border-radius:50px;
        background:#155E70;
        cursor: pointer;
        font-size:1.2vw;

        &:hover{
            opacity:0.7;
            box-shadow:0 4px 20px #155E70;
            
        }
    }
`
export const ContainerWebCam = Styled.div`

    display:flex;
    flex-direction:column;
    margin: 0;
    padding: 0;
    width:260px;
    height:150px;
    top:80px;
    left:10px;
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
        position:absolute;
        background:#155E70;
        width:260px;
        height:135px;
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
        border-radius: 0px 0px 0px 10px ;
    }
    .btn-limpar{
        border-radius: 0px 0px 10px 0px;
    }

    button{
        padding:0px;
        text-align: center;
        width:50%;
        height:1.5em;
        color:#d8d8d8;
        background:#155E70;
        border-bottom: 1px solid #155E70;
        font-size: 1vw;
        
        &:hover{
            cursor: pointer;
            box-shadow: 0px 3px 10px 3px #155E70 ;
            opacity:0.8;
        }
    }

`

export const Webcam = Styled.div`
    width:100%;
    heigth:100%;
    display:flex;
    content-justify: center;
    align-items: center;



`