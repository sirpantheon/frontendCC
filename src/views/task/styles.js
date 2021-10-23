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
            opacity:0.9;
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
    height:290px;
    margin-top:30px;

`
export const input = Styled.div`
    display:flex;
    width:50%;
    height:50px;

    .privativo{
        color:red;
    }

    span{
        width:20%;
        color:#155E70;
        padding:15px 20px;
    }

    input{
        width:80%;
        font-size:1.2vw;
        padding:5px;
        border:none;
        background:none;
        border-bottom:1px solid #155E70;
    }

    select{
        width:80%;
        border:none;
        border-bottom:1px solid #155E70;
    }

`
export const privativo = Styled.div`

    #privativo{
        width:100%;
        heigth:50px;
        display: flex;
        margin-left:45px;
        justify-content:center;
        align-items: center;
        
    }
    /* MAIN */
    /* =============================================== */
    .rad-label {
    display: flex;
    align-items: center;

    border-radius: 100px;
    padding: 5px 10px;
    margin: 5px 0;

    cursor: pointer;
    transition: .3s;
    }

    .rad-label:hover,
    .rad-label:focus-within {
    background: hsla(0, 0%, 80%, .14);
    }

    .rad-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
    }

    .rad-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;

    background: linear-gradient(to right bottom, #155E70, #155E70);
    position: relative;
    }

    .rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: .3s;
    }

    .rad-input:checked+.rad-design::before {
    transform: scale(0);
    }

    .rad-text {
    color: #155E70;
    margin-left: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1.3vw;
    font-weight: 900;

    transition: .3s;
    }

    .rad-input:checked~.rad-text {
    color: #155E70;
    }


`
export const textarea = Styled.div`
    display:flex;
    width:50%;
    flex-direction: column;
    margin-left:20px;
    

    textarea{
        padding:5px;
        border: 1px solid #155E70;
        heigth:60px;
        width:90%;
        resize: none;
        display: flex;

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
        width:130px;
        color:#FFF;
        border-bottom:4px solid #155E70;
        border-radius:50px;
        background:#155E70;
        cursor: pointer;
        font-size:1.2vw;

        &:hover{
            opacity:0.7;
            box-shadow:0 4px 20px #155E70;
            width:135px;
        }
    }
`
