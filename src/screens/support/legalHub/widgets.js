import { Link } from "react-router-dom";
import { MainLinks, LegalLinks } from "../../../config/custom/links";
import { Icons } from "../../../config/images/icons";
import './widgets.css';

export const LegalBody = () => {
    return (
        <div className="support_section">
            <div className="keyHeader">
                <h2>Serch Legal Hub</h2>
                <a href={ MainLinks.helpAndSupport } className="keyArrowBack">
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Help and Support</h3>
                </a>
            </div>
            <h3>We advise everyone to read our legal documents before getting into business with us. We reseve the rights to update
                our legal documents. When such is done, we notify all our users on such updates.
            </h3>
            <div className="support_content">
                <Link to={LegalLinks.communityGuidelines} className="animLink">
                    <h3>Serch Community Guidelines</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.cookiePolicy} className="animLink">
                    <h3>Serch Cookie Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.feedbackPolicy} className="animLink">
                    <h3>Serch Feedback Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.advertPolicy} className="animLink">
                    <h3>Serch Global Advertising Content Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.discriminationPolicy} className="animLink">
                    <h3>Serch Non-Discrimination Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.privacyPolicy} className="animLink">
                    <h3>Serch Privacy Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.referralProgramme} className="animLink">
                    <h3>Serch Referral Programme</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.termsAndConditions} className="animLink">
                    <h3>Serch Terms and Conditions</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.userContent} className="animLink">
                    <h3>Serch User Generated Content</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.zeroPolicy} className="animLink">
                    <h3>Serch Zero Tolerance Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
                <Link to={LegalLinks.accessibility} className="animLink">
                    <h3>Serch Accessibility Policy</h3>
                    <img alt="" src={ Icons.arrowRight } width={20} />
                </Link>
            </div>
        </div>
    );
}