import './FormularioNumeros.css';
import { useState } from 'react';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FormularioNumeros(props) {

    const [numeroA, setnumeroA] = useState('');
    const [numeroB, setnumeroB] = useState('');
    const [operacion, setOperacion] = useState('');

    const numeroAHadler = (event) => {
        setnumeroA(event.target.value)
    }
    const numeroBHadler = (event) => {
        setnumeroB(event.target.value)
    }

    const submitHandler = (event, operacion) => {
        event.preventDefault(); // Desactiva la recarga completa de la página al hacer un submit

        let calculatedResult = 0;
        switch (operacion) {
            case '+':
                calculatedResult = parseInt(numeroA) + parseInt(numeroB);
                setOperacion(operacion);
                break;
            case '-':
                calculatedResult = parseInt(numeroA) - parseInt(numeroB);
                setOperacion(operacion);
                break;
            case '*':
                calculatedResult = parseInt(numeroA) * parseInt(numeroB);
                setOperacion(operacion);
                break;
            case '/':
                if (parseInt(numeroB) !== 0) {
                    calculatedResult = parseInt(numeroA) / parseInt(numeroB);
                    setOperacion(operacion);
                } else {
                    alert('Error: División por cero');
                    setOperacion(operacion);
                    return;
                }
                break;
            default:
                alert('Error: Operación no válida');
                setOperacion(operacion);
                return;
        }
        props.addSolucion(calculatedResult);
    }


    return (
        <Form onSubmit={submitHandler}>
            <FloatingLabel controlId="floatingInputA" label="A" className="mb-3">
                <Form.Control type="number" placeholder="A" onChange={numeroAHadler} value={numeroA} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputB" label="B" className="mb-3">
                <Form.Control type="number" placeholder="B" onChange={numeroBHadler} value={numeroB} />
            </FloatingLabel>
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button
                            type='submit'
                            onClick={(event) => submitHandler(event, '+')}
                            variant={operacion === '+' ? 'primary' : 'secondary'}
                            active={operacion === '+'}
                        >
                            +
                        </Button>
                        <Button
                            type='submit'
                            onClick={(event) => submitHandler(event, '-')}
                            variant={operacion === '-' ? 'primary' : 'secondary'}
                            active={operacion === '-'}
                        >
                            -
                        </Button>
                        <Button
                            type='submit'
                            onClick={(event) => submitHandler(event, '*')}
                            variant={operacion === '*' ? 'primary' : 'secondary'}
                            active={operacion === '*'}
                        >
                            *
                        </Button>
                        <Button
                            type='submit'
                            onClick={(event) => submitHandler(event, '/')}
                            variant={operacion === '/' ? 'primary' : 'secondary'}
                            active={operacion === '/'}
                        >
                            /
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </Form>
    )
}

export default FormularioNumeros;