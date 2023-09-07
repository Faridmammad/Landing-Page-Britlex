import "../assets/css/banner.css";
import girl_Pic from "../assets/images/Learning languages-bro 1.png";
import bulb from "../assets/images/light-bulb-svgrepo-com 1.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_left">
        <div className="banner_Header">
            <div className="banner_Title">Learn Any Foreign Language</div>
            <div className="banner_Icon"><img src={bulb}></img></div>
        </div>
        <div className="banner_Subtext">
        With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.
        </div>
        <button className="banner_Button">Get started</button>
      </div>


      <div className="banner_right">
      <img className="girl_Pic" src={girl_Pic} />

      
      </div>
    </div>
  );
}

export default Banner;
