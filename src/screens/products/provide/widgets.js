import { AppLinks } from "../../../config/custom/links";
import Images from "../../../config/images/images";
import ProductImages from "../../../config/images/productImages";
import BoxColumn from "../../../widgets/container/boxColumn";

export const ProvideHeader = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>An extra source of income would be nice</h2>
                <p>We stand by you to increase your skill appreciation and money increment.</p>
                <button>Signup today</button>
            </div>
            <img alt='' src={ ProductImages.providers } width={500} />
        </div>
    );
}

export const ProvideEnd = () => {

    // const steps = [
    //     {
    //     label: 'Select campaign settings',
    //     description: `For each ad campaign that you create, you can control how much
    //                 you're willing to spend on clicks and conversions, which networks
    //                 and geographical locations you want your ads to show on, and more.`,
    //     },
    //     {
    //     label: 'Create an ad group',
    //     description:
    //         'An ad group contains one or more ads which target a shared set of keywords.',
    //     },
    //     {
    //     label: 'Create an ad',
    //     description: `Try out different ad text to see what brings in the most customers,
    //                 and learn how to enhance your ads using features like ad extensions.
    //                 If you run into any problems with your ads, find out how to tell if
    //                 they're running and how to resolve approval issues.`,
    //     },
    // ];

    return (
        <div>
            <div className="productTwo">
                <div className="secondProduct">
                    <img alt="" src={ ProductImages.serchPhoneMap } width={300} />
                    <div className="secondProductHeader">
                        <h2>Start providing today!</h2>
                        <h3>With the provider's app, start providing immediately.</h3>
                        <div className='app'>
                            <a href={ AppLinks.providerPlayStore }><img alt='' src={ Images.playStore } /> </a>
                            <a href={ AppLinks.providerAppleStore }><img alt='' src={ Images.appleStore } /> </a>
                        </div>
                    </div>
                </div>
                <div className="secondProductContent">
                    <BoxColumn
                        title="Together in all experiences"
                        subtitle="We stand by your side in any experience you partake of while in this community and even in the platform.
                        We hope to continue doing more good, together."
                        width={50}
                        image={ ProductImages.callSupport }
                    />
                    <BoxColumn
                        title="Call Support"
                        subtitle="You can always talk to us anytime, anywhere. Our support team will be fully ready to attend to you and
                        whatever is the case."
                        width={50}
                        image={ ProductImages.callCenter }
                    />
                    <BoxColumn
                        title="Safety tips you need"
                        subtitle="With its unique features, safety pins are most important so as to know how to approach any of our services
                        and get connected."
                        width={50}
                        image={ ProductImages.callSafety }
                    />
                </div>
            </div>
        </div>
    );
}

export const ProvideBody = () => {
    return (
        <div className="products">
            <h1>Be more than your own boss</h1>
            <div className="firstProduct"></div>
            <div className="firstProductContent">
                <BoxColumn
                    title="Have the skill you want to provide"
                    subtitle="Having the skillset which you want to become a provider of, is important here. Ratings can get you ousted with
                    immediate effect."
                    width={50}
                    image={ ProductImages.skills }
                />
                <BoxColumn
                    title="Get started and get verified"
                    subtitle="Have the skill? Wonderful. Get started and sign up, verify yourself and get into the community of providers here
                    in Serch."
                    width={50}
                    image={ ProductImages.docs }
                />
                <BoxColumn
                    title="We will take care of you"
                    subtitle="Already a member? Great. Now relax, toogle between online and busy status to put yourself on our map locator.
                    Our app will take of the rest for you."
                    width={50}
                    image={ ProductImages.phone }
                />
            </div>
        </div>
    );
}