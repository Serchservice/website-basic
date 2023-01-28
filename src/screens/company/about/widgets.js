import { Link } from "react-router-dom";
import { AboutImages } from "../../../config/images/companyImages";
import Images from "../../../config/images/images";
import { Icons, LegalIcons } from "../../../config/images/icons";
import '../../css/serch.css';
import { CompanyLinks, InformationLinks } from '../../../config/custom/links';
import { ContainerBackgroundImage, ContainerRightImage, ContainerWithFlexedContents, ContainerWithUnderlinedHeader } from '../../../widgets/container/containers';
import { Box, LinkBox } from '../../../widgets/container/boxes';

export const AboutHeader = () => {
    return <ContainerBackgroundImage
        className="aboutHeader"
        heightSize="500px"
        props={
            <>
                <h1 style={{
                    color: "#F2F2F2", marginLeft: "2rem"
                }}>About Serch</h1>
            </>
        }
    />
}

export const StatementDocument = [
    {
        name: "Our Mission",
        content: `Building a system that makes life easy and comfortable for both users and service providers.'
            A system where providers earn more with their skills, while users enjoy faster and easier services.
        `
    },{
        name: "Our Vision",
        content: `Expanding our easy services into little details that are difficult to request, but overly underestimated.`
    },{
        name: "Our Target",
        content: `Expanding the appreciation of professional skills in diaspora, making it easier to request for,
            encouraging more earning with such skills and more happy and relaxed users.
        `
    }
]

export const Statement = () => {
    return <ContainerWithUnderlinedHeader
        header={"Our Statements"}
        subHeader="What We Stand For and What Drives Serch"
        props={
            StatementDocument.map((doc, index) => {
                return <Box
                    header={doc.name}
                    content={doc.content}
                    textAlign="center"
                    fontSize="1.6rem"
                    key={index}
                />
            })
        }
    />
}

export const AboutBody = () => {
    const description = [
        {
            header: "About Serch",
            content: `Just as technology has made people dream of better lives, thereby looking for greener pastures in other areas of
                life, technology also enables us to have access to that which we might have ignored. Services are what we power.
            `,
            secondContent: `Not just services, but artisan services made easier, faster, better and affordable. Broken stranded cars, faulty pipes,
                faulty electrical appliances, etc. We stand to give you the best people to give you the best repairs. Talk to any of these
                providers in real time, get price quotations, get whatever you want done in a twinkle.
            `
        },{
            header: "Serch Top-Notch Services",
            content: `Serch is dedicated to providing service providers that are qualified to render services to the utmost satisfaction
                of the users requesting for these services. Qualified service providers result to happy customers. So, it becomes our
                commitment to make sure that service providers are knowledgeable enough to be in our system.
            `,
            secondContent: `However, it is also
                important that users make sure that any service provider they are requesting for, is capable of solving the problem they
                want solved by telling them what problem they are facing in the chats.
            `
        },{
            header: "Serch Dedication for Happy Users",
            content: `Much closer to the depths of our heart, lies the happiness of our users. We are fully devoted in making sure
                that we provide artisan services in the best easiest way ever imagined. Keeping our users interested and happy,
                making sure they are always comfortable anywhere they are, while these providers come and render the services
                they need.
            `,
            secondContent: `Since it is our lifetime intention to make services reachably easier, faster and better, we are
                committed to take it upon us to take the hard part while our users enjoy the sweet comfort we bring.
            `
        }
    ]

    const links = [
        {
            image: Icons.closeFolder,
            imageAlt: "serch news",
            title: "News and Update",
            subtitle: `Learn more about happenings in Serch. Get updates as they happen, realtime news update on the happenings,
            conferences, discussions and any update in Serch.`,
            link: CompanyLinks.newsroom,
            linkText: "Here in Newsroom"
        },{
            image: Icons.closeDoc,
            imageAlt: "serch blogs",
            title: "Blogs",
            subtitle: `Learn more about our articles helping you to navigate the waters of Serch. Stay wise, with updates on these
            articles.`,
            link: CompanyLinks.blog,
            linkText: "With our blog house"
        },{
            image: LegalIcons.compliant,
            imageAlt: "serch safety",
            title: "Safety-Conscious",
            subtitle: `Dedication to bringing the best service, results to our dedication to make sure your every second experience,
            is safety-guaranteed.`,
            link: InformationLinks.safety,
            linkText: "Safety Guidelines"
        }
    ]

    return (
        <>
            <ContainerBackgroundImage
                className="aboutService"
                heightSize="500px"
                props={
                    <>
                        <h1 style={{
                            color: "#F2F2F2", marginLeft: "2rem"
                        }}>Serch Top-Notch Services</h1>
                    </>
                }
            />
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "3rem 1rem"}}>
                {
                    description.map(doc => {
                        return <Box
                            header={doc.header}
                            key={doc.id}
                            content={doc.content}
                            secondContent={doc.secondContent}
                            maxWidth={"30rem"}
                        />
                    })
                }
            </div>
            <div className="about_providers">
                <h2>Dedicated service providers</h2>
                <img alt="" src={ Images.mechanic } />
            </div>
            <ContainerBackgroundImage
                className="aboutHappy"
                heightSize="500px"
                props={
                    <>
                        <h1 style={{
                            color: "#030001", marginLeft: "2rem"
                        }}>Happy services lead to happy users!</h1>
                    </>
                }
            />
            <ContainerWithFlexedContents
                header="Happenings in Serch"
                props={
                    links.map((link, index) => {
                        return <LinkBox
                            image={link.image}
                            imageAlt={link.imageAlt}
                            key={index}
                            width={40}
                            title={link.title}
                            subtitle={link.subtitle}
                            link={link.link}
                            linkText={link.linkText}
                        />
                    })
                }
            />
            <ContainerRightImage
                image={AboutImages.motto}
                props={
                    <>
                        <h2>Curious about what drives us?</h2>
                        <p>It's nothing else but that which we stand for, encompassing all other things.</p>
                    </>
                }
            />
            <ContainerRightImage
                image={Icons.career}
                widthSize={350}
                color="#bdbdbd"
                props={
                    <>
                        <h2>Start your career with us</h2>
                        <p>Search for open roles in Serch and join us in making services easy.</p>
                        <Link to={CompanyLinks.careers} className="button">Search</Link>
                    </>
                }
            />
        </>
    );
}