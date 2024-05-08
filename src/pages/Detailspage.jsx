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
    <h3>{recipeCard.name}<Link to="/"><button className="back-button">Go back</button></Link></h3>
    <h4>How to make it:</h4>
    <p>{recipeCard.preparation}</p>
    <p>calories: {recipeCard.calories} </p>
    <p>Servings: {recipeCard.servings}</p>


</div>       
        }
        </>
    )
}
export default Details