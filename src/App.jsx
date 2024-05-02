import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import jsonArray from './recipes.json'
import MainThing from './Components/MainThing.jsx' 

function App() {
  const newDate = new Date();
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<MainThing jsonArray={jsonArray}/>} />
    </Routes>
    {/*<footer>©️ {newDate.getFullYear()}</footer>*/}
    </>
  )
}

export default App
