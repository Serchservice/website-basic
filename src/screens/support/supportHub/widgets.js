import { Emails } from "../../../config/custom/emails";
import { MainLinks } from "../../../config/custom/links";
import { Icons } from "../../../config/images/icons";
import { ContainerLeftImage } from "../../../widgets/container/containers";
import { Link } from "react-router-dom";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export const SupportBody = () => {
    const linkStyle = {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#030001",
        borderBottom: "2px solid #030001",
    }

    const headStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const bg = {
        backgroundColor: "#2c0f0c",
        color: "#FAFAFA",
        borderRadius: "0.3rem",
        fontWeight: "normal",
    }

    return (
        <div className="cover">
            <div style={headStyle} className="cover-header">
                <h2>Serch Support Hub</h2>
                <Link to={MainLinks.helpAndSupport} className="link-arrow" style={linkStyle}>
                    <img alt="back" src={ Icons.arrowLeft } width={30} />
                    <h3>Back to Help and Support</h3>
                </Link>
            </div>
            <h3 style={bg} className="note">
                Feeling like contacting Serch on any matter? Go through our support hub and talk to the right Serch team.
                It's much easier to talk to the right people and get things sorted out quickly.
            </h3>
            <div className="cover-content">
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
    return <ContainerLeftImage
        image={Icons.techSupport}
        widthSize={300}
        imageAlt={"Serch support"}
        padding="2rem"
        color={"#FAFAFA"}
        flex={"wrap"}
        props={
            <>
                <TawkMessengerReact
                    propertyId="63d7d4cfc2f1ac1e20305f52"
                    widgetId="1go4iiv92"
                />
                <h2>Don't feel like going to your mail box?</h2>
                <p>Chat with Serch Support team by clicking the floating chat button</p>
            </>
        }
    />
}