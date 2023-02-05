import { Link } from "react-router-dom";
import { ProviderAppLinkJson, UserAppLinkJson } from "../../../config/custom/links";
import { BlogImages } from "../../../config/images/companyImages";
import { InformationBox, LatestInformationBox, SerchAppBox } from "../../../widgets/container/boxes";
import { ContainerForLatestInformation, ContainerRightImage } from "../../../widgets/container/containers";
import { Blogs } from "./blogData";

export const BlogHeader = () => {
    return <ContainerRightImage
        image={BlogImages.header}
        widthSize={600}
        props={
            <>
                <h2>A global move</h2>
                <p>Much to do and much to service. Much to make easy.</p>
            </>
        }
    />
}

export const BlogBody = () => {
    const shortBlogs = Blogs.slice(0, 4);
    const longBlogs = Blogs.slice(5, 12);
    const style = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "1rem 0rem 3rem 0rem",
        justifyContent: "space-around",
    }

    return(
        <>
            <div style={style}>{
                longBlogs.map((blog, index) => {
                    return <InformationBox
                        img={blog.img}
                        imgAlt={blog.imgAlt}
                        key={index}
                        dept={blog.category}
                        date={blog.date}
                        topic={blog.topic}
                        link={`/company/blogs/blog/${blog.id}`}
                    />
                })
            }</div>
            <ContainerRightImage
                image={BlogImages.folderGif}
                widthSize={400}
                props={
                    <>
                        <h2>Much to be uncovered from a box</h2>
                        <p>Curiousity will get you more interested.</p>
                        <p>Open up any that you find interesting and read more about it.</p>
                    </>
                }
            />
            <ContainerForLatestInformation
                header={"Latest Serch Blogs"}
                props={
                    shortBlogs.map((link, index) => {
                        return <LatestInformationBox
                            image={link.img}
                            key={index}
                            imgAlt={link.imgAlt}
                            topic={link.topic}
                            date={link.date}
                            link={`/company/blogs/blog/${link.id}`}
                        />
                    })
                }
            />
        </>
    );
}

export const BlogEnd = () => {
    const style = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
    }

    return (
        <div style={style}>
            <SerchAppBox
                color="#2c0f0c"
                header="Earn extra money providing the service you know how to"
                links={
                    ProviderAppLinkJson.map((link, index) => {
                        return <Link to={link.link} key={index} style={{color: "#FAFAFA"}}>{link.name}</Link>
                    })
                }
            />
            <SerchAppBox
                color="#000342"
                header="Get the service/help/assist you need across the world."
                links={
                    UserAppLinkJson.map((link, index) => {
                        return <Link to={link.link} key={index} style={{color: "#FAFAFA"}}>{link.name}</Link>
                    })
                }
            />
        </div>
    );
}