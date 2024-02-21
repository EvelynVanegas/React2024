import './Resultado.css';

function Resultado(props) {

    return (
        <div className="mt-3">
            <label>Resultado:</label>
            <output id="result" className="form-control">{props.resultado}</output>
        </div>
    )
}

export default Resultado;