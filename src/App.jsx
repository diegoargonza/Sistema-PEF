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
        </Routes>
      </main>   
    </Wrapper>
    <Footer/>
    </>
  )
}

export default App
