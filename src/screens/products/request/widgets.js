import { AppLinks, InformationLinks } from '../../../config/custom/links';
import Images from '../../../config/images/images';
import ProductImages from '../../../config/images/productImages';
import BoxColumn from '../../../widgets/container/boxColumn';
import FAQ from '../../../widgets/faq/faq';
import '../css.css';

export const RequestHeader = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>We enjoy lighting up your homes or offices.</h2>
                <p>Never go out in the dark, never stop repairing and fixing.</p>
                <button>Signup today</button>
            </div>
            <img alt='' src={ ProductImages.productTwo } width={400} />
        </div>
    );
}

export const RequestFAQ = () => {
    return (
        <FAQ
            header="Frequently Asked Questions"
            subHeader="Requesting for services can be tricky for first-timers. Check out these and don't be lost."
            faqTwoQuestion={"How can I request for a service provider?"}
            faqTwoAnswer="Simply select the service you want (if you are not subscribed to Plan Aries) input your location and
            search for providers in your location. After our search, a list of available online providers will be shown to you.
            We might also display online-but-busy providers too (this depends on the settings of the provider). You can decide
            on whether to call or chat any of them up."
            linkTwo={InformationLinks.countries}
            linkTwoText="Check if we have launched in your country or city."
            faqOneQuestion={"Can I request for other people?"}
            faqOneAnswer="Definitely. Our services are targeted to enable both the user and the provider sort everything together.
            We do not interfere in such matters. But we still look after your ease in getting things done."
            faqThreeQuestion={"How do I get started?"}
            faqThreeAnswer="Getting started is not an issue. You can download the app in any stores and get signed up within seconds."
            linkThree={"/getting-started-as-a-user"}
            linkThreeText={"Learn more about getting started"}
        />
    );
}

export const RequestApp = () => {
    return (
        <div className="productTwo">
            <div className="secondProduct">
                <img alt="" src={ ProductImages.serchLogIn } width={300} />
                <div className="secondProductHeader">
                    <h2>Start requesting today!</h2>
                    <h3>With the user's app, start requesting for services immediately.</h3>
                    <div className='app'>
                        <a href={ AppLinks.playStore }><img alt='' src={ Images.playStore } /> </a>
                        <a href={ AppLinks.appleStore }><img alt='' src={ Images.appleStore } /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ProductSafety = () => {
    return (
        <div className="safety">
            <div className="safetyHeader">
                <h2>Curious about your safety? </h2>
                <p>We make sure that you are safe in any experience.</p>
            </div>
            <div className="whyUsContent">
                <BoxColumn
                    image={ ProductImages.community }
                    width={ 60 }
                    title={"Serch community"}
                    subtitle="We operate on guidelines which makes our community of artisans,
                    people who value their skills and want to be appreciated for it. A community of Serchers."
                />
                <BoxColumn
                    image={ ProductImages.Tracking }
                    width={ 60 }
                    title={"Track your money"}
                    subtitle="Get real-time location of the artisan you sent on an errand.
                    With the help of technology, we have made it easier to be safe with your money."
                />
                <BoxColumn
                    image={ ProductImages.support }
                    width={ 60 }
                    title={"Always with you"}
                    subtitle="Should you encounter any problem on your experience, we are always with you.
                    Ensuring your safety, quick services, and quick response. We stay on our toes."
                />
            </div>
        </div>
    );
}
