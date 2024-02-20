import './FormularioNumeros.css';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function FormularioNumeros() {

    const clickBotones = () => {
        alert('Entra');
    }

    return (
        <form>
            <FloatingLabel controlId="floatingInputA" label="A" className="mb-3">
                <Form.Control type="number" placeholder="A" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputB" label="B" className="mb-3">
                <Form.Control type="number" placeholder="B" />
            </FloatingLabel>
            <div>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button onClick={clickBotones}>+</Button>
                        <Button onClick={clickBotones}>-</Button>
                        <Button onClick={clickBotones}>*</Button>
                        <Button onClick={clickBotones}>/</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </form>
    )
}

export default FormularioNumeros;