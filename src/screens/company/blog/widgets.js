import { BlogImages } from "../../../config/images/companyImages";
import { Blogger, LatestBlogger, SignupProvider, SignupUser } from "../../../widgets/container/blogNews";
import { Blogs, RecentBlogs } from "./blogData";

export const RecentBlog = ({recent}) => {
    return(
        <div className="serch">
            {recent.map((blog, index) => <LatestBlogger data={blog} key={index} />)}
        </div>
    );
}

export const BlogMap = ({blogs}) => {
    return(
        <div className="posts">
            {blogs.map((blog, index) => <Blogger data={blog} key={index} />)}
        </div>
    );
}

export const BlogHeader = () => {
    return (
        <div className="blogHeader">
            <div className="productHeader">
                <div className='productHeaderText'>
                    <h2>A global move</h2>
                    <p>Much to do and much to service. Much to make easy.</p>
                </div>
                <img alt='' src={ BlogImages.header } width={600} />
            </div>
            <div className="productHeader">
                <img alt='' src={ BlogImages.folderGif } width={600} />
                <div className='productHeaderText'>
                    <h2>Much to be uncovered from a box</h2>
                    <p>Curiousity will get you more interested.</p>
                    <p>Open up any that you find interesting and read more about it.</p>
                </div>
            </div>
        </div>
    );
}

export const BlogBody = () => {
    return(
        <div className="serch">
            <BlogMap blogs={ Blogs } />
            <div className="latest">
                <h2>Latest Serch Blogs</h2>
                <RecentBlog recent={ RecentBlogs }/>
            </div>
        </div>
    );
}

export const BlogEnd = () => {
    return (
        <div className="bloggerEnd">
            <SignupProvider />
            <SignupUser />
        </div>
    );
}