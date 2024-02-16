import './Resultado.css';
import {useState} from 'react';

function Resultado() {

    const [resultado, setResultado] = useState(0);

    return (
        <div>
            <h2>{resultado}</h2>
        </div>
    )
}

export default Resultado;