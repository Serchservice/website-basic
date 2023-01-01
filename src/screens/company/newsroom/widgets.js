import { NewsroomImages } from "../../../config/images/companyImages";
import { KeyImages } from "../../../config/images/key";
import { NewsMaker, LatestNewsMaker } from "../../../widgets/container/blogNews";
import { News, NewsRecent } from "./newsData";

export const RecentNews = ({recent}) => {
    return(
        <div className="serch">
            {recent.map((news, index) => <LatestNewsMaker data={news} key={index} />)}
        </div>
    );
}

export const NewsMap = ({news}) => {
    return(
        <div className="posts">
            {news.map((news, index) => <NewsMaker data={news} key={index} />)}
        </div>
    );
}

export const NewsroomHeader = () => {
    return (
        <div className="productHeader">
            <div className='productHeaderText'>
                <h2>News on the go</h2>
                <p>Whether you are walking, running or doing anything, stay updated with happenings in Serch.</p>
                <p>We bring it all here so that no one is left behind.</p>
            </div>
            <img alt='' src={ NewsroomImages.header } width={600} />
        </div>
    );
}

export const NewsroomFooter = () => {
    return (
        <div className="end">
            <div className='helpEnd'>
                <h2>Want to stay ahead of others and recieve information about us firsthand?</h2>
                <div className="endSection">
                    <img alt='' src={ KeyImages.serch } width={400} />
                    <div className="emailUs">
                        <h3>Subscribe to our newsletter and get notified.</h3>
                        <form className="emailBox">
                            <input type="Text" placeholder="Name" className="emailInput"/>
                            <input type="mail" placeholder="Email" className="emailInput"/>
                            <button> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const NewsroomBody = () => {
    return (
        <div className="serch">
            <NewsMap news={ News } />
            <div className="latest">
                <h2>Latest Serch News</h2>
                <RecentNews recent={ NewsRecent } />
            </div>
        </div>
    );
}