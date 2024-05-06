import '../Styles/Navbar.css';
import menubar from '../assets/images/menu.png'
import logo from '../assets/images/logo_nonna-removebg-preview.png'
function Navbar() {
    return (
<>
<div className='navbar'> 
<img className='menu' src={menubar} alt="menubar" />
<h1>NONNA'S RECIPES</h1>
<img className='logo' src={logo} alt="logo" />

</div>

</>
    )
}

export default Navbar

