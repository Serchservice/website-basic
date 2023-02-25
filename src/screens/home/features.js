import { useState } from "react";
import { HomeImages, HelpImages } from "../../config/images/homeImages";
import { ContainerBackgroundImage, ContainerLeftImage, ContainerRightImage, ContainerStaticImage,
    ContainerWithUnderlinedHeader, RightContainerDismissibleImage } from '../../widgets/container/containers';
import { Box, SerchShortPlanBox } from "../../widgets/container/boxes";
import { Link } from "react-router-dom";
import { MainLinks } from "../../config/custom/links";
import { SerchPlans } from "../information/payment/data";

export const Features = () => {
    return <ContainerWithUnderlinedHeader
        header={"Our Platform Features"}
        justifyContent="space-around"
        subHeader={"What to expect from Serch platforms"}
        props={
            SerchFeatures.map((data, index) => {
                return <Box
                    key={index}
                    header={data.header}
                    content={data.content}
                    quote={data.quote}
                    color={data.color}
                    textColor={data.textColor}
                    quoteColor={data.quoteColor}
                />
            })
        }
    />
}

export const SerchFeatures = [{
    color: "#000080",
    textColor: "#e6e6fa",
    quoteColor: "#0000ff",
    header: "SWM (Stick With Me)",
    quote: "\"Security creates peace of mind\"",
    content: `Serch uses the SWM to keep track of our providers. This makes sharing of live location possible, and security, better.`
},{
    color: "#4b0082",
    textColor: "#FAFAFA",
    quoteColor: "#ab82ff",
    header: "CTG (Connect-To-Go)",
    quote: "\"In Serch, you always come first!\"",
    content: `With the CTG, Serch is notified that a provider and a user is on a service trip. This aids in security, record and
        so many other things that Serch uses in protecting the user and providing the user with any information needed for that
        service trip.`
},{
    color: "#030303",
    textColor: "#f2f2f2",
    quoteColor: "#6e6e6e",
    header: "Tip2Fix",
    quote: "\"Service made easy\"",
    content: `DIY (Do it yourself) at its best in Serch! Get the help you need with a service provider guiding you along the whole
        journey.`
},{
    color: "#800000",
    textColor: "#f2f2f2",
    quoteColor: "#f08080",
    header: "RequestShare",
    quote: "\"Sharing made easy\"",
    content: `Got a service provider you admire the expertise? Well, share the service provider to your friends! Do not keep
        such to yourself, Serch has the best way to do this without any hassle.`
},{
    color: "#006400",
    textColor: "#f0fff0",
    quoteColor: "#00fa9a",
    header: "ProvideShare",
    quote: "\"Solution even in worst situations\"",
    content: `Got a service provider you admire the expertise? Well, share the service provider to your friends! Do not keep such
        to yourself, Serch has the best way to do this without any hassle.`
},{
    color: "#8b1c62",
    textColor: "#f0fff0",
    quoteColor: "#ffbbff",
    header: "All-Inclusive Community",
    quote: "\"Standing together to achieve your goals\"",
    content: `Serch all-inclusive community seeks to promote togetherness. We have our SGC (Safe-Guard Community), where people
        engage on discussions regarding how to imporove Serch safety measures and other things. Keeping you and Serch safe!`
}]

export const Time = () => {
    return <ContainerBackgroundImage
        className="time"
        props={
            <>
                <h2 style={{
                    color: "#ffffff", marginLeft: "2rem"
                }}>Get plumbers, electricians, mechanics and personal shoppers in minutes!</h2>
            </>
        }
    />
}

export const ServiceTab = ({service, props, className, word}) => {
    return (
        <div style={{margin: "2rem 0rem"}}>
            <div style={{margin: "2rem 1rem"}}>
                <h2 style={{color: "#00021e"}}>Connect with {word} {service} within your location. Get the services you want</h2>
                <div className="webAuth" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                }}>{props}</div>
            </div>
            <div className={`${className} background`}></div>
        </div>
    );
}

export const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const services = [{
        service: "Electrician",
        className: "electrician",
        links: [{
            link: MainLinks.yetToLaunch,
            text: "Learn more"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Signup as an electrician"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Login as an electrician"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Request an electrician"
        }]
    }, {
        service: "Plumber",
        className: "plumber",
        links: [{
            link: MainLinks.yetToLaunch,
            text: "Learn more"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Signup as a plumber"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Login as a plumber"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Request a plumber"
        }]
    }, {
        service: "Mechanic",
        className: "mechanic",
        links: [{
            link: MainLinks.yetToLaunch,
            text: "Learn more"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Signup as a mechanic"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Login as a mechanic"
        }, {
            link: MainLinks.yetToLaunch,
            text: "Request a mechanic"
        }]
    }]

    return (
        <>
            <div className="tabButtons" style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "0.5rem",
                borderTopRightRadius: "1rem",
            }}>{
                services.map((service, index) => {
                    return <section className={toggleState === index ? "active-tab tabButton" : "tabButton"}
                        onClick={() => toggleTab(index)} key={index} style={{
                            backgroundColor: "#FFF",
                            color: "#030001",
                            fontSize: "16px",
                            fontWeight: "600",
                            margin: "0.3rem 0rem",
                            padding: "0.5rem",
                            cursor: "pointer",
                        }}>{service.service}</section>
                })
            }</div>
            {
                services.map((service, index) => {
                    return <div className={toggleState === index ? "active-tabContent tabContent" : "tabContent"} style={{
                        flexGrow: "1",
                    }} key={index}>
                        <ServiceTab
                            className={service.className}
                            service={service.service.toLowerCase()}
                            word={service.service.includes("Electrician") ? "an" : "a"}
                            props={
                                service.links.map((link, index) => {
                                    return <Link to={link.link} key={index} style={{
                                        margin: "0.5rem 1rem 0.5rem 0rem",
                                        padding: "0.5rem",
                                        display: "block",
                                        color: "#FAFAFA",
                                        fontSize: "16px",
                                        backgroundColor: "#030001",
                                        borderRadius: "0.3rem",
                                    }}>{link.text}</Link>
                                })
                            }
                        />
                    </div>
                })
            }
        </>
    );
}

export const Plans = () => {
    return (
        <>
            <ContainerLeftImage
                image={HomeImages.first}
                color="#FFFFFF"
                props={
                    <>
                        <h2>Reimagining and bringing more eventful experiences</h2>
                        <p>Serch is not just a place that brings the easy way to requesting services, it is a place for imaginations.
                            Soaring beyond the unthinkable and emerging into the world where possibilites are not limited nor endless.
                        </p>
                    </>
                }
            />
            <ContainerWithUnderlinedHeader
                header="Subscription Plans"
                subHeader="What we offer to ease your services"
                justifyContent={"space-around"}
                props={
                    SerchPlans.map((plan, index) => {
                        return <SerchShortPlanBox
                            planName={plan.title}
                            image={plan.image}
                            imageAlt={plan.imageAlt}
                            planCategory={plan.category}
                            key={index}
                        />
                    })
                }
            />
            <ContainerRightImage
                image={HomeImages.sgcIdea}
                props={
                    <>
                        <h2>It's always about growth</h2>
                        <p>There is a place for everyone to contribute to the growth of Serch. We value much of that here.
                            Leveraging on our community, our feedbacks and our team, Serch continues to grow and brim more ideas.
                        </p>
                    </>
                }
            />
            <RightContainerDismissibleImage
                image={HelpImages.promotion}
                widthSize={300}
                color="#3B043B"
                props={
                    <>
                        <h2 style={{color: "#FAFAFA"}}>Promotions and Offers</h2>
                        <p style={{color: "#FAFAFA"}}>Learn about Serch promotions and offers. Like we always say, "Happy users, leads to service improvement."</p>
                        <button>Learn more</button>
                    </>
                }
            />
            <ContainerStaticImage
                image={HelpImages.fingerprint}
                widthSize={300}
                props={
                    <>
                        <h2>Security is important</h2>
                        <p>In the world of Serch, the user and the provider are both important.
                            And as important they are to us, their security is our priority too.
                            The security of both data and livelihood are all important.
                            We strive to protect every experience in Serch.
                        </p>
                    </>
                }
            />
            <ContainerRightImage
                image={HelpImages.keys}
                widthSize={400}
                props={
                    <>
                        <h2>Keys to the City</h2>
                        <p>Inasmuch as we protect our users and providers, we still leave everything to their own preference.
                            Therefore, they hold the keys to the city. We are just standing at the gate waiting for them to let us in.
                            By letting us in throught SWM and the connect toggle, we stay with them throughout the journey.
                        </p>
                    </>
                }
            />
            <ContainerStaticImage
                image={HelpImages.target}
                widthSize={300}
                props={
                    <>
                        <h2>Target hitter</h2>
                    <p>There is nothing much more fun than seeing your shots go where you want them to go.
                        Serch is nothing but that wind which gets each target to its intended destination.
                    </p>
                    </>
                }
            />
        </>
    );
}