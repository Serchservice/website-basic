import { Link } from "react-router-dom";
import { LegalLinks, ProductLinks } from "../../../config/custom/links";
import { KeyImages } from "../../../config/images/key";
import { Box, LinkBox } from "../../../widgets/container/boxes";
import { ContainerLeftImage, ContainerRightImage, ContainerWithFlexedContents, ContainerWithUnderlinedHeader } from "../../../widgets/container/containers";

export const MarketplaceHeader = () => {
    return <ContainerRightImage
        image={KeyImages.marketplace}
        imageAlt={""}
        props={
            <>
                <h2>The Serch Marketplace Platform</h2>
                <p>Looking to buy or to sell? Serch makes it easier and faster.</p>
                <p>"Service Made Easy"</p>
            </>
        }
    />
}

export const MarketplaceBody = () => {
    const tiers = [
        {
            bgColor: "#1C1111",
            txtColor: "#FAFAFA",
            name: "Serch for Business"
        },{
            bgColor: "#111C16",
            txtColor: "#FAFAFA",
            name: "Serch for Individual"
        },{
            bgColor: "#060047",
            txtColor: "#FAFAFA",
            name: "Serch for Providers"
        },
    ]

    return(
        <>
            <ContainerWithUnderlinedHeader
                header={"Three Tiers of Serch MarketPlace Platform"}
                subHeader={"What you should expect to find from us"}
                justifyContent={"space-around"}
                props={
                    tiers.map((tier, index) => {
                        return <Box
                            textColor={tier.txtColor}
                            header={tier.name}
                            key={index}
                            color={tier.bgColor}
                        />
                    })
                }
            />
            <ContainerRightImage
                image={KeyImages.businessIndividual}
                imageAlt={""}
                props={
                    <>
                        <h2>Business or Individual?</h2>
                        <p>
                            Since we want to make service requesting and providing easy, we also make it much easier depending on which
                            category making use of the Serch Marketplace Platform. We believe in the ideology of "Tell us who you are
                            and we will give you the best choice." It's all left for you to tell us what you want.
                        </p>
                    </>
                }
            />
            <ContainerLeftImage
                image={KeyImages.howToProvide}
                imageAlt={""}
                props={
                    <>
                        <h2>Know how to provide?</h2>
                        <p>
                            We make it easy for providers all over the globe to join our platform and start providing their skills in order
                            to make more profit, and also to receive the best appreciation for their abilities and talent. We also make it
                            possible for providers to invite another provider incase the provider is limited in a certain issue.
                        </p>
                    </>
                }
            />
            <ContainerRightImage
                image={KeyImages.providingKnowledge}
                imageAlt={""}
                props={
                    <>
                        <h2>Limited in providing knowledge?</h2>
                        <p>
                            In order to avoid bad ratings and to encourage user's satisfaction, we introduced the requestSharing feature.
                            With this feature, providers would be able to transfer an issue that the provider won't be able to solve, or
                            wasn't able to solve to another provider with just a compensative fee from the user. Such compensative fee is
                            dependent on whether the user intentionally requested for a provider without such capability.
                        </p>
                        <div className="linkBox">
                            <Link to={ LegalLinks.communityGuidelines }>Read our community guidelines</Link>
                        </div>
                    </>
                }
            />
            <ContainerLeftImage
                image={KeyImages.need}
                imageAlt={""}
                props={
                    <>
                        <h2>In need of a service? Whether personal, for a friend or business</h2>
                        <p>
                            Getting into Serch Marketplace place is the only thing you need to do. We've made it easy to request for a
                            business, a friend, or even for personal use. A user can also make use of our requestSharing feature to share,
                            or recommend a particular provider to another user.
                        </p>
                    </>
                }
            />
        </>
    )
}

export const MarketplaceFooter = () => {
    const footerLinks = [
        {
            image: "",
            imageAlt: "",
            title: "Serch for Business",
            subtitle: "Learn more about what Serch offers to businesses that make use of the Serch Marketplace platform.",
            link: ProductLinks.business,
            linkText: "Here in Business"
        },
        {
            image: "",
            imageAlt: "",
            title: "Requesting",
            subtitle: "Looking to request with the Serch Marketplace Platform? Find our more about what we offer to individuals.",
            link: ProductLinks.request,
            linkText: "For Individuals"
        },
        {
            image: "",
            imageAlt: "",
            title: "Serch for Business",
            subtitle: `Interested in providing your skills in the Serch Marketplace Platform? Learn more on how to do that,
            requirements and how it works.`,
            link: ProductLinks.provide,
            linkText: "For Providers"
        },
    ]

    return <ContainerWithFlexedContents
        header="Hoping to get into details?"
        props={
            footerLinks.map((link, index) => {
                return <LinkBox
                    key={index}
                    image={link.image}
                    imageAlt={link.imageAlt}
                    width={40}
                    title={link.title}
                    subtitle={link.subtitle}
                    link={link.link}
                    linkText={link.linkText}
                />
            })
        }
    />
}