import "../assets/css/about.css";
import about_Img from "../assets/images/Business competition-bro 1.png";

function About() {
  return (
    <div className="about">
      <div className="about_Left">
        <div className="about_Title">About Us</div>
        <div className="about_Subtitle">
          The model offers a framework for discussing problems related to the
          users experience, as well as possible ways and means of solving them.
          Application development begins at the top level (strategy), where the
          future software product is described quite abstractly from the point
          of view of the expectations of both users and the customer.
        </div>
        <div className="about_Data">
            <div className="about_Data_Group">
            <div className="about_Data_Text">800</div>
            <div className="about_Data_Subtext">Pupils</div>
            </div>
            
            <div className="about_Data_Group">
            <div className="about_Data_Text">18</div>
            <div className="about_Data_Subtext">Teachers</div>
            </div>
            <div className="about_Data_Group">
            <div className="about_Data_Text">6</div>
            <div className="about_Data_Subtext">Foreign Languages</div>
            </div>
        </div>
      </div>
      <div className="about_Right">
        <img className="about_Img" src={about_Img} />
      </div>
    </div>
  );
}

export default About;
