import { GifIcons, Icons } from "../../../config/images/icons";
import SafetyImages from "../../../config/images/safetyImages";
import BoxColumn from "../../../widgets/container/boxColumn";
import BoxNoWidth from "../../../widgets/container/boxNoWidth";
import { Emails } from "../../../config/custom/emails";
import { LegalLinks } from "../../../config/custom/links";
import FAQ from "../../../widgets/faq/faq";
import './css.css';

export const SafetyGuidelineHeader = () => {
    return (
        <div className="safeBody">
            <div className="productHeader">
                <div className='productHeaderText'>
                    <h2>Your safety, is also our priority</h2>
                    <p>Never think you are alone in any of your experience in Serch.</p>
                    <p>We are with you always, with our technology. Keeping both the provider, user and every other thing safe.</p>
                </div>
                <img alt='' src={ SafetyImages.header } width={500} />
            </div>
            <div className="safeBody">
                <h2>A safer design structure</h2>
                <div className="firstProductContent">
                    <BoxColumn
                        title="Safety tips and notes"
                        subtitle="We have some outlined important tips for you to take home while you enjoy
                        the features we offer. A take-home note can always come in handy."
                        width={50}
                        image={ GifIcons.password }
                    />
                    <BoxColumn
                        title="Imbedded features for protection"
                        subtitle="Our platforms have the technology to keep incidents away from occuring.
                        Enabling you to really relax while you are taken care of."
                        width={50}
                        image={ GifIcons.way }
                    />
                    <BoxColumn
                        title="Join the SGC"
                        subtitle="Join our Safety Guard Community and help us design more wonderful ways to
                        protect both providers and users from any incident or accidents. Let's work together for a more stable service."
                        width={50}
                        image={ GifIcons.protection }
                    />
                </div>
            </div>
        </div>
    );
}

export const SafetyGuidelineBody = () => {
    return (
        <div className="safeBody">
            <div className="safeBody">
                <h2>Relax and be taken care of, with maximum security</h2>
                <p>Comfortability sewn into security is what we offer to both users and providers.
                    It is one of our priority that you are comfortable at all times, mixed with peace of mind.
                </p>
                <div className="firstProductContent">
                    <BoxColumn
                        title="Stick With Me(SWM)"
                        subtitle="This is a feature enabled for providers so that they can share their location to a family or friend.
                        This enables the person to track the providers' journey."
                        width={50}
                        image={ Icons.colorSWM }
                    />
                    <BoxColumn
                        title="24/7 Support"
                        subtitle="We have customer supports that respond only to incidents. This enables us to send help when
                        there is any problem."
                        width={50}
                        image={ Icons.colorCall }
                    />
                    <BoxColumn
                        title="Connect To Go (CTG)"
                        subtitle="By enabling this feature, the user is able to see the provider's movement from the moment the
                        provider accepts any request from the user."
                        width={50}
                        image={ Icons.colorTP }
                    />
                    <BoxColumn
                        title="2-way rating feature"
                        subtitle="Our rating features enable both users and providers to rate and be rated. This helps in
                        filtering both users and providers from our system."
                        width={50}
                        image={ Icons.colorRate }
                    />
                    <p className="note">
                        Note: We do not track anyone unless tracking has been enabled by making CTG or SWM active in the user's
                        preference/setting. We encourage connecting or sharing before engaging in any service. Inviting a provider without
                        connecting, or going for a service without enabling SWM is like going solo in a music you know there might be
                        incidents or accidents.
                    </p>
                </div>
            </div>
            <div className="productHeader">
                <div className='productHeaderText'>
                    <h2>Take-home note, for you</h2>
                    <p>Your safety is what we care for. We continue to provide solutions to keep you safe.</p>
                </div>
                <img alt='' src={ SafetyImages.tips } width={500} />
            </div>
            <div className="safetyGuide">
                <BoxNoWidth
                    title="Dear Providers, (SWM)"
                    subtitle="We advice providers to always use this feature in order to enable others track their
                    journey anywhere they are. Having a second eye isn't such a bad idea."
                    width={50}
                    image={ Icons.provider }
                />
                <BoxNoWidth
                    title="Dear Users, (CTG)"
                    subtitle="We advice users to toggle on this connect feature before their requested providers come over.
                    This will enable the user to track the providers' journey incase they should send the provider on an errand."
                    width={50}
                    image={ Icons.user }
                />
            </div>
        </div>
    );
}

export const SafetyGuidelineEnd = () => {
    return (
        <div>
            <div className="productHeader">
                <img alt='' src={ SafetyImages.idea } width={300} />
                <div className='productHeaderText'>
                    <h2>Got an idea on how we can improve our guideline?</h2>
                    <p>We didn't restrict the generation of safety guidelines to Serch only.</p>
                    <p>If you know a better way or better options to explore, we always accept these suggestions with open minds.</p>
                </div>
            </div>
            <FAQ
                header="Safety Guideline FAQs"
                subHeader="Curious about anything involving our safety guidelines?."
                faqOneQuestion="Can anyone join the SafeGuard community?"
                faqOneAnswer="Absolutely, anyone can join in the community. It is an all inclusive community of both providers and users,
                any gender, any race, any religion, any ethnicity, any level of reasoning. We accept every contribution."
                faqTwoQuestion="Can I make suggestion/s without being a SGC member?"
                faqTwoAnswer="Sure, we accept and look into ideas that come to our box anytime. Don't want to speak in the community?"
                linkTwoText='Talk privately to us here.'
                linkTwo={Emails.sgc}
                faqThreeQuestion="Is there any guideline governing Serch community?"
                faqThreeAnswer="We have our community guideline which governs everyone, whether an anonymous, known member and anyone at all.
                We take serious attention to our guidelines."
                linkThree={LegalLinks.communityGuidelines}
                linkThreeText="Read our community guideline."
            />
            <div className="productTwo">
                <div className="secondProduct">
                    <div className="productHeaderText">
                        <h2>Join the SGC Community today</h2>
                        <p>Together, we can always achieve more and surpass our dreams.</p>
                        <p>We want to ensure that our drive for "Service made easy" never stops.</p>
                        <p>Join the community and tell us more on how we can get things better.</p>
                        <p>We are 24/7 listening and addressing issues.</p>
                        <a href="/" className="button">Join the community</a>
                    </div>
                    <img alt="support" src={ Icons.team } width={300} />
                </div>
            </div>
        </div>
    );
}
