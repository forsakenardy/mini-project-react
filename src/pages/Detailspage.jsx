import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RecipeCard from "../Components/RecipeCard"
import { useParams, Link } from "react-router-dom"

function Details({recipes}){
    const {recipeId} = useParams()
    const recipeCard = recipes.find((recipe) =>{
        return recipe.id === recipeId
    })
    return(
        <>
        {
<div key={recipeCard.id} className="recipe-card">
<img src={recipeCard.image} alt={recipeCard.name} />
    <h3>{recipeCard.name}</h3>
    <p>calories: {recipeCard.calories} </p>
    <p>Servings: {recipeCard.servings}</p>
    <p>{recipeCard.preparation}</p>
    <Link to="/"><button>Go back</button></Link>
</div>       
        }
        </>
    )
}
export default Details