import { SupportLinks } from "../../../config/custom/links";
import { HelpImages } from "../../../config/images/homeImages";
import { KeyImages } from "../../../config/images/key";
import ProductImages from "../../../config/images/productImages";
import { LinkBox } from "../../../widgets/container/boxes";
import { ContainerLeftImage, ContainerRightImage, ContainerWithFlexedContents } from "../../../widgets/container/containers";

export const KeySupportHead = () => {
    return <ContainerRightImage
        image={KeyImages.contract}
        widthSize={300}
        imageAlt={"serch support"}
        props={
            <>
                <h2>All information you need to know, in one place.</h2>
                <p>Our support hub where you can get all documents you need in order to run with us.</p>
            </>
        }
    />
}

export const KeySupportBody = () => {
    return <>
        <ContainerLeftImage
            image={KeyImages.workplaces}
            imageAlt={"serch support"}
            props={
                <>
                    <h2>24/7 Support</h2>
                    <p>
                        Because we value each user of our platform, we are committed to providing the best customer care support
                        for each of us all, so as to foster faster services, trusted partnership and secured mindset.
                    </p>
                </>
            }
        />
        <ContainerRightImage
            image={KeyImages.global}
            widthSize={200}
            imageAlt={"serch support"}
            props={
                <>
                    <h2>Global Outreach</h2>
                    <p>
                        Our global support stretches out wide to all corner of the globe. We aim at making service requesting or providing
                        in any part of the globe easy. As our dreams foster much bigger plans, we also make sure that our support stretches
                        to that big dream.
                    </p>
                </>
            }
        />
        <ContainerLeftImage
            image={KeyImages.request}
            widthSize={200}
            imageAlt={"serch support"}
            props={
                <>
                    <h2>Curiousity Clearing</h2>
                    <p>
                        Finding a particular feature hard to understand or use? Or you have some other issue you have with our platforms?
                        We clear all curious mindsets, problems and issues through our support and help.
                    </p>
                </>
            }
        />
    </>
}

export const KeySupportEnd = () => {
    const contents = [
        {
            image: KeyImages.legal,
            imageAlt: "serch legal",
            link: SupportLinks.legal,
            linkText: "Go to legal",
            title: "Legal Hub",
            subtitle: `Our legal hub contain all the legal documents that protect both Serch and the users. We recommend reading
            it before making use of our service, as they will let you know what is required and not.`
        },{
            image: HelpImages.ask,
            imageAlt: "serch legal",
            link: SupportLinks.help,
            linkText: "Go to Help",
            title: "Help Hub",
            subtitle: `Our help hub contain all the frequently asked questions that our users, both providers, clients and even
            businesses might encounter when using our platform. We recommend reading through them before communicating to the ask team.`
        },{
            image: ProductImages.callSupport,
            imageAlt: "serch legal",
            link: SupportLinks.support,
            linkText: "Go to Support",
            title: "Support Hub",
            subtitle: `Should you not find what you are looking for, our support hub is there to guide you on what to do next.
            As we are dedicated to make sure that your experience is top-notch, we also make it possible.`
        }
    ]

    return <ContainerWithFlexedContents
        header="Ready to get into details?"
        subHeader="We hope you read everything to help you going."
        props={
            contents.map((item, index) => {
                return <LinkBox
                    image={item.image}
                    key={index}
                    imageAlt={item.imageAlt}
                    title={item.title}
                    subtitle={item.subtitle}
                    link={item.link}
                    linkText={item.linkText}
                    width={40}
                />
            })
        }
    />
}