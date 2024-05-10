import '../Styles/Navbar.css';
// Good job importing only the necessary files. Try to avoid using multple languages in your code. If you are using English, try to keep it consistent.
import logo from '../assets/images/logo-favicon.png'
import nombre from '../assets/images/nombre.png'

// This code is not formatted correctly. In order to make it more readable, please use the VSCode tool to format all the pages. 
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

