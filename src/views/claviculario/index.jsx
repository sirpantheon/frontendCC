import React ,{useState , useEffect} from 'react'
import * as S from './styles'

import api from '../../services/api'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Entrega from '../../components/entrega'

function claviculario(){
    
    return (
        <S.Container>
            <Header />

            <Entrega />

            
            <Footer />
        </S.Container>
    )
}

export default claviculario;