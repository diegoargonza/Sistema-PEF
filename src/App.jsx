import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Home'
import Busqueda from './paginas/Busqueda'
import Navegation from './components/Navegation'
import Footer from './components/Footer'
import Wrapper from './wrapper'
import Consulta from './paginas/Consulta'
import RegistroInv from './paginas/RegistroInventarios'
import Reportes from './paginas/Reportes'
import Producto from './paginas/Producto'
import ProductoInv from './paginas/ProductoInvestigacion'
import EdicionProducto from './paginas/EdiciónProducto'

function App() {

  return (
    <>
    <Navegation/> 
    <Wrapper>
      <main className=''>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='busqueda' element={<Busqueda/>}></Route>
          <Route path='consulta' element={<Consulta/>}></Route>
          <Route path='registroInv' element={<RegistroInv/>}></Route>
          <Route path='reportes' element={<Reportes/>}></Route>
          <Route path='busqueda/producto' element={<Producto/>}></Route>
          <Route path='productoInv' element={<ProductoInv/>}></Route>
          <Route path='productoInv/edicionProducto' element={<EdicionProducto/>}></Route>
        </Routes>
      </main>   
    </Wrapper>
    <Footer/>
    </>
  )
}

export default App
