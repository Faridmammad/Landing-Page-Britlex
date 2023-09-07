import "../assets/css/contact.css";
import contact_Img from "../assets/images/Ресурс 1 1.png"

function Contact() {
  return (
    <div className="contact">
      <div className="contact_Left">
        <img src={contact_Img} className="contact_Img"></img>
      </div>

      <div className="contact_Right">
        <div className="contact_Title">Contact Us</div>
        <div className="contact_Subtext">
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </div>
        <div className="contact_Form">

    <input name="email" className="contact_Label" placeholder="Enter your e-mail" type="email" />
          <button className="contact_Button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
