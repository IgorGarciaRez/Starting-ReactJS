import * as C from './addAreaStyles'
import { useEffect, useState } from 'react'


function AddArea(props) {

    const [texto, setTexto] = useState('')

    function inserir(e){
        if (e.code === 'Enter' && texto !== ''){
            props.onEnter(texto)
            setTexto('')
        }
    }

    return (
        <C.container>
            <div className="image">+</div>
            <input type="text"
                    placeholder="Add a task"
                    value={texto}
                    onChange={ (e) => setTexto(e.target.value)}
                    onKeyUp={inserir}/>
        </C.container>
    );
}

export default AddArea;
