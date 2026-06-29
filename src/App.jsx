import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/contact'
import Facalty from './Pages/Facalty'

const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/faculty' element={<Facalty/>}/>

   </Routes>
   </>
  )
}

export default App