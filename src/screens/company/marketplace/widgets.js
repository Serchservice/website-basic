import { Link } from "react-router-dom";
import { LegalLinks, ProductLinks } from "../../../config/custom/links";
import { KeyImages } from "../../../config/images/key";
import BoxBottomLink from "../../../widgets/container/boxWithBottomLink";
import { ColoredOneTextBox } from "../../../widgets/design/coloredBox";

export const MarketplaceHeader = () => {
    return(
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>The Serch Marketplace Platform</h2>
                <p>Looking to buy or to sell? Serch makes it easier and faster.</p>
                <p>"Service Made Easy"</p>
            </div>
            <img alt='' src={ KeyImages.marketplace } width={600} />
        </div>
    );
}

export const MarketplaceBody = () => {
    return(
        <>
            <div className="planheader">
                <h2>Three Tiers of Serch MarketPlace Platform</h2>
                <p>What you should expect to find from us</p>
            </div>
            <div className='productHeader'>
                <ColoredOneTextBox
                    text="Serch for Business"
                    bgColor="#1C1111"
                    textColor="#FFFFFF"
                />
                <ColoredOneTextBox
                    text="Requesting in Serch"
                    bgColor="#111C16"
                    textColor="#FFFFFF"
                />
                <ColoredOneTextBox
                    text="Providing in Serch"
                    bgColor="#060047"
                    textColor="#FFFFFF"
                />
            </div>
            <div className='productHeader'>
                <div className="productHeaderText">
                    <h2>Business or Individual?</h2>
                    <p>
                        Since we want to make service requesting and providing easy, we also make it much easier depending on which category
                        making use of the Serch Marketplace Platform. We believe in the ideology of "Tell us who you are and we will give
                        you the best choice." It's all left for you to tell us what you want.
                    </p>
                </div>
                <img alt='' src={ KeyImages.businessIndividual } width={ 500 } />
            </div>
            <div className='productHeader'>
                <img alt='' src={ KeyImages.howToProvide } width={ 500 } />
                <div className="contentLeftBlack">
                    <h2>Know how to provide?</h2>
                    <p>
                        We make it easy for providers all over the globe to join our platform and start providing their skills in order
                        to make more profit, and also to receive the best appreciation for their abilities and talent. We also make it
                        possible for providers to invite another provider incase the provider is limited in a certain issue.
                    </p>
                </div>
            </div>
            <div className='productHeader'>
                <div className="contentRightBlack">
                    <h2>Limited in providing knowledge?</h2>
                    <p>
                        In order to avoid bad ratings and to encourage user's satisfaction, we introduced the requestSharing feature. With
                        this feature, providers would be able to transfer an issue that the provider won't be able to solve, or wasn't able
                        to solve to another provider with just a compensative fee from the user. Such compensative fee is dependent on whether
                        the user intentionally requested for a provider without such capability.
                    </p>
                    <div className="boxLink">
                        <Link to={ LegalLinks.communityGuidelines }>Read our community guidelines</Link>
                    </div>
                </div>
                <img alt='' src={ KeyImages.providingKnowledge } width={ 500 } />
            </div>
            <div className='productHeader'>
                <img alt='' src={ KeyImages.need } width={ 500 } />
                <div className="contentLeftBlack">
                    <h2>In need of a service? Whether personal, for a friend or business</h2>
                    <p>
                        Getting into Serch Marketplace place is the only thing you need to do. We've made it easy to request for a business,
                        a friend, or even for personal use. A user can also make use of our requestSharing feature to share, or
                        recommend a particular provider to another user.
                    </p>
                </div>
            </div>
        </>
    );
}

export const MarketplaceFooter = () => {
    return(
        <div className="products">
            <h1>Looking to get into details?</h1>
            <div className="firstProductContent">
                <BoxBottomLink
                    image={""}
                    width={60}
                    title={"Serch for Business"}
                    subtitle="Learn more about what Serch offers to businesses that make use of the Serch Marketplace platform."
                    link={ ProductLinks.business }
                    linkText={"Here in Business"}
                />
                <BoxBottomLink
                    image={""}
                    width={60}
                    title={"Requesting"}
                    subtitle="Looking to request with the Serch Marketplace Platform? Find our more about what we offer to individuals."
                    link={ ProductLinks.request }
                    linkText={"For Individuals"}
                />
                <BoxBottomLink
                    image={""}
                    width={60}
                    title={"Providing"}
                    subtitle="Interested in providing your skills in the Serch Marketplace Platform? Learn more on how to do that,
                    requirements and how it works."
                    link={ ProductLinks.provide }
                    linkText={"Provider"}
                />
            </div>
        </div>
    );
}