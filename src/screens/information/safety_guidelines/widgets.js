import { GifIcons, Icons } from "../../../config/images/icons";
import SafetyImages from "../../../config/images/safetyImages";
import { Emails } from "../../../config/custom/emails";
import { ContainerLeftImage, ContainerRightImage, ContainerWithFlexedContents } from "../../../widgets/container/containers";
import { FAQBox, LinkBox } from "../../../widgets/container/boxes";

export const SafetyGuidelineHeader = () => {
    const contents = [
        {
            title: `Safety tips and notes`,
            subtitle: `We have some outlined important tips for you to take home while you enjoy
            the features we offer. A take-home note can always come in handy.`,
            image: GifIcons.password,
            imageAlt: "safety tips"
        },{
            title: `Embedded features for protection`,
            subtitle: `Our platforms have the technology to keep incidents away from occuring.
            Enabling you to really relax while you are taken care of.`,
            image: GifIcons.way,
            imageAlt: "serch protection"
        },
        {
            title: "Join the SGC",
            subtitle: `Join our Safety Guard Community and help us design more wonderful ways to
            protect both providers and users from any incident or accidents. Let's work together for a more stable service.`,
            image: GifIcons.protection,
            imageAlt: "serch safe-guard community"
        }
    ]

    return(
        <>
            <ContainerRightImage
                image={SafetyImages.header}
                imageAlt={""}
                props={
                    <>
                        <h2>Your safety, is also our priority</h2>
                        <p>Never think you are alone in any of your experience in Serch.</p>
                        <p>We are with you always, with our technology. Keeping both the provider, user and every other thing safe.</p>
                    </>
                }
            />
            <ContainerWithFlexedContents
                header="A safer design structure"
                props={
                    contents.map((link, index) => {
                        return <LinkBox
                            image={link.image}
                            key={index}
                            width={40}
                            title={link.title}
                            subtitle={link.subtitle}
                        />
                    })
                }
            />
        </>
    )
}

export const SafetyGuidelineBody = () => {
    const noteStyle = {
        backgroundColor: "#2c0f0c",
        color: "#FAFAFA",
        padding: "2rem",
        // borderRadius: "0.3rem",
        fontWeight: "normal",
    }

    const content = [
        {
            title: "Dear Provider, (SWM)",
            subtitle: `We advise providers to always use this feature in order to enable others track their
            journey anywhere they are. Having a second eye isn't such a bad idea.`,
            image: Icons.provider,
            imageAlt: "service provider"
        },{
            title: "Dear User, (CTG)",
            subtitle: `We advise users to toggle on this connect feature before their requested providers come over.
            This will enable the user to track the providers' journey incase they should send the provider on an errand.`,
            image: Icons.user,
            imageAlt: "artisan user"
        }
    ]

    const contents = [
        {
            title: "Stick With Me (SWM)",
            subtitle: `This is a feature enabled for providers so that they can share their location to a family or friend.
            This enables the person to track the providers' journey.`,
            image: Icons.colorSWM,
            imageAlt: "track an artisan"
        },{
            title: "24/7 Support",
            subtitle: `We have customer supports that respond only to incidents. This enables us to send help when
            there is any problem.`,
            image: Icons.colorCall,
            imageAlt: "serch customer care"
        },{
            title: "Connect-To-Go (CTG)",
            subtitle: `By enabling this feature, the user is able to see the provider's movement from the moment the
            provider accepts any request from the user.`,
            image: Icons.colorTP,
            imageAlt: "connect to go for artisans"
        },{
            title: "Two-Way Rating",
            image: Icons.colorRate,
            imageAlt: "Rating in Serch",
            subtitle: `Our rating features enable both users and providers to rate and be rated. This helps in
            filtering both users and providers from our system.`
        }
    ]

    return(
        <>
            <ContainerRightImage
                image={SafetyImages.tips}
                imageAlt={""}
                props={
                    <>
                        <h2>Take-home note, for you</h2>
                        <p>Your safety is what we care for. We continue to provide solutions to keep you safe.</p>
                    </>
                }
            />
            <ContainerWithFlexedContents
                header="Comfortability sewn into security"
                props={
                    contents.map((link, index) => {
                        return <LinkBox
                            key={index}
                            image={link.image}
                            width={50}
                            title={link.title}
                            subtitle={link.subtitle}
                        />
                    })
                }
            />
            <p style={noteStyle}>
                Note: We do not track anyone unless tracking has been enabled by making CTG or SWM active in the user's
                preference/setting. We encourage connecting or sharing before engaging in any service. Inviting a provider without
                connecting, or going for a service without enabling SWM is like going solo in a music you know there might be
                incidents or accidents.
            </p>
            <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>{
                content.map((link, index) => {
                    return <LinkBox
                        image={link.image}
                        key={index}
                        width={40}
                        title={link.title}
                        subtitle={link.subtitle}
                    />
                })
            }</div>
        </>
    )
}

export const SafetyGuidelineEnd = () => {
    const faqs = [
        {
            question: "Can anyone join the SafeGuard community?",
            answer: `Absolutely, anyone can join in the community. It is an all inclusive community of both providers and users,
            any gender, any race, any religion, any ethnicity, any level of reasoning. We accept every contribution.`,
        },{
            question: "Can I make suggestion/s without being a SGC member?",
            answer: `Sure, we accept and look into ideas that come to our box anytime. Don't want to speak in the community?`,
            link: Emails.sgc,
            linkText: "Talk privately to us here."
        },{
            question: "Is there any guideline governing Serch community?",
            answer: `We have our community guideline which governs everyone, whether an anonymous, known member and anyone at all.
            We take serious attention to our guidelines.`,
            link: "/legal/document/community-guidelines",
            linkText: "Read our community guideline."
        }
    ]

    return (
        <>
            <ContainerRightImage
                image={SafetyImages.idea}
                widthSize={300}
                imageAlt={"idea for artisans"}
                props={
                    <>
                        <h2>Got an idea on how we can improve our guideline?</h2>
                        <p>We didn't restrict the generation of safety guidelines to Serch only.</p>
                        <p>If you know a better way or better options to explore, we always accept these suggestions with open minds.</p>
                    </>
                }
            />
            <FAQBox
                header={"Safety Guideline FAQs"}
                subHeader="Curious about anything involving our safety guidelines?."
                data={faqs}
            />
            <ContainerLeftImage
                image={Icons.team}
                widthSize={300}
                imageAlt={""}
                props={
                    <>
                        <h2>Join the SGC Community today</h2>
                        <p>Together, we can always achieve more and surpass our dreams.</p>
                        <p>We want to ensure that our drive for "Service made easy" never stops.</p>
                        <p>Join the community and tell us more on how we can get things better.</p>
                        <p>We are 24/7 listening and addressing issues.</p>
                        <a href="/" className="button">Join the community</a>
                    </>
                }
            />
        </>
    );
}
