import "../assets/css/content.css";

import speaking_Img from "../assets/images/Shared goals-bro 1.png";

import writing_Img from "../assets/images/Typewriter-bro 1.png";

import reading_Img from "../assets/images/House bookshelves-bro 1.png";

import listening_Img from "../assets/images/Podcast audience-bro 1.png";

function Content() {
  return (
    <div className="content">
      <div className="content_Title">Skills</div>

      <div className="content_Container">
        <div className="speaking">
          <div>
            <img src={speaking_Img} className="content_Img_S"></img>
          </div>
          <div className="contetnt_Text">
            <div className="content_Text_Title">Speaking</div>
            <div className="content_Text_Subtitle">
              Improve your English skills and confidence. Live classes and
              interactive lessons online. 20% extra free for a limited time only <br></br><br></br>
              Learn English online and improve your skills through our
              high-quality courses and resources – all designed for adult
              language learners.
            </div>
          </div>
          <button className="content_Button">Learn More</button>
        </div>

        <div className="writing">
          <div>
            <img src={writing_Img} className="content_Img_W"></img>
          </div>
          <div className="contetnt_Text">
            <div className="content_Text_Title">Writing</div>
            <div className="content_Text_Subtitle">
              One of the most important and extensive areas of natural science,
              the science that studies substances, also their composition
            </div>
          </div>
          <button className="content_Button">Learn More</button>
        </div>

        <div className="reading">
          <div>
            <img src={reading_Img} className="content_Img_R"></img>
          </div>
          <div className="contetnt_Text">
            <div className="content_Text_Title">Reading</div>
            <div className="content_Text_Subtitle">
              perception and response actions of the user resulting from the use
              and/or upcoming use of the product, system or service
            </div>
          </div>
          <button className="content_Button">Learn More</button>
        </div>

        <div className="listening">

          <div className="listening_Left">
              <div className="contetnt_Text">
            <div className="content_Text_Title">Listening</div>
            <div className="content_Text_Subtitle">
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding
            </div>
          </div>
          <button className="content_Button">Learn More</button>
          </div>
          
          <div className="listening_Right">
              <div>
            <img src={listening_Img} className="content_Img_L"></img>
          </div>
          </div>
        
        
          
        </div>
      </div>
    </div>
  );
}

export default Content;
