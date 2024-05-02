import '../Styles/Navbar.css';
import menubar from '../assets/images/menu.png'
import logo from '../assets/images/logo nonna.png'
function Navbar() {
    return (
<>
<div className='navbar'> 
<img className='menu' src={menubar} alt="menubar" />
<img className='logo' src={logo} alt="logo" />

</div>

</>
    )
}

export default Navbar

