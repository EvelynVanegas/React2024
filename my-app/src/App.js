import './App.css';
import Producto from './Components/Producto';
import Productos from './Components/Productos';

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
      <p>Hola mundo</p>
      <p>Producto tal</p>

      <Productos productos={productos} />
      
    </div>
  );
}

export default App;
