import "../Styles/Navbar.css"
import jsonArray from "../recipes.json"
import { useParams, Link } from "react-router-dom"
import { useState } from "react";

function MainThing() {
    const [recipes, setRecipes] = useState(jsonArray);
 const deleteRecipe = recipeId => { 
 const filteredRecipe = recipes.filter(recipe => recipe.id !== recipeId);
 return setRecipes(filteredRecipe)}
    return(

<div className="Main-Thing">
    
   {recipes.map((recipe)=>{
    return(
   
    <div key={recipe.id} className="first-div">
    <div className="section">
        
    <img src={recipe.image} alt="food" />
    <h3>{recipe.name}</h3>
    <p>calories: {recipe.calories} </p>
    <p>Servings: {recipe.servings}</p>
    <button onClick={()=>deleteRecipe(recipe.id)}>Delete</button>
    <Link to={`/Details/${recipe.id}`}><button>Details</button></Link>
    </div>
</div>
)})}
</div>

    )
}
export default MainThing