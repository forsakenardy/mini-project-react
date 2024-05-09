import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
        <div className="Sidebar-Content">
           <Link to="/"><h1>Home</h1> </Link>
            <Link to="/aboutUs"><h1>About Us</h1></Link>
            <Link to="/FormPage"><h1>Create New Recipe</h1></Link>
          {/* <Link to="/Details"> <h1>Preparation</h1></Link>*/}
          <button className="magic"><h1>Magic Button</h1></button>
        </div>
        <div className="Footer"></div>
        </>
    )
}

export default Sidebar