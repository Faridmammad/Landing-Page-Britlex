import "../assets/css/pricing.css";
import pricingPic_1 from "../assets/images/Online test-bro 1.png";
import pricingPic_2 from "../assets/images/Lesson-bro 1.png";
import pricingPic_3 from "../assets/images/Webinar-bro 2.png";

function Pricing() {
  return (
    <div className="pricing">
        <div className="pricing_Title">Pricing</div>
<div className="pricing_Plans">
    <div className="pricing_Card">
    <img className="pricing_Img1" src={pricingPic_1} />
    <div className="pricing_Text">Self-study online course</div>
    <div className="pricing_Subtext">Start learning English online in live classes
with qualified EC teachers and students 
from all over the world.</div>
    <div className="pricing_Price">£5.99 per month</div>
    </div>

    <div className="pricing_Card">
    <img className="pricing_Img2" src={pricingPic_2} />
    <div className="pricing_Text">Live online classes</div>
    <div className="pricing_Subtext">Interactive group classes with expert
teachers. Free 7-day trial</div>
    <div className="pricing_Price">£12.99 per month</div>
    </div>
    <div className="pricing_Card">
    <img className="pricing_Img3" src={pricingPic_3} />
    <div className="pricing_Text">Personal Tuition</div>
    <div className="pricing_Subtext">Online one-to-one English tutoring – enjoy
our first session for only $1</div>
    <div className="pricing_Price">£20.99 per month</div>
    </div>

</div>
      </div>
 
  );
}

export default Pricing;