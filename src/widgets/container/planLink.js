import { Link } from "react-router-dom";
import { InformationLinks } from "../../config/custom/links";

const PlanLink = ({image, classname, planName, subtitle}) => {
    return (
        <div className="plan">
            <div className="planHeader">
                <img alt='' src={ image } width={ 40 } />
                <h2>Plan <strong className={classname }>{ planName }</strong></h2>
            </div>
            <Link to={ InformationLinks.payment } className="planDetail">Learn More</Link>
        </div>
    );
}

export default PlanLink;