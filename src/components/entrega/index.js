import React from 'react';

import * as S from './style'

import typeIcons from '../../utils/iconEntrega'

function entrega( { type,entrega,chave,index }){
   
    return (
        <S.Container  type={type} entrega={entrega} chave={chave} index={index}>

            <S.Content>
                <button type="button" style={{backgroundColor: entrega ? '#FFF':'#FFFF00'}}>
                    <div > 
                        <img src={typeIcons} alt="icone"  />
                        
                    </div>

                </button>
                

            </S.Content>
           
              
        </S.Container>
    )
}

export default entrega;