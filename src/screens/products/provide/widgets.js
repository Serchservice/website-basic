import { AppLinks } from "../../../config/custom/links";
import Images from "../../../config/images/images";
import ProductImages from "../../../config/images/productImages";
import { LinkBox } from "../../../widgets/container/boxes";
import { ContainerBackgroundImage, ContainerForLatestInformation, ContainerLeftImage, ContainerRightImage } from "../../../widgets/container/containers";

export const ProvideHeader = () => {
    return <ContainerRightImage
        image={ProductImages.providers}
        imageAlt={""}
        props={
            <>
                <h2>An extra source of income would be nice</h2>
                <p>We stand by you to increase your skill appreciation and money increment.</p>
                <button>Signup today</button>
            </>
        }
    />
}

export const ProvideEnd = () => {
    const info = [
        {
            title: "Together in all experiences",
            subtitle: `We stand by your side in any experience you partake of while in this community and even in the platform.
            We hope to continue doing more good, together.`,
            image: ProductImages.callSupport,
            imageAlt: "serch"
        },{
            title: "Call Support",
            subtitle: `You can always talk to us anytime, anywhere. Our support team will be fully ready to attend to you and
            whatever is the case.`,
            image: ProductImages.callCenter,
            imageAlt: "serch call support"
        },{
            title: "Safety tips you need",
            subtitle: `With its unique features, safety pins are most important so as to know how to approach any of our services
            and get connected.`,
            image: ProductImages.callSafety,
            imageAlt: "serch safety"
        },
    ]

    return <ContainerForLatestInformation
        color={"#FAFAFA"}
        props={
            <>
                <ContainerLeftImage
                    image={ProductImages.serchPhoneMap}
                    widthSize={300}
                    imageAlt={""}
                    props={
                        <>
                            <h2>Start providing today!</h2>
                            <h3>With the provider's app, start providing immediately.</h3>
                            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>
                                <a href={ AppLinks.providerPlayStore }><img alt='' src={ Images.playStore } width={200}/> </a>
                                <a href={ AppLinks.providerAppleStore }><img alt='' src={ Images.appleStore } width={190}/> </a>
                            </div>
                        </>
                    }
                />
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                    {
                        info.map((item, index) => {
                            return <LinkBox
                                key={index}
                                image={item.image}
                                imageAlt={item.imageAlt}
                                width={50}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        })
                    }
                </div>
            </>
        }
    />
}

export const ProvideBody = () => {
    const info = [
        {
            title: "Have the skill you want to provide",
            subtitle: `Having the skillset which you want to become a provider of, is important here. Ratings can get you ousted with
            immediate effect.`,
            image: ProductImages.skills,
            imageAlt: "service provider"
        },{
            title: "Get started and get verified",
            subtitle: `Have the skill? Wonderful. Get started and sign up, verify yourself and get into the community of providers here
            in Serch.`,
            image: ProductImages.docs,
            imageAlt: "serch verify"
        },{
            title: "Select a plan and start earning",
            subtitle: `We have the user base, you have the skill. But to make money, you need a plan that suits you!`,
            image: ProductImages.phone,
            imageAlt: "serch plans"
        },
    ]

    return <ContainerForLatestInformation
        header={"Be more than your own boss"}
        props={
            <>
                <ContainerBackgroundImage
                    className="provide"
                    bgSize={"contain"}
                />
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>{
                    info.map((item, index) => {
                        return <LinkBox
                            key={index}
                            image={item.image}
                            imageAlt={item.imageAlt}
                            width={50}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    })
                }</div>
            </>
        }
    />
}