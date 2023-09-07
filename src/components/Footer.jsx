import "../assets/css/footer.css";
import logo from "../assets/Britlex.png";

function Footer() {
  return (
    <div className="footer">
      

        <a href="#">
        <img src={logo} className="logo" />
      </a>
      <ul>
        <li><a href="#">Terms and Conditions</a></li> 
        <li>•</li>
        <li><a href="#">Privacy Policy</a></li> 
        <li>•</li>
        <li><a href="#">Cookie Policy</a></li> 
      </ul>
      </div>
 
 
  );
}

export default Footer;
