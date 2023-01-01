import { SupportLinks } from "../../../../config/custom/links";
import { Icons } from "../../../../config/images/icons";
import { Footer } from "../../../../widgets/footer";
import { Header } from "../../../../widgets/header";

export const FeedBackPolicy = () => {
    return(
        <div className="serch">
            <Header />
            <div className="support_section">
                <div className="keyHeader">
                        <h2>Serch Feedback Policy</h2>
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

export const NonDiscriminationPolicy = () => {
    return(
        <div className="serch">
            <Header />
            <div className="support_section">
                <div className="keyHeader">
                        <h2>Serch Non-Discrimination Policy</h2>
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

export const ZeroTolerancePolicy = () => {
    return(
        <div className="serch">
            <Header />
            <div className="support_section">
                <div className="keyHeader">
                        <h2>Serch Zero Tolerance Policy</h2>
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