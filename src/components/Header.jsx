import "../assets/css/header.css";
import logo from "../assets/Britlex.png";
import hamburger from '../assets/images/Group 28.svg'
function Header() {
  return (
    <header>
      <a href="#">
        <img src={logo} className="logo" />
      </a>
      <ul>
        <li><a href="#">Home</a></li> 
        <li><a href="#">Skills</a></li> 
        <li><a href="#">About Us</a></li> 
        <li><a href="#">Pricing</a></li> 
        <li><a href="#">Contacts</a></li> 
      </ul>

      <button className="button_Header">Let`s Talk</button>
      <img src={hamburger} className="hamburger"/>
    </header>
  );
}

export default Header; 
