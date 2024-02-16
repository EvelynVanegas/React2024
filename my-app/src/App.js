import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UserInterfaz/Header';
import Footer from './Components/UserInterfaz/Footer';

function App() {

  const productos = [
    {
      nombre: 'Primer producto',
      precio: 45.5,
      fecha: new Date(2023, 2, 5)
    },
    {
      nombre: 'Segundo producto',
      precio: 45.5,
      fecha: new Date(2024, 1, 7)
    },
    {
      nombre: 'Tercer producto',
      precio: 45.5,
      fecha: new Date()
    }
  ]




  return (
    <div>
      
      <Header header />
      <Productos productos={productos} />
      <Footer footer />

    </div>
  );
}

export default App;
