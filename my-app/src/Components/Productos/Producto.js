import './Producto.css';
import FechaProducto from './FechaProducto';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre);

    const precio = props.producto.precio;


    const clickHandler = () => {
        alert('Entra');
        setNombre('Nuevo nombre');
    }

    return (
        <div className='producto'>
            
            <FechaProducto fecha={props.producto.fecha}/>

            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
            <Button onClick={clickHandler}>Cambia nombre</Button>
        </div>
    )
}

export default Producto;