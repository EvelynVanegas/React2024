import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col>
                        <Form.Label>Nombre </Form.Label>
                        <Form.Control onChange={nombreHadler} type='text' value={nombre} />
                    </Col>

                    <Col>
                        <Form.Label>Precio </Form.Label>
                        <Form.Control onChange={precioHadler} type='number' value={precio} />
                    </Col>
                    <Col>
                        <Form.Label>Fecha </Form.Label>
                        <Form.Control onChange={fechaHadler} type='date' value={fecha} />
                    </Col>
                    <Col>
                        <Button type='submit' variant="success">Añadir Producto</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default NuevoProducto;