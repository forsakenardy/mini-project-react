import "../Styles/Navbar.css"
import jsonArray from "../recipes.json"

function MainThing(props) {
    return(
<>

<h1>NONNA'S RECIPES</h1>
{jsonArray.map((recipe)=>{
    return(
    <div className="first-div">
    <div className="section"><h3>{recipe.name}</h3>
    <img src={recipe.image} alt="food" />
    <p>{recipe.calories}</p>
    <p>{recipe.servings}</p>
    </div>
</div>
)})}

<div className="first-div">
    <p>{props.jsonArray.image}</p>
    <p>
        {props.jsonArray.calories}
    </p>
</div>

        </>
    )
}
export default MainThing