import './App.css';
import Header from './IU/Header';
import Footer from './IU/Footer';
import FormularioNumeros from './IU/FormularioNumeros';
import Resultado from './IU/Resultado';

function App() {
  return (
    <div>
      <Header />

      <FormularioNumeros />
      <Resultado />

      <Footer />
    </div>
  );
}

export default App;
