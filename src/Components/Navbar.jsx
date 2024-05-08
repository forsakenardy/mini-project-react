import '../Styles/Navbar.css';
import logo from '../assets/images/logo_nonna-removebg-preview.png'
function Navbar() {
    return (
<>
<div className='navbar'> 
<input placeholder='Search' type="text" />
<h1>NONNA'S RECIPES</h1>
<img className='logo' src={logo} alt="logo" />

</div>

</>
    )
}

export default Navbar

