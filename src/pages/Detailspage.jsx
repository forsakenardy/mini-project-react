import { useState } from "react" // useState is not used
import { useNavigate } from "react-router-dom" // useNavigate is not used
import RecipeCard from "../Components/RecipeCard" // RecipeCard is not used
import { useParams, Link } from "react-router-dom"

function Details({ recipes }) {
    const { recipeId } = useParams();

    // well done on using find to get the recipe with the matching id
    const recipeCard = recipes.find((recipe) => {
        return recipe.id === recipeId
    })

    console.log(recipes); // when deploying the app, make sure to remove all console.log statements
    return (
        <>

            {
                <div className="Main-Thing-2"> 
                {/* By convention, we name classes in kebab-case. 
                    Avoid using so generic class names like Main-Thing-2.
                */}
                    <div key={recipeCard.id} className="recipe-card">
                        <img src={recipeCard.image} alt={recipeCard.name} />
                        {/* another-hover is very generic. Try to use more descriptive class names */}
                        <h3>{recipeCard.name}<Link to="/"><button className="back-button another-hover">Go back</button></Link></h3>
                        <h4>How to make it:</h4>
                        <p>{recipeCard.preparation}</p>
                        <p className="info">calories: {recipeCard.calories}</p>
                        <p className="info">Servings: {recipeCard.servings}</p>
                    </div>
                </div>
            }

        </>
    )
}
export default Details