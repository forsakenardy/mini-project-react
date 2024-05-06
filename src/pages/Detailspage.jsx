import { useState } from "react"
import { useNavigate } from "react-router-dom"
import RecipeCard from "../Components/RecipeCard"

function Details({recipes, setRecipes}){
    return(
        <>
        {recipes.map((recipe)=>{
            
            return(
                <RecipeCard
                setRecipes={setRecipes}
                key= {recipe.id}
                recipe={recipe.preparation}
                />
            )
        
})}
        </>
    )
}
export default Details