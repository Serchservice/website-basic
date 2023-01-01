import Document from './json/statement.json';
import { Link } from "react-router-dom";
import { AboutImages } from "../../../config/images/companyImages";
import Images from "../../../config/images/images";
import BoxBottomLink from "../../../widgets/container/boxWithBottomLink";
import { Icons, LegalIcons } from "../../../config/images/icons";
import '../../css/serch.css';
import { CompanyLinks, InformationLinks } from '../../../config/custom/links';

export const AboutHeader = () => {
    return (
        <div className="about">
            <div className="about_us">
                <h2>About Us</h2>
            </div>
            <div className="about_text">
                <h2>Making artisan services easier, better and faster.</h2>
                <p>Just as technology has made people dream of better lives, thereby looking for greener pastures
                    in other areas of life, technology also enables us to have access to that which we might have ignored.
                    Services are what we power. Not just services, but artisan services made easier, faster, better and affordable.
                    Broken stranded cars, faulty pipes, faulty electrical appliances, etc. We stand to give you the best people to
                    give you the best repairs. Talk to any of these providers in real time, get price quotations, get whatever you
                    want done in a twinkle.
                </p>
            </div>
        </div>
    );
}

export const Statement = () => {
    return (
        <div className="statements">
            <div className="planheader">
                <h2>Our Statements</h2>
                <p>What We Stand For</p>
            </div>
            <div className="statementContents">
                {
                    Document.map(doc => {
                        return <div className="statement" key={ doc.id }>
                            <div className="planname">
                                <h2>{ doc.name }</h2>
                            </div>
                            <p>{ doc.content }</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export const AboutEnd = () => {
    return (
        <div className="productTwo">
            <div className="secondProduct">
                <div className="productHeaderText">
                    <h2>Start your career with us</h2>
                    <p>Search for open roles in Serch and join us in making services easy.</p>
                    <Link to={CompanyLinks.careers} className="button">Search</Link>
                </div>
                <img alt="support" src={ Icons.career } width={300} />
            </div>
        </div>
    );
}

export const AboutBody = () => {
    return (
        <div>
            <div className="about">
                <div className="about_services">
                    <h2>Top-notch Services</h2>
                </div>
                <div className="about_text">
                    <p>Serch is dedicated to providing service providers that are qualified to render services to the utmost
                        satisfaction of the users requesting for these services. Qualified service providers result to happy
                        customers. So, it becomes our commitment to make sure that service providers are knowledgeable enough
                        to be in our system. However, it is also important that users make sure that any service provider they
                        are requesting for, is capable of solving the problem they want solved by telling them what problem they
                        are facing in the chats.
                    </p>
                </div>
            </div>
            <div className="about_providers">
                <h2>Dedicated service providers</h2>
                <img alt="" src={ Images.mechanic } />
            </div>
            <div className="about">
                <div className="about_users">
                    <h2>Happy services lead to happy users!</h2>
                </div>
                <div className="about_text">
                    <p>Much closer to the depths of our heart, lies the happiness of our users. We are fully devoted in making sure
                        that we provide artisan services in the best easiest way ever imagined. Keeping our users interested and happy,
                        making sure they are always comfortable anywhere they are, while these providers come and render the services
                        they need. Since it is our lifetime intention to make services reachably easier, faster and better, we are
                        committed to take it upon us to take the hard part while our users enjoy the sweet comfort we bring.
                    </p>
                </div>
            </div>
            <div className="products">
                <h1>Happenings in Serch</h1>
                <div className="firstProductContent">
                    <BoxBottomLink
                        image={ Icons.closeFolder }
                        width={40}
                        title={"News and Update"}
                        subtitle={"Learn more about happenings in Serch. Get updates as they happen, realtime news update on the happenings, conferences, discussions and any update in Serch."}
                        link={CompanyLinks.newsroom}
                        linkText={"Here in Newsroom"}
                    />
                    <BoxBottomLink
                        image={ Icons.closeDoc }
                        width={40}
                        title={"Blogs"}
                        subtitle={"Learn more about our articles helping you to navigate the waters of Serch. Stay wise, with updates on these articles."}
                        link={CompanyLinks.blog}
                        linkText={"With our blogs"}
                    />
                    <BoxBottomLink
                        image={ LegalIcons.compliant }
                        width={40}
                        title={"Safety-conscious"}
                        subtitle={"Dedication to bringing the best service, results to our dedication to make sure your every second experience, is safety-guaranteed."}
                        link={InformationLinks.safety}
                        linkText={"Safety Guidelines"}
                    />
                </div>
            </div>
            <div className="productHeader">
                <div className='productHeaderText'>
                    <h2>Curious about what drives us?</h2>
                    <p>It's nothing else but that which we stand for, encompassing all other things.</p>
                </div>
                <img alt='' src={ AboutImages.motto } width={600} />
            </div>
        </div>
    );
}