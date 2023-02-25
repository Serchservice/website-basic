import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyLinks } from "../../../config/custom/links";
import { Title } from "../../../config/custom/titleheader";
import { NoPage } from "../../../web/pages/main";
import { LatestInformationBox } from "../../../widgets/container/boxes";
import { ContainerForLatestInformation, ContainerForPost } from "../../../widgets/container/containers";
import { Shimmer } from "../../../widgets/container/shimmer";
import { Footer, Header } from "../../../widgets/pageWidget";
import { MarkdownImage } from "../blog/blogScreen";
import { News } from "./newsData";

export const NewsScreenPost = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState("")
    const [error, setError] = useState(false)
    const sortedNews = News.sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split(" ")[0].split("/");
        const [dayB, monthB, yearB] = b.date.split(" ")[0].split("/");
        return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
    });
    const newNews = sortedNews.sort((a, b) => new Date(a.date) - new Date(b.date)).filter((news) => news.id !== id);
    const recentNews = newNews.slice(-4);


    useEffect(() => {
        setLoading(true)
        let news = News.find(news => news.id === id);
        if(news != null || news){
            fetch(news.news).then(res => res.text()).then(document => {
                setLoading(false)
                setError(false)
                setContent(document)
            }).catch(error => {
                setContent(error)
                setLoading(false)
            })
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
                publishDocument={<Markdown
                    options={{
                        overrides: {
                            img: {
                                component: MarkdownImage
                            }
                        }
                    }}
                >{content}</Markdown>}
                link={CompanyLinks.newsroom}
            />
            <ContainerForLatestInformation
                header={"Latest Serch News"}
                props={
                    recentNews.map((link, index) => {
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