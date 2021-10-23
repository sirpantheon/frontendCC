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
    border-bottom:3px solid #155E70;
    display:flex;
    justify-content:center;
    margin:5px 0;

    h3{
        color:#155E70;
        font-size:1.3vw;
        position:relative;
        top:16px;
        background:#fff;
        padding:0px 5px;
    }
`

export const inputs = Styled.div`
    display:flex;   
    width:80%;
    flex-direction:column;
    height:5em;
    margin-top:25px;

    .cadPuerpera{
        font-size:1vw;
        width:5%;
        color:#155E70;
        padding:5px 10px;
    }

`
export const input = Styled.div`
    display:flex;
    width:100%;
    height:20px;
    padding: 10px; 0;

    input{
        width:95%;
        font-size:0.8vw;
        padding:2px;
        border:none;
        background:none;
        border-bottom:1px solid #155E70;
    }

    select{
        width:75%;
        border:none;
        border-bottom:1px solid #155E70;
    }

`
export const options = Styled.div`

    display:flex;
    width:100%;
    justify-content: space-around;
    align-items:center;
    margin-top:50px;

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
    height:20em;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background:#155E70;
    margin-top:10px;
    overflow-y: auto;
    padding-top:5px;

    ::-webkit-scrollbar {
        width: 10px;
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

    