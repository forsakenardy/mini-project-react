import { useState } from "react";
import { useParams, Link } from "react-router-dom";
function RecipeCard({ recipes }) {
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