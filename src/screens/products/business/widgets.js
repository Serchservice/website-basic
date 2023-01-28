import { Link } from "react-router-dom";
import { AppLinks, InformationLinks, LegalLinks, SupportLinks,} from "../../../config/custom/links";
import { LegalIcons } from "../../../config/images/icons";
import Images from "../../../config/images/images";
import { KeyImages } from "../../../config/images/key";
import ProductImages from "../../../config/images/productImages";
import { FAQBox, LinkBox } from "../../../widgets/container/boxes";
import { ContainerLeftImage, ContainerRightImage, ContainerWithFlexedContents } from "../../../widgets/container/containers";

export const BusinessHeader = () => {
    return <ContainerRightImage
        image={KeyImages.businessOriented}
        widthSize={600}
        imageAlt={""}
        props={
            <>
                <h2>Business-oriented, Business-friendly</h2>
                <p>What Serch does for businesses, making them more effective and stress-free</p>
            </>
        }
    />
}

export const BusinessBody = () => {
    const content = [
        {
            title: "Community Guidelines",
            subtitle: `There are things we abhor and things we encourage for businesses that make use of Serch for Business platform.`,
            link: LegalLinks.communityGuidelines,
            linkText: "Learn more here",
            image: LegalIcons.agree,
            imageAlt: "community guideline"
        },{
            title: "Terms and Conditions",
            subtitle: `We stand with our rules and an understanding that our users and service providers agree with our policy`,
            link: LegalLinks.termsAndConditions,
            linkText: "Look into our T&C",
            image: LegalIcons.agree,
            imageAlt: "serch terms and conditions"
        },{
            title: "Non-discriminatory",
            subtitle: `We are invested in making the use of our platforms accessible, fun and non-discriminatory. We also want
            businesses that make use of our platform to keep that in mind.`,
            link: LegalLinks.discriminationPolicy,
            linkText: "Learn more here",
            image: LegalIcons.failed,
            imageAlt: "serch non-discrimination"
        }
    ]

    return (
        <>
            <ContainerLeftImage
                image={KeyImages.service}
                imageAlt={""}
                width={500}
                props={
                    <>
                        <h2>Service that problem faster</h2>
                        <p>
                            Look past the time when your business depended on a particular provider or artisan. Serch makes it possible
                            for your business to evade problems comming from your business provider and your utilities. Serch lets you
                            focus on work while you are taken care of.
                        </p>
                    </>
                }
            />
            <ContainerRightImage
                image={KeyImages.efficient}
                widthSize={600}
                imageAlt={""}
                props={
                    <>
                        <h2>Be more efficient and reliable</h2>
                        <p>
                            Serch Marketplace platform makes it able for businesses to run away from users waiting in line, cussing at
                            both the business and their fellow users just because there is an issue which is disrupting the service your
                            business provides for your users.
                        </p>
                    </>
                }
            />
            <ContainerWithFlexedContents
                header="Hoping to get into details?"
                props={
                    content.map((link, index) => {
                        return <LinkBox
                            image={link.image}
                            key={index}
                            width={40}
                            title={link.title}
                            subtitle={link.subtitle}
                            props={
                                <Link to={link.link}>{link.linkText}</Link>
                            }
                        />
                    })
                }
            />
            <ContainerLeftImage
                image={KeyImages.friendly}
                imageAlt={""}
                width={500}
                props={
                    <>
                        <h2>Business-friendly</h2>
                        <p>
                            As we encourage businesses to go further with the services they provide to their users by making use of Serch
                            MarketPlace Platform, we also make it possible for these businesses to go much further without breaking a sweat.
                            Our platform makes them enjoy much business-oriented offers and promotions. We are basically saying to your
                            business, "Your goal, our goal."
                        </p>
                    </>
                }
            />
            <ContainerRightImage
                image={KeyImages.hands}
                widthSize={500}
                imageAlt={""}
                props={
                    <>
                        <h2>Fly higher with Serch</h2>
                        <p>
                            We want you to reach your goals. Because we want that for your business, we want you to also want that for
                            Serch. As we make it our sworn mission to make sure that your business is not disrupted, we also want you to
                            make sure that you don't disrupt our business. Which is why we want you to make sure you read through our
                            legal documents.
                        </p>
                        <div className="linkBox">
                            <Link to={ SupportLinks.legal }>Visit our Legal Hub</Link>
                        </div>
                    </>
                }
            />
        </>
    );
}

export const BusinessFooter = () => {
    const faqs = [
        {
            question: "How does service requesting work?",
            answer: `Much like how an individual account owner requests for service, a business account owner also does the same.`,
        },
        {
            question: "What offer does my business account have?",
            answer: `We offer every business account owners the possibility of choosing two different subscription models. Just like
            an individual account, a business account can choose the best subscription model better for them.`,
            link: InformationLinks.payment,
            linkText: "Learn more about Serch's offering to businesses."
        },
        {
            question: "How do I get started?",
            answer: `Getting started is not an issue. You can download the app in any stores and get signed up within seconds.`,
            link: "/getting-started-as-a-user",
            linkText: "Learn more about getting started"
        }
    ]

    return (
        <>
            <ContainerLeftImage
                image={ProductImages.serchLogIn}
                widthSize={300}
                imageAlt={""}
                props={
                    <>
                        <h2>Request services your business needs</h2>
                        <h3>With you all through your experience as a business.</h3>
                        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between"}}>
                            <a href={ AppLinks.playStore }><img alt='' src={ Images.playStore } width={200}/> </a>
                            <a href={ AppLinks.appleStore }><img alt='' src={ Images.appleStore } width={190}/> </a>
                        </div>
                    </>
                }
            />
            <FAQBox
                subHeader={"Curious about what difference a business has over individuals?"}
                data={faqs}
            />
        </>
    );
}