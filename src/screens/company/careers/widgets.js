import { CareerImages } from "../../../config/images/companyImages";
import { ContainerForLatestInformation, ContainerLeftImage, ContainerRightImage, SlideContainer } from "../../../widgets/container/containers";
import { Box } from "../../../widgets/container/boxes";

export const CareerHeader = () => {
    return <ContainerRightImage
        image={CareerImages.toDo}
        imageAlt={""}
        props={
            <>
                <h2>Roles in Serch</h2>
                <p>Here we lay out open roles in Serch for people to get into.</p>
                <p>Looking out for "Service made easy" type of people.</p>
            </>
        }
    />
}

export const CareerRoles = () => {
    return (
        <div className="productHeader">
            <h2>We don't have any open roles at the moment. We will update this page once any opens up.</h2>
        </div>
    );
}

export const CareerFooter = () => {
    return <ContainerRightImage
        image={CareerImages.workHeader}
        imageAlt={""}
        props={
            <>
                <h2>Still starting to achieve our dreams</h2>
                <p>We haven't started anything yet. We still have a long way to go.</p>
                <p>We are surely going all the way up. The right team matters.</p>
            </>
        }
    />
}

export const CareerLife = () => {
    return <ContainerForLatestInformation
        color={"#030001"}
        textColor="#FAFAFA"
        header={"Life @Serch"}
        props={
            <>
                <ContainerLeftImage
                    color="#030001"
                    image={CareerImages.careerOne}
                    widthSize={1000}
                    imageAlt={""}
                    props={
                        <>
                            <h2 style={{color: "#FAFAFA"}}>Team Happiness</h2>
                            <p style={{color: "#FAFAFA"}}>We value the happiness of every team player in Serch.
                                With every happy player, there is bound to be more great ideas and more development.
                                Thus increasing our goals-getting quicker and faster.
                            </p>
                        </>
                    }
                />
                <ContainerRightImage
                    image={CareerImages.careerTwo}
                    imageAlt={""}
                    widthSize={1000}
                    color="#030001"
                    props={
                        <>
                            <h2 style={{color: "#FAFAFA"}}>Passion is what we have</h2>
                            <p style={{color: "#FAFAFA"}}>Nothing stops us. Serch is soaring higher than it dreamed of.
                                Though we never dreamt of any limits, Serch is breaking boundaries in services.
                                Brimming ideas into life are what we cherish in Serch services.
                            </p>
                        </>
                    }
                />
                <ContainerLeftImage
                    image={CareerImages.careerThree}
                    imageAlt={""}
                    widthSize={1000}
                    color="#030001"
                    props={
                        <>
                            <h2 style={{color: "#FAFAFA"}}>Service made easy</h2>
                            <p style={{color: "#FAFAFA"}}>Our repeated motto still stands strong to the core of our structure and culture.
                                Every team player automatically gets into this dream of Serch, by thinking out more ideas.
                                No limits, no stoppage, no underestimation..
                            </p>
                        </>
                    }
                />
            </>
        }
    />
}

export const CareerInnovation = () => {
    return (
        <>
            <ContainerRightImage
                image={CareerImages.innovate}
                imageAlt={""}
                props={
                    <>
                        <h2>Team with passion and zeal</h2>
                        <p>Making services easy is what we all desire. And in doing such, we get to grow more, together.</p>
                        <p>Serch team is more and more investing in the best services ever. Teamwork is just top-notch.</p>
                    </>
                }
            />
            <ContainerLeftImage
                image={CareerImages.board}
                imageAlt={""}
                props={
                    <>
                        <h2>Together, plans get more beautiful</h2>
                        <p>We keep on building and discussing. Good services are a product of the teamwork.</p>
                        <p>Everybody putting all they have to one signle aim, "Service made easy."</p>
                    </>
                }
            />
        </>
    );
}

export const CareerFromSerch = () => {
    const data = [
        {
            image: "",
            bgColor: "#E3E3E3",
            header: "Serch",
            content: ""
        },
        {
            image: "",
            bgColor: "#030001",
            header: "Father",
            content: ""
        },
    ]
    return <SlideContainer
        data={
            data.map((item, index) => {
                return <Box
                    header={item.header}
                    color={item.bgColor}
                    key={index}
                />
            })
        }
    />
}