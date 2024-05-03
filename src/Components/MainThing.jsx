import "../Styles/Navbar.css"
import jsonArray from "../recipes.json"
import { Link } from "react-router-dom"

function MainThing(props) {
    return(
<>

<h1>NONNA'S RECIPES</h1>
{jsonArray.map((recipe)=>{
    return(
    <div className="first-div">
    <div className="section">
        
    <Link to="/"><img src={recipe.image} alt="food" /></Link>
    <h3>{recipe.name}</h3>
    <p>{recipe.calories} calories</p>
    <p>{recipe.servings}</p>
    </div>
</div>
)})}

        </>
    )
}
export default MainThing