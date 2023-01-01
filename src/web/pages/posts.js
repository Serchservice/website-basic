import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyLinks} from "../../config/custom/links";
import { Title } from "../../config/custom/titleheader";
import { Icons } from "../../config/images/icons";
import { Blogs } from "../../screens/company/blog/blogData";
import { News } from "../../screens/company/newsroom/newsData";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { NoPage } from "./main";

export const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = Blogs.find(blog => blog.id === id);

        if(blog){
            setBlog(blog);
        }
    }, [id]);

    blog ? Title(`${blog.topic} || Serch Blog`) : Title("Serch || Expecting you back");
    return(
        blog ? (
            <div className="serch">
                <Header />
                <div className="support_section">
                    <div className="keyHeader">
                        <h2>Serch || Blog</h2>
                        <a href={ CompanyLinks.blog } className="keyArrowBack">
                            <img alt="" src={ Icons.arrowLeft } width={30} />
                            <h3>Back to Serch Blogs</h3>
                        </a>
                    </div>
                    <div>
                        <header>
                            <p>Published { blog.date } </p>
                            <h2> { blog.topic } </h2>
                        </header>
                        <img alt={blog.imgAlt} src={blog.img}/>
                    </div>
                </div>
                <Footer />
            </div>
        )  : (<NoPage />)
    );
}


export const NewsPost = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        let news = News.find(news => news.id === id);

        if(news){
            setNews(news);
        }
        console.log(id);
    }, [id]);

    news ? Title(`${news.topic} || Serch News`) : Title("Serch || Expecting you back");
    return(
        news ? (
            <div className="serch">
                <Header />
                <div className="support_section">
                    <div className="keyHeader">
                        <h2>Serch || News</h2>
                        <a href={ CompanyLinks.newsroom } className="keyArrowBack">
                            <img alt="" src={ Icons.arrowLeft } width={30} />
                            <h3>Back to Serch Newsroom</h3>
                        </a>
                    </div>
                    <div>
                        <header>
                            <p>Published { news.date } </p>
                            <h2> { news.topic } </h2>
                        </header>
                    </div>
                </div>
                <Footer />
            </div>
        ) : (<NoPage />)
    );
}