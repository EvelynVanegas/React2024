import './Resultado.css';
import { useState } from 'react';

function Resultado() {

    const [resultado, setResultado] = useState(0);

    return (
        <div className="mt-3">
            <label>Resultado:</label>
            <output id="result" className="form-control">{resultado}</output>
        </div>
    )
}

export default Resultado;