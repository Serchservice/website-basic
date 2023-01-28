import { Title } from "../../config/custom/titleheader";
import { AboutBody, AboutHeader, Statement } from "../../screens/company/about/widgets";
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
        <>
            <Header />
            <AboutHeader />
            <Statement />
            <AboutBody />
            <Footer />
    </>
    );
}

export const Blog = () => {
    Title("Serch || Blogs");
    return (
        <>
            <Header />
            <BlogHeader />
            <BlogBody />
            <BlogEnd />
            <Footer />
        </>
    );
}

export const Newsroom = () => {
    Title("Serch || Newsroom");
    return (
        <>
            <Header />
            <NewsroomHeader />
            <NewsroomBody />
            <NewsroomFooter />
            <Footer />
        </>
    );
}

export const MarketPlace = () => {
    Title("Serch || Marketplace Platform");
    return(
        <>
            <Header />
            <MarketplaceHeader />
            <MarketplaceBody />
            <MarketplaceFooter />
            <Footer />
        </>
    );
}

export const Career = () => {
    Title("Serch || Career");
    return (
        <>
            <Header />
            <CareerHeader />
            <CareerRoles />
            <CareerLife />
            <CareerFromSerch />
            <CareerInnovation />
            <CareerFooter />
            <Footer />
        </>
    )
}