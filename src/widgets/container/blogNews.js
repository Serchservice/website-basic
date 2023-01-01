import { AppLinks } from '../../config/custom/links';
import './blogger.css';
import './latest.css';

export const Blogger = ({ data:{id, link, imgAlt, img, dept, topic, date} }) => {
    return(
        <a className="bloggerCover" href={ `/company/blogs/blog/${id}` }>
            <img alt={ imgAlt } src={ img } className="bloggerImage" />
            <div className="bloggerHeader">
                <p className='bloggerDept'> { dept } </p>
                <h2 className='bloggerTopic'> { topic } </h2>
                <p className='bloggerDate'> { date } </p>
            </div>
        </a>
    );
}

export const NewsMaker = ({ data:{id, link, imgAlt, img, dept, topic, date} }) => {
    return(
        <a className="bloggerCover" href={ `/company/newsroom/news/${id}` }>
            <img alt={ imgAlt } src={ img } className="bloggerImage" />
            <div className="bloggerHeader">
                <p className='bloggerDept'> { dept } </p>
                <h2 className='bloggerTopic'> { topic } </h2>
                <p className='bloggerDate'> { date } </p>
            </div>
        </a>
    );
}

export const LatestBlogger = ({ data:{ id, imgAlt, image, topic, section, date, newsLink } }) => {
    return(
        <a className="latestNews" href={`/company/blogs/blog/${id}`}>
            <img alt={imgAlt} src={ image } className="latestImg"/>
            <div className="latestContent">
                <p> {section} </p>
                <h3> {topic} </h3>
                <p> {date} </p>
            </div>
        </a>
    );
}

export const LatestNewsMaker = ({ data:{ id, imgAlt, image, topic, section, date, newsLink } }) => {
    return(
        <a className="latestNews" href={`/company/newsroom/news/${id}`}>
            <img alt={imgAlt} src={ image } className="latestImg"/>
            <div className="latestContent">
                <p> {section} </p>
                <h3> {topic} </h3>
                <p> {date} </p>
            </div>
        </a>
    );
}

export const SignupProvider = () => {
    return(
        <div className='signupProvider'>
            <p>Earn extra money providing the service you know how to</p>
            <div className='boxLink'>
                <a href={ AppLinks.providerPlayStore }>Download the provider app for android</a>
                <a href={ AppLinks.providerAppleStore }>Download the provider app for iOS</a>
            </div>
        </div>
    );
}

export const SignupUser = () => {
    return(
        <div className='signupUser'>
            <p>Get the services you need across the world.</p>
            <div className='boxLink'>
                <a href={ AppLinks.playStore }>Download the user app for android</a>
                <a href={ AppLinks.appleStore }>Download the user app for iOS</a>
            </div>
        </div>
    );
}