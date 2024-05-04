import "../Styles/Navbar.css"
import jsonArray from "../recipes.json"
import { Link } from "react-router-dom"

function MainThing(props) {
    return(

<div className="Main-Thing">
    
   {jsonArray.map((recipe)=>{
    return(
   
    <div className="first-div">
    <div className="section">
        
    <Link to="/"><img src={recipe.image} alt="food" /></Link>
    <h3>{recipe.name}</h3>
    <p>calories: {recipe.calories} </p>
    <p>Setvings: {recipe.servings}</p>
    </div>
</div>
)})}
</div>

    )
}
export default MainThing