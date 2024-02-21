import './App.css';
import Header from './IU/Header';
import Footer from './IU/Footer';
import FormularioNumeros from './IU/FormularioNumeros';
import Resultado from './IU/Resultado';
import { useState } from 'react';


function App() {

  const [resultado, setResultado] = useState('');

  const addSolucion = (sum) => {
    setResultado(sum);
  }

  return (
    <div>
      <Header />

      <FormularioNumeros addSolucion={addSolucion}/>
      <Resultado resultado={resultado}/>

      <Footer />
    </div>
  );
}

export default App;
