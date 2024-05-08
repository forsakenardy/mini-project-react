import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
function FormPage({recipes}) {
    const [formRecipes, setRecipes] = useState({
        Name: "",
        Image: "",
        Calories: "",
        Preparation: ""
    })
    handleInputs = (event) => {
const field = event.target.name;
const value = event.target.value;
console.log(field, value)
setRecipes ({
    ...formRecipes,
    [field]: value,
})
const submitForm = (event) => {
    event.preventDefault();
}
    }
    return(
        <>
        
        <form onSubmit={submitForm} className="formulary" action="">
            <label htmlFor="Name">Name</label>
            <input onChange={handleInputs} type="text" value={formRecipes.Name} name="Name"/>
            <label htmlFor="ImageUrl">Image</label>
            <input onChange={handleInputs} type="text" value={formRecipes.Image} name="ImageUrl"/>
            <label htmlFor="Calories">Calories</label>
            <input onChange={handleInputs} type="text" value={formRecipes.Calories} name="Calories"/>
            <label htmlFor="Preparation">Preparation</label>
            <input onChange={handleInputs} type="text" value={formRecipes.Preparation} name="Preparation"/>
            <button type="submit">Send recipe</button>
            <Link to="/"><button>Go back</button></Link>
        </form>
        </>
    )
}
export default FormPage