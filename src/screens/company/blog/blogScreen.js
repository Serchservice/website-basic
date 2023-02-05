import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { CompanyLinks } from "../../../config/custom/links";
import { Title } from "../../../config/custom/titleheader";
import { Icons } from "../../../config/images/icons";
import { CategoryBox, InformationBox, LatestInformationBox } from "../../../widgets/container/boxes";
import { ContainerForLatestInformation, ContainerForPost } from "../../../widgets/container/containers";
import { PostsShimmer, Shimmer } from "../../../widgets/container/shimmer";
import { Footer, Header } from "../../../widgets/pageWidget";
import { BlogCategories, Blogs } from "./blogData";
import { BlogEnd } from "./widgets";

export const BlogPost = () => {
    const shortBlogs = Blogs.slice(0, 4);
    const [fixed, setFixed] = useState(false)
    const [open, setOpen] = useState(false)

    const openCategory = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.pageYOffset > 100){
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <>
        <Header />
        <div style={{
            position: fixed ? "fixed" : "relative",
            top: fixed ? '0' : "",
            width: "100%",
            padding: "0.5rem 1rem",
            zIndex: fixed ? "999999" : "",
            backgroundColor: "#FFF",
            borderBottom: "1px solid #E3E3E3"
        }} className="blog-header">
            <h3 className="blog-header-button">Serch Blog Categories</h3>
            <div className="blog-header-button-mobile" onClick={openCategory}>
                <h3 style={{marginRight: "1rem"}}>Serch Blog Categories</h3>
                <img alt="arrow-down-up" src={Icons.next} width={20} style={{
                    transform: open ? "rotate(-90deg)" : "rotate(90deg)"
                }}/>
            </div>
            <div className="blog-header-options">
                {
                BlogCategories.map((category, index) => {
                    return <Link to={`/company/blogs/blog/category/${category}`} key={index} >
                        <CategoryBox category={category} />
                    </Link>
                })
            }</div>
        </div>
        {
            open ? <div style={{
                position: fixed ? "fixed" : "relative", zIndex: "999999", top: fixed ? "7.1%" : "", padding: "1rem",
                backgroundColor: "#FFF", borderBottom: "1px solid #EEEEEE", width: "100%"
            }}>{
                BlogCategories.map((category, index) => {
                    return <Link to={`/company/blogs/blog/category/${category}`} key={index} style={{
                        marginBottom: "0.5rem", display: "block"
                    }} >
                        <CategoryBox category={category} />
                    </Link>
                })
            }</div> : null
        }
        <Outlet />
        <ContainerForLatestInformation
            header={"Latest Serch Blogs"}
            props={
                shortBlogs.map((link, index) => {
                    return <LatestInformationBox
                        image={link.img}
                        key={index}
                        position=""
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
}

export const MarkdownImage = (props) => {
    // const image = require('../../../assets/blog/user-features-and-tips.jpg');
    // console.log(props.src.split('../').slice(2).join("../"), props.alt, image)
    console.log(props.src)
    return(
        <img alt={props.alt} src={props.src} style={{width: "100%"}}/>
    )
}

export const BlogPostIndex = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [blog, setBlog] = useState(null);
    const [content, setContent] = useState("")

    useEffect(() => {
        let blog = Blogs.find(blog => blog.id === id);
        if(blog != null && blog){
            fetch(blog.blog).then(res => res.text()).then(document => {
                setLoading(false)
                setError(false)
                setContent(document)
            }).catch(error => {
                setContent(error)
                setLoading(false)
            })
            setLoading(false)
            setError(false)
            setBlog(blog);
        }else {
            setLoading(false)
            setError(true)
        }
    }, [id]);

    if(loading === true && error === false) {
        Title("Serch || Loading what you are looking for");
        return <>
            <Shimmer />
        </>
    } else if(loading === false && error === false && blog != null){
        Title(`${blog.topic} || Serch Blog`)
        return <>
            <ContainerForPost
                section={"Blog"}
                sectionRoom={"Blogs"}
                publishDocument={<Markdown
                    options={{
                        overrides: {
                            img: {
                                component: MarkdownImage
                            }
                        }
                    }}
                >{content}</Markdown>}
                link={CompanyLinks.blog}
                publishedBy={blog.publisher}
            />
        </>
    } else {
        Title("Serch || We are sorry for the error");
        return <div style={{padding: "2rem 2rem 4rem 2rem", width: "100%"}}>
            <h3 style={{fontSize: "2rem", color: "#030001"}}>Sorry, we couldn't find that blog document</h3>
            <p style={{fontSize: "1.5rem", color: "#030001"}} >
                We might have removed, edited or shifted the document to another section. We are so sorry that you have to
                experience this. We will rectify the situation soon.
                Meanwhile, feel free to explore other blogs below.
            </p>
        </div>
    }
}

export const BlogCategory = () => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [blogCategory, setBlogCategory] = useState([])

    const style = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "1rem 0rem 3rem 0rem",
        justifyContent: "space-around",
    }

    useEffect(() => {
        let cat = Blogs.filter(blogCat => blogCat.category === category)
        if(cat != null || cat){
            setLoading(false)
            setBlogCategory(cat)
        }
    }, [category]);

    if(loading){
        Title("Serch || Loading what you are looking for");
        return <>
            <PostsShimmer />
        </>
    } else {
        Title(`${category} || Serch Blog`)
        return <>
            <div style={style}>{
                blogCategory.map((blog, index) => {
                    return <InformationBox
                        img={blog.img}
                        imgAlt={blog.imgAlt}
                        key={index}
                        zIndex="0"
                        dept={blog.category}
                        date={blog.date}
                        topic={blog.topic}
                        link={`/company/blogs/blog/${blog.id}`}
                    />
                })
            }</div>
            <BlogEnd />
        </>
    }
}