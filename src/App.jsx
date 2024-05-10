import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import jsonArray from './recipes.json'
import MainThing from './Components/MainThing.jsx' 
import { Link } from 'react-router-dom' // Link is not used
import Sidebar from './Components/Sidebar.jsx'
import Detailspage from './pages/Detailspage.jsx'
import FormPage from './pages/FormPage.jsx'
import AboutUs from './pages/AboutUsPage.jsx'
import RecipeCard from './Components/RecipeCard.jsx' // RecipeCard is not used

function App() {
  const [recipes, setRecipes] = useState(jsonArray)
  const newDate = new Date(); // newDate is not used
  return(
    <>
    <Navbar />
    <Sidebar/>
    <Routes>
      <Route path="/" element={<MainThing recipes={recipes} setRecipes={setRecipes}/>} />
      <Route path="/AboutUs" element={<AboutUs/>}/>
      {/*Aquí metemos un link para clicar en la foto y que lleve a 
      los detalles de la comida en cuestión*/}

      <Route path="/Details/:recipeId" element={<Detailspage recipes={recipes} setRecipes={setRecipes}/>}></Route>
      <Route path="/FormPage" element={<FormPage recipes={recipes} setRecipes={setRecipes}/>}></Route>
    </Routes>
    {/*<footer>©️ {newDate.getFullYear()}</footer>*/}
    </>
  )
}

export default App
