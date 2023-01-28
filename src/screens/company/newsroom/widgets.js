import { NewsroomImages } from "../../../config/images/companyImages";
import { KeyImages } from "../../../config/images/key";
import { News } from "./newsData";
import { InformationBox, LatestInformationBox } from "../../../widgets/container/boxes";
import { ContainerForLatestInformation, ContainerLeftImage } from "../../../widgets/container/containers";

export const NewsroomHeader = () => {
    return <ContainerLeftImage
        image={NewsroomImages.header}
        widthSize={600}
        props={
            <>
                <h2>News on the go</h2>
                <p>Whether you are walking, running or doing anything, stay updated with happenings in Serch.</p>
                <p>We bring it all here so that no one is left behind.</p>
            </>
        }
    />
}

export const NewsroomFooter = () => {
    const emailStyle = {
        borderRadius: "0.5rem",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 2px 6px 0px",
        display: "flex",
        backgroundColor: "#030001",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2rem",
        alignSelf: "center",
        marginTop: "2rem",
        height: "auto",
    }

    const emailBox = {
        width: "auto",
        display: "flex",
        marginTop: "1rem",
        flexDirection: "column",
        justifyContent: "center",
    }

    const emailInput = {
        backgroundColor: "#FAFAFA",
        padding: "1rem 1rem",
        borderRadius: "0.5rem",
        fontSize: "16px",
        width: "auto",
        margin: "0rem 0rem 1rem 0rem",
    }

    const emailButton = {
        padding: "0.5rem 1rem",
        backgroundColor: "#FAFAFA",
        color: "#030001",
        alignSelf: "flex-end",
    }

    return <ContainerLeftImage
        header={"Want to stay ahead of others and recieve information about us firsthand?"}
        image={KeyImages.serch}
        widthSize={400}
        imageAlt={""}
        color={"#FAFAFA"}
        flex={"wrap"}
        props={
            <div className="emailUs" style={emailStyle}>
                <h3 style={{color: "#FAFAFA"}}>Subscribe to our newsletter and get notified.</h3>
                <form style={emailBox}>
                    <input type="Text" placeholder="Name" style={emailInput}/>
                    <input type="mail" placeholder="Email" style={emailInput}/>
                    <button style={emailButton}> Submit </button>
                </form>
            </div>
        }
    />
}

export const NewsroomBody = () => {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "1rem 0rem 3rem 0rem",
        justifyContent: "space-around",
    }

    return (
        <>
            <div style={style}>{
                News.map((blog, index) => {
                    return <InformationBox
                        img={blog.img}
                        imgAlt={blog.imgAlt}
                        key={index}
                        dept={blog.dept}
                        date={blog.date}
                        topic={blog.topic}
                        link={`/company/newsroom/news/${blog.id}`}
                    />
                })
            }</div>
            <ContainerForLatestInformation
                header={"Latest Serch News"}
                props={
                    News.map((link, index) => {
                        return <LatestInformationBox
                            image={link.img}
                            key={index}
                            imgAlt={link.imgAlt}
                            topic={link.topic}
                            date={link.date}
                            link={`/company/newsroom/news/${link.id}`}
                        />
                    })
                }
            />
        </>
    );
}