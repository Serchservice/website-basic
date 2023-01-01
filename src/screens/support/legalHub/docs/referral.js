import { SupportLinks } from "../../../../config/custom/links";
import { Icons } from "../../../../config/images/icons";
import { Footer } from "../../../../widgets/footer";
import { Header } from "../../../../widgets/header";

export const ReferralProgramme = () => {
    return(
        <div className="serch">
            <Header />
            <div className="support_section">
                <div className="keyHeader">
                        <h2>Serch Referral Programme</h2>
                        <a href={ SupportLinks.legal } className="keyArrowBack">
                            <img alt="" src={ Icons.arrowLeft } width={30} />
                            <h3>Back to Legal</h3>
                        </a>
                    </div>
                <div className="legal"></div>
            </div>
            <Footer />
        </div>
    );
}