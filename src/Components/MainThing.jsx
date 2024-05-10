import "../Styles/Navbar.css"
// Avoid importing files you are not using
import jsonArray from "../recipes.json"  // This is not used
import { useParams, Link } from "react-router-dom" // UseParams is not used
import { useState } from "react"; // useState is not used

// The name of the component should not be that generic. It should be more descriptive.
function MainThing({recipes, setRecipes}) {
 
    // well done implementing the deleteRecipe function!
    const deleteRecipe = recipeId => {
        const filteredRecipe = recipes.filter(recipe => recipe.id !== recipeId);
        return setRecipes(filteredRecipe)
    }

    return (


        <div className="Main-Thing">
            {/*
                By convention, we name classes in kebab-case. main-thing instead of Main-Thing
            */ }
            {recipes.map((recipe) => {
                return (

                    <div key={recipe.id} className="first-div">
                        <div className="section">

                            <img src={recipe.image} alt="food" />
                            <h3>{recipe.name}</h3>
                            <p>calories: {recipe.calories} </p>
                            <p>Servings: {recipe.servings}</p>
                            <button className="buttons delete" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                            <Link to={`/Details/${recipe.id}`}><button className="buttons details">Details</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>


    )
}
export default MainThing