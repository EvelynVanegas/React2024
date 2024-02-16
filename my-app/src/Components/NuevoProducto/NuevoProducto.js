import { useState } from "react";

const NuevoProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');

    const nombreHadler = (event) => {
        setNombre(event.target.value)
    }
    const precioHadler = (event) => {
        setPrecio(event.target.value)
    }
    const fechaHadler = (event) => {
        setFecha(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault(); // Desactiva la recarga completa de la página al hacer un submit
        const producto = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha)
        }

        props.addProducto(producto);
        setNombre('');
        setPrecio('');
        setFecha('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Nombre: </label>
                <input onChange={nombreHadler} type='text' value={nombre}/>
            </div>
            <div>
                <label>Precio: </label>
                <input onChange={precioHadler} type='number' value={precio}/>
            </div>
            <div>
                <label>Fecha: </label>
                <input onChange={fechaHadler} type='date' value={fecha}/>
            </div>
            <div>
                <button type='submit'>Añadir Producto</button>
            </div>
        </form>
    )
}

export default NuevoProducto;