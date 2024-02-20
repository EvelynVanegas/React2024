import './App.css';
import Productos from './Components/Productos/Productos';
import Header from './Components/UserInterfaz/Header';
import Footer from './Components/UserInterfaz/Footer';
import NuevoProducto from './Components/NuevoProducto/NuevoProducto';
import { useState } from 'react';

function App() {

  const [productos, setProductos] = useState(
    [
      {
        id: Math.random().toString(),
        nombre: 'Primer producto',
        precio: 45.5,
        fecha: new Date(2023, 2, 5)
      },
      {
        id: Math.random().toString(),
        nombre: 'Segundo producto',
        precio: 45.5,
        fecha: new Date(2024, 1, 7)
      },
      {
        id: Math.random().toString(),
        nombre: 'Tercer producto',
        precio: 45.5,
        fecha: new Date()
      },
      {
        id: Math.random().toString(),
        nombre: 'Cuarto producto',
        precio: 45.5,
        fecha: new Date()
      }
    ]
  )

  const addProducto = (producto) => {
    //setProductos(productos.push(producto));
    setProductos((prevProductos) => {
      return [producto, ...prevProductos];
    });
  }

  const borraProducto = (id) => {
    let copiaProductos = [...productos];
    copiaProductos = copiaProductos.filter((elemento) => {
      return elemento.id !== id;
    })
    setProductos(copiaProductos);
  }

  return (
    <div>
      
      <Header />

      <NuevoProducto addProducto={addProducto}/>

      <Productos productos={productos} borraProducto={borraProducto}/>
      
      <Footer />

    </div>
  );
}

export default App;
