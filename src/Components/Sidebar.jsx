import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <>
        <div className="Sidebar-Content">
           <Link to="/"><h1>Home</h1> </Link>
            <h1>About</h1>
          {/* <Link to="/Details"> <h1>Preparation</h1></Link>*/}
        </div>
        <div className="Footer"></div>
        </>
    )
}

export default Sidebar