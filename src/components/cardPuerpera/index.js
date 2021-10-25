import React, {useEffect} from 'react';
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {format} from 'date-fns'

import * as S from './style'

function CardPuerpera({nome,registro,leito,data}){

    const [redirect,setRedirect] = useState(false)

    const date = format(new Date(data), 'dd/MM/yyyy')
    const hour = format(new Date(data), 'HH:mm')


        
    return (
        <S.Container >
           <S.TopCard>
                <h3>Nome: {nome}</h3>
                <h3>Registro: {registro}</h3>
                <h3>Leito: {leito}</h3>          
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard> 

        </S.Container>
    )
}

export default CardPuerpera;