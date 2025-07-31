import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Home'
import Busqueda from './paginas/Busqueda'
import Navegation from './components/Navegation'
import Footer from './components/Footer'
import Wrapper from './wrapper'



function App() {

  return (
    <>
    <Navegation/> 
    <Wrapper>
      <main className=''>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='busqueda' element={<Busqueda/>}></Route>
        </Routes>
      </main>   
    </Wrapper>
    <Footer/>
    </>
  )
}

export default App
