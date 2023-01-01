import { Link } from "react-router-dom";
import { AppLinks, InformationLinks, LegalLinks, SupportLinks,} from "../../../config/custom/links";
import { LegalIcons } from "../../../config/images/icons";
import Images from "../../../config/images/images";
import { KeyImages } from "../../../config/images/key";
import ProductImages from "../../../config/images/productImages";
import BoxBottomLink from "../../../widgets/container/boxWithBottomLink";
import FAQ from "../../../widgets/faq/faq";

export const BusinessHeader = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>Business-oriented, Business-friendly</h2>
                <p>What Serch does for businesses, making them more effective and stress-free</p>
            </div>
            <img alt='' src={ KeyImages.businessOriented } width={600} />
        </div>
    );
}

export const BusinessBody = () => {
    return (
        <>
            <div className='productHeader'>
                <img alt='' src={ KeyImages.service } width={ 500 } />
                <div className="contentLeftBlack">
                    <h2>Service that problem faster</h2>
                    <p>
                        Look past the time when your business depended on a particular provider or artisan. Serch makes it possible for your
                        business to evade problems comming from your business provider and your utilities. Serch lets you focus on work while
                        you are taken care of.
                    </p>
                </div>
            </div>
            <div className='productHeader'>
                <div className="contentRightBlack">
                    <h2>Be more efficient and reliable</h2>
                    <p>
                        Serch Marketplace platform makes it able for businesses to run away from users waiting in line, cussing at both the
                        business and their fellow users just because there is an issue which is disrupting the service your business provides
                        for your users.
                    </p>
                </div>
                <img alt='' src={ KeyImages.efficient } width={ 500 } />
            </div>
            <div className="products">
                <h1>Looking to get into details?</h1>
                <div className="firstProductContent">
                    <BoxBottomLink
                        image={ LegalIcons.agree }
                        width={40}
                        title={"Community Guidelines"}
                        subtitle="There are things we abhor and things we encourage for businesses that make use of Serch for Business platform."
                        link={ LegalLinks.communityGuidelines }
                        linkText={"Learn more here"}
                    />
                    <BoxBottomLink
                        image={ LegalIcons.agreement }
                        width={40}
                        title={"Legal Policy"}
                        subtitle="There are ways we protect the rights of businesses signed up to our platform. We make sure that there is an
                        agreement betwwen Serch and your business."
                        link={ LegalLinks.termsAndConditions }
                        linkText={"Look into our T&C"}
                    />
                    <BoxBottomLink
                        image={ LegalIcons.failed }
                        width={40}
                        title={"Non-Discrimination"}
                        subtitle="We are invested in making the use of our platforms accessible, fun and non-discriminatory. We also want
                        businesses that make use of our platform to keep that in mind."
                        link={ LegalLinks.discriminationPolicy }
                        linkText={"Learn more"}
                    />
                </div>
            </div>
            <div className='productHeader'>
                <img alt='' src={ KeyImages.friendly } width={ 500 } />
                <div className="contentLeftBlack">
                    <h2>Business-friendly</h2>
                    <p>
                        As we encourage businesses to go further with the services they provide to their users by making use of Serch
                        MarketPlace Platform, we also make it possible for these businesses to go much further without breaking a sweat.
                        Our platform makes them enjoy much business-oriented offers and promotions. We are basically saying to your business,
                        "Your goal, our goal."
                    </p>
                </div>
            </div>
            <div className='productHeader'>
                <div className="contentRightBlack">
                    <h2>Fly higher with Serch</h2>
                    <p>
                        We want you to reach your goals. Because we want that for your business, we want you to also want that for Serch.
                        As we make it our sworn mission to make sure that your business is not disrupted, we also want you to make sure that
                        you don't disrupt our business. Which is why we want you to make sure you read through our legal documents.
                    </p>
                    <div className="boxLink">
                        <Link to={ SupportLinks.legal }>Visit our Legal Hub</Link>
                    </div>
                </div>
                <img alt='' src={ KeyImages.hands } width={ 500 } />
            </div>
        </>
    );
}

export const BusinessFooter = () => {
    return (
        <>
            <div className="productTwo">
                <div className="secondProduct">
                    <img alt="" src={ ProductImages.serchLogIn } width={300} />
                    <div className="secondProductHeader">
                        <h2>Request services your business needs</h2>
                        <h3>With you all through your experience as a business.</h3>
                        <div className='app'>
                            <a href={ AppLinks.playStore }><img alt='' src={ Images.playStore } /> </a>
                            <a href={ AppLinks.appleStore }><img alt='' src={ Images.appleStore } /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ
                header="Frequently Asked Questions"
                subHeader="Curious about what difference a business has over individuals?"
                faqTwoQuestion={"What offer does my business account have?"}
                faqTwoAnswer="We offer every business account owners the possibility of choosing two different subscription models. Just like
                an individual account, a business account can choose the best subscription model better for them."
                linkTwo={InformationLinks.payment}
                linkTwoText="Learn more about Serch's offering to businesses."
                faqOneQuestion={"How does service requesting work?"}
                faqOneAnswer="Much like how an individual account owner requests for service, a business account owner also does the same."
                faqThreeQuestion={"How do I get started?"}
                faqThreeAnswer="Getting started is not an issue. You can download the app in any stores and get signed up within seconds."
                linkThree={"/getting-started-as-a-user"}
                linkThreeText={"Learn more about getting started"}
            />
        </>
    );
}