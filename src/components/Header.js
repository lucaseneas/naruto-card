import './Header.css';
import logo from './../images/Logo.png'; 

function Header(props){
    return(
        <container className='ContainerLogo'><img className='Logo' src={logo}></img></container>
    )
}

export default Header;