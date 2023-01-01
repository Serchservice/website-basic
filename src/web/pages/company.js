import { Title } from "../../config/custom/titleheader";
import { AboutBody, AboutEnd, AboutHeader, Statement } from "../../screens/company/about/widgets";
import { BlogBody, BlogEnd, BlogHeader } from "../../screens/company/blog/widgets";
import {
    CareerFooter, CareerFromSerch, CareerHeader, CareerInnovation, CareerLife, CareerRoles
} from "../../screens/company/careers/widgets";
import { MarketplaceBody, MarketplaceFooter, MarketplaceHeader } from "../../screens/company/marketplace/widgets";
import { NewsroomBody, NewsroomFooter, NewsroomHeader } from "../../screens/company/newsroom/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const About = () => {
    Title("Serch || About Us");
    return (
        <div className="serch">
            <Header />
            <AboutHeader />
            <Statement />
            <AboutBody />
            <AboutEnd />
            <Footer />
    </div>
    );
}

export const Blog = () => {
    Title("Serch || Blogs");
    return (
        <div className="serch">
            <Header />
            <BlogHeader />
            <BlogBody />
            <BlogEnd />
            <Footer />
        </div>
    );
}

export const Newsroom = () => {
    Title("Serch || Newsroom");
    return (
        <div className="serch">
            <Header />
            <NewsroomHeader />
            <NewsroomBody />
            <NewsroomFooter />
            <Footer />
        </div>
    );
}

export const MarketPlace = () => {
    Title("Serch || Marketplace Platform");
    return(
        <div className='serch'>
            <Header />
            <MarketplaceHeader />
            <MarketplaceBody />
            <MarketplaceFooter />
            <Footer />
        </div>
    );
}

export const Career = () => {
    Title("Serch || Career");
    return (
        <div className='serch'>
            <Header />
            <CareerHeader />
            <CareerRoles />
            <CareerLife />
            <CareerFromSerch />
            <CareerInnovation />
            <CareerFooter />
            <Footer />
        </div>
    )
}