import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyLinks} from "../../config/custom/links";
import { Title } from "../../config/custom/titleheader";
import { Blogs } from "../../screens/company/blog/blogData";
import { News } from "../../screens/company/newsroom/newsData";
import { LatestInformationBox } from "../../widgets/container/boxes";
import { ContainerForLatestInformation, ContainerForPost } from "../../widgets/container/containers";
import { Shimmer } from "../../widgets/container/shimmer";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { NoPage } from "./main";

export const BlogPost = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        setLoading(true)
        let blog = Blogs.find(blog => blog.id === id);
        if(blog != null || blog){
            setLoading(false)
            setError(false)
            setBlog(blog);
        } else {
            setLoading(false)
            setError(true)
        }
    }, [id]);

    if(loading) {
        Title("Serch || Loading what you are looking for");
        return <>
            <Header />
            <Shimmer />
            <ContainerForLatestInformation
                header={"Latest Serch Blogs"}
                props={
                    Blogs.map((link, index) => {
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
            <Footer />
        </>
    } else if(loading === false && error === false && blog != null){
        Title(`${blog.topic} || Serch Blog`)
        return <>
            <Header />
            <ContainerForPost
                section={"Blog"}
                sectionRoom={"Blogs"}
                publishDate={blog.date}
                publishTopic={blog.topic}
                publishDocument={""}
                link={CompanyLinks.blog}
            />
            <ContainerForLatestInformation
                header={"Latest Serch Blogs"}
                props={
                    Blogs.map((link, index) => {
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
            <Footer />
        </>
    } else if(loading === false && error === true){
        Title("Serch || We are sorry for the error");
        return <>
            <Header />
            <div style={{padding: "2rem 2rem 4rem 2rem", width: "100%"}}>
                <h3 style={{fontSize: "2rem", color: "#030001"}}>Sorry, we couldn't find that blog document</h3>
                <p style={{fontSize: "1.5rem", color: "#030001"}} >
                    We might have removed, edited or shifted the document to another section. We are so sorry that you have to
                    experience this. We will rectify the situation soon.
                    Meanwhile, feel free to explore other blogs below.
                </p>
            </div>
            <ContainerForLatestInformation
                header={"Latest Serch Blogs"}
                props={
                    Blogs.map((link, index) => {
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
            <Footer />
        </>
    } else {
        Title("Serch || Expecting you back");
        return <NoPage />
    }
}


export const NewsPost = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        let news = News.find(news => news.id === id);
        if(news != null || news){
            setLoading(false)
            setError(false)
            setNews(news);
        } else {
            setLoading(false)
            setError(true)
        }
    }, [id]);

    if(loading) {
        Title("Serch || Loading what you are looking for");
        return <>
            <Header />
            <Shimmer />
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
            <Footer />
        </>
    } else if(loading === false && error === false && news != null){
        Title(`${news.topic} || Serch Newsroom`)
        return <>
            <Header />
            <ContainerForPost
                section={"News"}
                sectionRoom={"Newsroom"}
                publishDate={news.date}
                publishTopic={news.topic}
                publishDocument={""}
                link={CompanyLinks.newsroom}
            />
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
            <Footer />
        </>
    } else if(loading === false && error === true){
        Title("Serch || We are sorry for the error");
        return <>
            <Header />
            <div style={{padding: "2rem 2rem 4rem 2rem", width: "100%"}}>
                <h3 style={{fontSize: "2rem", color: "#030001"}}>Sorry, we couldn't find that news document</h3>
                <p style={{fontSize: "1.5rem", color: "#030001"}} >
                    We might have removed, edited or shifted the document to another section. We are so sorry that you have to
                    experience this. We will rectify the situation soon.
                    Meanwhile, feel free to explore other news below.
                </p>
            </div>
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
            <Footer />
        </>
    } else {
        Title("Serch || Expecting you back");
        return <NoPage />
    }
}