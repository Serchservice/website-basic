import { SupportLinks } from "../../../config/custom/links";
import { HelpImages } from "../../../config/images/homeImages";
import { KeyImages } from "../../../config/images/key";
import ProductImages from "../../../config/images/productImages";
import BoxBottomLink from "../../../widgets/container/boxWithBottomLink";

export const KeySupportHead = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>All information you need to know, in one place.</h2>
                <p>Our support hub where you can get all documents you need in order to run with us.</p>
            </div>
            <img alt="" src={ KeyImages.contract } width={300} />
        </div>
    );
}

export const KeySupportBody = () => {
    return (
        <div className="career">
            <div className='careerOne'>
                <img alt='' src={ KeyImages.workplaces } width={ 500 } />
                <div className="careerOneContent">
                    <h2>24/7 Support</h2>
                    <p>
                        Because we value each user of our platform, we are committed to providing the best customer care support
                        for each of us all, so as to foster faster services, trusted partnership and secured mindset.
                    </p>
                </div>
            </div>
            <div className='careerOne'>
                <div className="careerTwoContent">
                    <h2>Global Outreach</h2>
                    <p>
                        Our global support stretches out wide to all corner of the globe. We aim at making service requesting or providing
                        in any part of the globe easy. As our dreams foster much bigger plans, we also make sure that our support stretches
                        to that big dream.
                    </p>
                </div>
                <img alt='' src={ KeyImages.global } width={ 200 } />
            </div>
            <div className='careerOne'>
                <img alt='' src={ KeyImages.request } width={ 200 } />
                <div className="careerOneContent">
                    <h2>Curiousity Clearing</h2>
                    <p>
                        Finding a particular feature hard to understand or use? Or you have some other issue you have with our platforms?
                        We clear all curious mindsets, problems and issues through our support and help.
                    </p>
                </div>
            </div>
        </div>
    );
}

export const KeySupportEnd = () => {
    return(
        <div className="products">
            <div className="safetyHeader">
                <h2>Ready to get into details? </h2>
                <p>We hope you read everything to help you going.</p>
            </div>
            <div className="firstProductContent">
                <BoxBottomLink
                    image={KeyImages.legal}
                    width={40}
                    link={SupportLinks.legal}
                    linkText={"Go to Legal"}
                    title={"Legal Hub"}
                    subtitle="Our legal hub contain all the legal documents that protect both Serch and the users. We recommend reading
                    it before making use of our service, as they will let you know what is required and not."
                />
                <BoxBottomLink
                    image={HelpImages.ask}
                    width={40}
                    link={SupportLinks.help}
                    linkText={"Go to Help"}
                    title={"Help Hub"}
                    subtitle="Our help hub contain all the frequently asked questions that our users, both providers, clients and even
                    businesses might encounter when using our platform. We recommend reading through them before communicating to the ask team."
                />
                <BoxBottomLink
                    image={ProductImages.callSupport}
                    width={40}
                    link={SupportLinks.support}
                    linkText={"Go to Support"}
                    title={"Support Hub"}
                    subtitle="Should you not find what you are looking for, our support hub is there to guide you on what to do next.
                    As we are dedicated to make sure that your experience is top-notch, we also make it possible."
                />
            </div>
        </div>
    );
}