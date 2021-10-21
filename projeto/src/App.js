import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';

function App() {
  return (
    /*<div className="App">
      <img src={calendario}
        alt='calendario'
        style={ {width: '100px', height: '100px', fill: '#fff'} }/><br/>
        <img src="https://qrtag.net/api/qr_4.png?url=https://www.even3.com.br/participante/sessions/" alt="site do google"/>
    </div>*/

    <div>

      <BrowserRouter>

        <header>
          <h1>Minha pagina</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Categoria/esportes">Esportes</Link></li>
            <li><Link to="/Categoria/lazer">Lazer</Link></li>
            <li><Link to="/Categoria/economia">Economia</Link></li>
          </ul>
        </header>
      
      
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/Sobre">
            <Sobre/>
          </Route>

          <Route path="/Categoria/:categ">
            <Categoria/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
