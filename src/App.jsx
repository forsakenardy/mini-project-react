import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import jsonArray from './recipes.json'
import MainThing from './Components/MainThing.jsx' 
import { Link } from 'react-router-dom'

function App() {
  const newDate = new Date();
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainThing jsonArray={jsonArray}/>} />
      {/*Aquí metemos un link para clicar en la foto y que lleve a 
      los detalles de la comida en cuestión*/}
      {/*<Route path="/Details" element={<Details />}></Route>*/}
    </Routes>
    {/*<footer>©️ {newDate.getFullYear()}</footer>*/}
    </>
  )
}

export default App
