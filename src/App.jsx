import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './Home'
import Busqueda from './paginas/Busqueda'
import Navegation from './components/Navegation'
import Footer from './components/Footer'
import Wrapper from './wrapper'
import RegistroInv from './paginas/RegistroInventarios'
import Producto from './paginas/Producto'
import ProductoInv from './paginas/ProductoInvestigacion'
import EdicionProducto from './paginas/EdiciónProducto'
import NuevoProducto from './paginas/NuevoProducto'
import GestionAvisos from './paginas/GestionAvisos'
import GestionUsuario from './paginas/GestionUsuario'
import EdicionUsuario from './paginas/EdicionUsuario'



function App() {

  return (
    <>
    <Navegation/> 
    
      <main className='font-display'>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='busqueda' element={<Busqueda/>}></Route>
          <Route path='registroInv' element={<RegistroInv/>}></Route>
          <Route path='busqueda/producto' element={<Producto/>}></Route>
          <Route path='productoInv' element={<ProductoInv/>}></Route>
          <Route path='productoInv/edicionProducto' element={<EdicionProducto/>}></Route>
          <Route path='nuevoProducto' element={<NuevoProducto/>}></Route>
          <Route path='gestionAvisos' element={<GestionAvisos/>}></Route>
          <Route path='gestionUsuarios' element={<GestionUsuario/>}></Route>
          <Route path='gestionUsuarios/editarUsuario' element={<EdicionUsuario/>}></Route>
        </Routes>
      </main>   

    <Footer/>
    </>
  )
}

export default App
