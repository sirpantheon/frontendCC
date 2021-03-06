import React, {useState , useEffect, useRef} from 'react'
import { Redirect } from 'react-router-dom'
import * as S from './styles'
import Webcam from 'react-webcam'

//database mongodb
import api from '../../services/api'

//componentes
import Header from '../../components/header'
import Footer from '../../components/footer'
import TypeIcons from '../../utils/typeicons'

  function Task({match}) {

    //constantes para os estados
    const [redirect,setRedirect] = useState(false)
    const [ type,setType ] = useState()
    const [ devolucao,setDevolucao] = useState(false)
    const [ nome,setNome ] = useState()
    const [ image,setImage ] = useState()
    const [ registro,setRegistro ] = useState()
    const [ especialidade,setEspecialidade ] = useState()
    const [ chave,setChave ] = useState()
    const [ privativo,setPrivativo ] = useState()
    const [ descricao,setDescricao ] = useState()
    const macaddress = "11:11:11:11:11:11"    
    

    //especificações da webcam
    const webcamRef = useRef(null);
    const videoConstraints = {
      width: 640,
      height: 360,
      facingMode: "user"
    };

    let webClasse = ""
    if(image){
      webClasse = "ativo"
    }else{
      webClasse = "inativo"
    }

    //carrega os detalhes de cada registro
    async function LoadTaskDetail(){
      await api.get(`/task/${match.params.id}`)
      .then(response => {
        setType(response.data.type)
        setDevolucao(response.data.devolucao)
        setNome(response.data.nome)
        setRegistro(response.data.registro)
        setEspecialidade(response.data.especialidade)
        setChave(response.data.chave)
        setPrivativo(response.data.privativo)
        setDescricao(response.data.descricao)
        setImage(response.data.image)
      })

    }

    //salva o registro ou modifica
    async function Save() {

      //validação
      if(!nome)
        return alert('por favor preencha o nome')
      else if(!type)
        return alert('por favor preencha o tipo de chave')
      else if(!especialidade)
        return alert('por favor preencha a especialidade')
      else if(!registro)
        return alert('por favor preencha o registro')

      if(match.params.id){
        await api.put(`/task/${match.params.id}`,{
          macaddress,
          nome,
          registro,
          especialidade,
          chave,
          privativo,
          descricao,
          devolucao,
          type,
          image
        }).then(()=>
          alert("Registrado Mofificado Com Sucesso!!"),
          setRedirect(true)
       )
      }else{
        await api.post('/task',{
          macaddress,
          nome,
          registro,
          especialidade,
          chave,
          privativo,
          descricao,
          devolucao,
          type,
          image
        }).then(()=>
          alert("Registrado Com Sucesso!!"),
          setRedirect(true)
        )
      }
    }

    //remover registro
  async function remove(){
    const options = window.confirm('Voce De seja Remover Esse Registro ?')
      if(options === true){

        alert("OK, Vamos Remover")
        await api.delete(`/task/${match.params.id}`)
        .then(() => {setRedirect(true)})
      }else{
        alert("OK, Vamos Manter")
      }

  }
  
  //função de captura de foto pela webcam
  const capture = React.useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot({width:640,height:300});
          console.log(imageSrc);
          setImage(imageSrc)
          return imageSrc
          
        },
        [webcamRef]
      ); 

      //limpa a foto registrada
      async function Limpar(){
        setImage("")  
            
        return setImage
      }

    useEffect(()=>{
      LoadTaskDetail()
    })

      return (
      <S.Container>
  
        {redirect && <Redirect to="/"/>}
        
        <Header />
        
        <S.Form>   
          <S.ContainerWebCam>

            <S.Webcss>
              <Webcam 
                nome="image" 
                onChange={e => setImage(e.target.value)} 
                value={image}
                ref={webcamRef} 
                audio={false}
                width={240}
                height={150}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                mirrored={true}
              />
            </S.Webcss>
            
            <img src={image} name="image" id="image" image={image} className={webClasse}alt="" value={console.log(image)} />
            
            <S.button>
              <button onClick={capture} className="btn-capturar" >Capturar Foto</button>
              <button onClick={Limpar} className="btn-limpar">Limpar</button>
            </S.button>

          </S.ContainerWebCam>

            <S.typeIcons>
                <S.iconsContent>
                  {
                      TypeIcons.map((icon,index) =>(
                          index > 0 && 
                          <button type="button" onClick={()=>setType(index)}>
                              <img src={icon} alt="icon"
                              className={type && type !== index && 'inative'}/> 
                          </button>
                      ))
                  }
                </S.iconsContent>

                <S.legendaIcons>
                  <h3>Masculino</h3>
                  <h3>Feminino</h3>
                  <h3>Acompanhante</h3>
                </S.legendaIcons>
            </S.typeIcons> 
 

            <S.inputs>
              <S.input>
                <span>Nome</span>
                <input type="text" placeholder="COLABORADOR/ACOMPANHANTE" onChange={e => setNome(e.target.value)} value={nome}/>
              </S.input>

              <S.input>
                <span>Registro</span>
                <input type="text" placeholder="CRM/DRT/RG/CPF" onChange={e => setRegistro(e.target.value)} value={registro}/>
              </S.input>

              <S.input>
                <span>Especialidade</span>
                
                <input type="text" list="especialidade" name="especialidade" placeholder="..." onChange={e => setEspecialidade(e.target.value)} value={especialidade}/> 
                <datalist id="especialidade">
                  <option value="G.O"/>
                  <option value="Ortopedia"/>
                  <option value="Captação De Orgãos"/>
                  <option value="Urologia"/>
                  <option value="Mastologia"/>
                  <option value="Medicina Intensiva"/>
                  <option value="Nefrologia"/>
                  <option value="Clínica Médica"/>
                  <option value="Cirurgia Pediátrica"/>
                  <option value="Cirurgia Geral"/>
                  <option value="Cirurgia Vascular"/>
                  <option value="Anestesiologia"/>
                  <option value="Neurocirurgia"/>
                  <option value="Infectologia"/>
                  <option value="Enfermagen"/>
                  <option value="Outros"/>
                </datalist>
                
              </S.input>

              <S.input>
                <span>Chave</span>
                <input type="number" placeholder="NUMERO" onChange={e => setChave(e.target.value)} value={chave} min="1" max="60"/>
              </S.input>

              <S.input>
              <span>Privativo</span>
                
                <input type="text" list="privativo" name="privativo" placeholder="TAMANHO" onChange={e => setPrivativo(e.target.value)} value={privativo}/> 
                <datalist id="privativo">
                  <option value="P"/>
                  <option value="M"/>
                  <option value="G"/>
                  <option value="GG"/>
                  <option value="XG"/>
                </datalist>
              </S.input>

              <S.textarea>
                <textarea placeholder="Observações..." rows={3} name="descricao" onChange={e => setDescricao(e.target.value)} value={descricao}/>
              </S.textarea>

            </S.inputs>
              <S.options>
                <div>
                  <label for="devolucao" >
                      <input 
                        type="checkbox" 
                        name="entregue" 
                        checked={devolucao} 
                        onChange={e => setDevolucao(!devolucao)}
                        id="devolucao"
                      />
                  Entregue</label>
                </div>

                  {match.params.id && <button type="button" onClick={remove}>Excluir</button>}
  
                  <button type="submit" onClick={Save}>Enviar</button>
                
              </S.options>

        </S.Form>
  
        <Footer/>
  
      </S.Container>
      )
    }
    
    export default Task;