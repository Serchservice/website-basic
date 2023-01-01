import { Emails } from "../../../config/custom/emails";
import { MainLinks } from "../../../config/custom/links";
import { Icons } from "../../../config/images/icons";
import "./widgets.css";
import "../support.css";

export const SupportBody = () => {
    return (
        <div className="support_section">
            <div className="keyHeader">
                <h2>Serch Support Hub</h2>
                <a href={MainLinks.helpAndSupport} className="keyArrowBack">
                    <img alt="" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Help and Support</h3>
                </a>
            </div>
            <h3>
                Feeling like contacting Serch on any matter? Go through our support hub and talk to the right Serch team.
                It's much easier to talk to the right people and get things sorted out quickly.
            </h3>
            <div className="support_content">
                <p>
                    Having issues like logging into your account, creating an account, authenticating your account or deleting your account?
                    Contact us here <a href={ Emails.account }>account@serchservice.com</a>.
                </p>
                <p>
                    Want to join the Serch team in introducing a service made easy to the world? Want to find out if there are any open roles?
                    Contact us here <a href={ Emails.team }>team@serchservice.com</a>.
                </p>
                <p>
                    Don't want to join the community but still want to contribute? Feel like personally contacting our team community?
                    Contact us here <a href={ Emails.sgc }>sgc@serchservice.com</a>.
                </p>
                <p>
                    For issues concerning a user, like reporting a user for anything,
                    Contact us here <a href={ Emails.request }>request@serchservice.com</a>. If it is a matter that will involve
                    law authorities, make sure to contact the law agencies in your country first, then report here.
                </p>
                <p>
                    For issues concerning a provider, like reporting a provider for anything,
                    Contact us here <a href={ Emails.provide }>provide@serchservice.com</a>. If it is a matter that will involve
                    law authorities, make sure to contact the law agencies in your country first, then report here.
                </p>
                <p>
                    Found an error or a broken feature in our platforms? Whether it be a glitch or a real problem,
                    Contact us here <a href={ Emails.report }>report@serchservice.com</a>.
                </p>
                <p>
                    Have any idea/s on how we can improve our services and make it better? Any suggestion?
                    Contact us here <a href={ Emails.improve }>improve@serchservice.com</a>.
                </p>
                <p>
                    Couldn't find the team email for your issue? Or you want to ask a question?
                    Contact us here <a href={ Emails.ask }>ask@serchservice.com</a>.
                </p>
            </div>
        </div>
    );
}

export const SupportEnd = () => {
    return (
        <div className="end">
            <h2>Don't feel like going to your mail box?</h2>
            <div className="endSection">
                <img alt="" src={ Icons.techSupport } width={300}/>
                <div className="emailUs">
                    <h3>Send us an email here...</h3>
                    <form className="emailBox">
                        <label>Problem</label>
                        <textarea name="message" className="problemInput"/>
                        <input type="Text" placeholder="Name" className="emailInput"/>
                        <input type="mail" placeholder="Email" className="emailInput"/>
                        <button> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
}