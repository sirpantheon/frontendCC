import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
 
`

export const Title = Styled.div`
    width:100%;
    border-bottom:0.3vw solid #155E70;
    display:flex;
    justify-content:center;
    margin:0.5vw 0;

    h3{
        color:#155E70;
        font-size:1.3vw;
        position:relative;
        top:1vw;
        background:#fff;
        padding:0px 2vw;
    }
`

export const inputs = Styled.div`
    display:flex;   
    width:80%;
    flex-direction:column;
    height:2vw;
    margin-top: 1.5vw ;
    margin-bottom:1.5vw ;

    .cadPuerpera{
        font-size:1vw;
        width:5vw;
        color:#155E70;
        padding:0.1vw 0.2vw;
    }

`
export const input = Styled.div`
    display:flex;
    width:100%;
    height:4vw;
    padding: 0.5vw; 

    input{
        width:95%;
        font-size:0.8vw;
        padding:0.2;
        border:none;
        background:none;
        border-bottom:0.2vw solid #155E70;
    }

    select{
        width:75%;
        border:none;
        border-bottom:0.2vw solid #155E70;
    }

`
export const options = Styled.div`

    display:flex;
    width:100%;
    justify-content: space-around;
    align-items:center;
    margin-top:5vw;
    margin-bottom:1vw;

    button{
        width:15%;
        color:#FFF;
        border-bottom:4px solid #155E70;
        border-radius:50px;
        background:#155E70;
        cursor: pointer;
        font-size:1.3vw;

        &:hover{
            opacity:0.7;
            box-shadow:0 4px 20px #155E70;
            
        }
    }
`
export const Content = Styled.div`
    
    display:flex;
    width:80%;
    height:20vw;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background:#155E70;
    margin-top:0.5vw;
    overflow-y: auto;
    padding:2vw;

    button{
        width:77vw;
        height:3vw;
    }

    ::-webkit-scrollbar {
        width: 0.5vw;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888; 
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }

    
`

    