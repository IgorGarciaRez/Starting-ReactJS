import './App.css'
import styled from 'styled-components'
import { useEffect, useState } from 'react'


const Button = styled.button`
  background: ${props => props.cor || 'transparent'};
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  margin: 0 10px;
  padding: 0.25em 1em;
`

const AreaEntrada = styled.input``


function BomDia(props){
  return(
    <p>
      Bom dia {props.nome}!!
    </p>
  )
}

function Imprimir(props){
  return(
    <div style={ {backgroundColor: '#363a42', fontWeight: '100'} }>
      {props.children}
    </div>
  )
}

let caminho = "https://images.psg.media/media/27084/hero_21-22_neymar.png?center=0.5,0.5&mode=crop&width=200&height=200&quality=60"

function App() {

  const [contador, setContador] = useState(0)
  const [nome, setNome] = useState("")
  const [conta, setConta] = useState(0)
  const [gorjeta, setGorjeta] = useState(0)
  const [lista, setLista] = useState([])

  function carregar(){
    console.log("olaaaa")
    setLista(["Alface", "Tomate", "Cebola"])
  }

  useEffect( carregar, [])

  useEffect(
    () => {console.log("conta modificada")},
  [conta])

  function acao(e){
    console.log(e.target.value)
    setNome(e.target.value)
  }

  return (
    <div className="app">
        <p>
          Ola PSG!
        </p>
        <img src={caminho} alt="logo google"/>
        <BomDia nome={"Menino Ney"}/>
        
        <Imprimir>
          <h1>IMFG</h1>
          <h3>Campus Formiga</h3>
        </Imprimir>

        <Button>
          Botao sem links
        </Button>
        <Button cor="#00f">
          Botao Azul
        </Button>

        <AreaEntrada type="date"/><br/>

        <AreaEntrada value={nome} placeholder="Entre com seu nome" onChange={acao}/>
        { nome.length > 0 &&
          <div>Voce digitou o nome: {nome}</div>
        }
        

        
        <Button cor="#f00" onClick={ () => setContador(contador+1)}>
          NAO CLIQUE!!
        </Button>
        { contador > 0 &&
          <div>Voce destruiu {contador} {contador === 1 ? "país" : "países"} </div>
        }

        <p>Valor Conta</p>
        <AreaEntrada value={conta} onChange={  (e) => setConta(parseFloat(e.target.value)) }/>
        <p>Valor Gorjeta</p>
        <AreaEntrada value={gorjeta} placeholder="%" onChange={ (e) => setGorjeta(parseFloat(e.target.value)) }/>
        
        { conta > 0 &&
          <div>
            <p>Subtotal: R${conta} </p>
            <p>Gorjeta: R${gorjeta/100 * conta} </p>
            <p>Total: R${gorjeta/100 * conta + conta} </p>
          </div>
        }

        <ul>
          {lista.map( (valor, indice) => (<li key={indice}>{valor}</li>))}
        </ul>

    </div>
  );
}

export default App;
