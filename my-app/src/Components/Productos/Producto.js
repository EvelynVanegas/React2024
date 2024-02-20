import './Producto.css';
import FechaProducto from './FechaProducto';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Producto(props) {

    const [nombre, setNombre] = useState(props.producto.nombre);

    const precio = props.producto.precio;


    const clickHandler = () => {
        alert('Entra');
        setNombre('Nuevo nombre');
    }

    const borraHandler = () => {
        props.borraProducto(props.producto.id);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='producto'>

            <FechaProducto fecha={props.producto.fecha} />

            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
            <Button onClick={clickHandler}>Cambia nombre</Button>

            <Button variant="warning" onClick={handleShow}>
                Ver detalles
            </Button>
            <Button variant="danger" onClick={borraHandler}>BORRAR</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nombre}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Detalles de mi producto: {precio}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OKEY
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Producto;