import './App.css'
import * as C from './styles'
import { useEffect, useState } from 'react'
import AddArea from './components/addArea'
import ListItem from './components/listItem'


function App() {

  const [list, setList] = useState([
    {id: 1, task: "Correr", done: true},
    {id: 2, task: "Comer", done: true},
    {id: 3, task: "Academia", done: false}
  ])

  function addTask(taskName){
    let newList = [...list] //spread operator
    newList.push({
      id: list.length+1,
      task: taskName,
      done: false
    })
    setList(newList)
  }

  function ChangeTask(id, done){
    let newList = [...list]
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done
      }
    }
    setList(newList)
  }

  const nome = "Igor"
  //literal string ou template string
  const b = `Ola ${nome}`


  return (
    <C.app>
      <C.area>
        <C.header><p>{b}</p></C.header>

        <AddArea onEnter={addTask}/>

{/*<li key={indice}><input type= 'checkbox'/>{valor.task}</li>*/}

        <ul style={{listStyle: 'none'}}>
          { list.map( (valor, indice) => (
              <ListItem key={indice} valor={valor} onChange={ChangeTask}/>
            ))}
        </ul>
      </C.area>
    </C.app>
  )
}

export default App;
