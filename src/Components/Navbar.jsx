import '../Styles/Navbar.css';
import logo from '../assets/images/logo_nonna-removebg-preview.png'
function Navbar() {
    return (
<>
<div className='navbar'> 
<h1 className='nombre'>NONNA'S RECIPES</h1>
<img className='logo' src={logo} alt="logo" />

</div>

</>
    )
}

export default Navbar

