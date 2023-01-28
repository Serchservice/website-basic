import ProductImages from "../../../config/images/productImages";
import { LinkBox } from "../../../widgets/container/boxes";
import { ContainerLeftImage, ContainerWithFlexedContents, ContainerForLatestInformation } from "../../../widgets/container/containers";

export const RequestBody = () => {
    const content = [
        {
            title: "Location-based",
            subtitle: `Connect with artisans within your location. Everytime and anywhere. Connect as you go!`,
            image: ProductImages.WhyUsOne,
            imageAlt: "location"
        },
        {
            title: "Your money, your decision",
            subtitle: `Services made easy with such low budget for your subscription plans.`,
            image: ProductImages.WhyUsTwo,
            imageAlt: "serch subscription"
        },
        {
            title: "A whole lot",
            subtitle: `Tailored to bring you these at your doorstep, you get connected to a whole lot of handymen.`,
            image: ProductImages.WhyUsThree,
            imageAlt: "artisans"
        }
    ]

    const services = [
        {
            title: "Electrician",
            subtitle: `Get connected to a large number of electricians ready to ease your electrical problem.
            Everyday, anytime, anywhere.`,
            image: ProductImages.electrician,
            imageAlt: "electrician"
        },
        {
            title: "Mechanic",
            subtitle: `Get connected to a large number of mechanics ready to ease your mechanical problem. Everyday, anytime, anywhere.`,
            image: ProductImages.mechanic,
            imageAlt: "mechanic"
        },
        {
            title: "Plumber",
            subtitle: `Get connected to a large number of plumbers ready to ease your plumbing problem. Everyday, anytime, anywhere.`,
            image: ProductImages.plumber,
            imageAlt: "plumber"
        },
        {
            title: "Barbing",
            subtitle: `Connect with a whole lot of professional barbers in your area. Whether for home service or any other thing.`,
            image: "",
            imageAlt: "barber",
        }
    ]

    return <>
        <ContainerForLatestInformation
            header={"Don't know whether to become a Sercher?"}
            subHeader={"We are definitely lighting it all up with ease."}
            props={
                <ContainerLeftImage
                    image={ProductImages.productOne}
                    widthSize={400}
                    color="#FFFFFF"
                    imageAlt={""}
                    props={
                        <div style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            display: "flex",
                        }}>{
                            content.map((item, index) => {
                                return <LinkBox
                                    boxShadow={"rgba(0, 0, 0, 0.16) 0px 2px 6px 0px"}
                                    borderRadius={"0.3rem"}
                                    padding={"1rem"}
                                    title={item.title}
                                    key={index}
                                    image={item.image}
                                    imageAlt={item.imageAlt}
                                    width={70}
                                    height={70}
                                    subtitle={item.subtitle}
                                />
                            })
                        }</div>
                    }
                />
            }
        />
        <ContainerWithFlexedContents
            header={"Choose from our range of artisan services"}
            props={
                services.map((item, index) => {
                    return <LinkBox
                        title={item.title}
                        key={index}
                        subtitle={item.subtitle}
                        image={item.image}
                        imageAlt={item.imageAlt}
                        width={"20rem"}
                    />
                })
            }
        />
    </>
}