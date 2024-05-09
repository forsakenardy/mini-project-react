import '../Styles/Navbar.css';
import logo from '../assets/images/logo-favicon.png'
import nombre from '../assets/images/nombre.png'
function Navbar() {
    return (
<>
<div className='navbar'> 
<img className='title'  src={nombre} alt="" />
<img className='logo' src={logo} alt="logo" />

</div>

</>
    )
}

export default Navbar

