import Producto from "./Producto";
import FiltroProductos from './FiltroProductos';
import Alert from 'react-bootstrap/Alert'

import { useState } from "react";

function Productos(props) {

    const [ano, setAno] = useState('');

    const updateAno = (ano) => {
        setAno(ano);
    }

    const ProductosFiltrados = props.productos.filter((elemento) => {
        if (ano !== '') {
            return elemento.fecha.getFullYear().toString() === ano;
        }
        return true;
    })

    let contenido = <Alert variant="primary" >No hay productos</Alert>

    if (ProductosFiltrados.length > 0) {
        contenido = <div>
            {ProductosFiltrados.map((elemento) => {
                return (
                    <Producto key={elemento.id} producto={elemento} borraProducto={props.borraProducto} />
                )
            })}
        </div>
    }

    return (
        <>
            <FiltroProductos updateAno={updateAno} />
            {contenido}
        </>
    )
}

export default Productos;