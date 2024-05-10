import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate is not used
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
function FormPage({ recipes, setRecipes }) {
    // well done on using useState to manage the form state in an object
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        image: "",
        calories: "",
        servings: 1,
        preparation: "",
        id: String(Math.floor(Math.random() * 10000000))
    })
    const handleInputs = (event) => {
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        console.log(field, value)
        setNewRecipe({
            ...newRecipe,
            [field]: value,
        })
    }
    const handleSubmit = (event) => {
        console.log("SUBMIT: ", newRecipe);
        event.preventDefault();
        setRecipes([newRecipe, ...recipes]);
        // once you create the new recipe, you can redirect the user to the home page
        // you can use the navigate hook to do this
        // const navigate = useNavigate();
        // navigate("/"); // this takes the user to the home page

        // another option is to empty the form fields after submitting the form and display a modal to the user
    }
    return (
        <> <div className="form-content">
            <form onSubmit={handleSubmit} className="formulary" action="">
                <label className="name" htmlFor="Name">Name</label>
                <input onChange={handleInputs} type="text" value={newRecipe.name} name="name" />
                <label htmlFor="image">Image</label>
                <input onChange={handleInputs} type="text" value={newRecipe.image} name="image" />
                <label htmlFor="Calories">Calories</label>
                <input onChange={handleInputs} type="number" value={newRecipe.calories} name="calories" />
                <label htmlFor="Preparation">Preparation</label>
                <input onChange={handleInputs} type="text" value={newRecipe.preparation} name="preparation" />
                <button className="submit" type="submit">Send recipe</button>
                <Link to="/"><button className="back-back">Go back</button></Link>
            </form>
        </div>

        </>
    )
}
export default FormPage