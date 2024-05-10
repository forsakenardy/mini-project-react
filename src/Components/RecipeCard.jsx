import { useState } from "react"; // useState is not used
import { useParams, Link } from "react-router-dom"; // none of these are used
function RecipeCard({ recipes }) { // well done on destructuring the props directly
    // you can also destructure props.recipe directly in the function signature
    // This way, you can avoid using props.recipes in the function body
    // Example: const { name, image, preparation } = recipes;

    // 👀 be careful with the naming of the props. It should be singular, as it represents a single recipe


    return (
        <>
            <h3>PREPARATION</h3>
            <section >

                <h3>{recipes.name}</h3>
                <img src={recipes.image} alt={recipes.name} />
                <p>{recipes.preparation}</p>

            </section>
        </>
    )
}
export default RecipeCard