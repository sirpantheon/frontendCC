import Styled from 'styled-components'

export const Container = Styled.div`

    width:100%;
    align-items: center;
 
`
export const FilterArea = Styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    margin-top: 1vw;

    button{
        font-size:1.6vw;
        width:13%;
        background:none;
        border:none;

        span{
            width:100%;
            
        }
    }
 
`

export const Content = Styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    margin-bottom:3vw;

    a{
        width:23%;
        text-decoration:none;
        color:#155E70
    }

`

export const Title = Styled.div`
    width:100%;
    border-bottom:0.3vw solid #155E70;
    display:flex;
    justify-content:center;
    margin:0.1vw 0;

    h3{
        color:#155E70;
        font-size:1.5vw;
        position:relative;
        top:1vw;
        background:#fff;
    }
`
