import { Title } from "../../config/custom/titleheader";
import { AboutBody, AboutHeader, Statement } from "../../screens/company/about/widgets";
import { BlogBody, BlogEnd, BlogHeader } from "../../screens/company/blog/widgets";
import {
    CareerFooter, CareerFromSerch, CareerHeader, CareerInnovation, CareerLife, CareerRoles
} from "../../screens/company/careers/widgets";
import { MarketplaceBody, MarketplaceFooter, MarketplaceHeader } from "../../screens/company/marketplace/widgets";
import { NewsroomBody, NewsroomFooter, NewsroomHeader } from "../../screens/company/newsroom/widgets";
import { Header, Footer } from "../../widgets/pageWidget";

export const About = () => {
    Title("Serch || About Us");
    return (
        <>
            <Header
                pagetitle={"About Serch"}
                pagedescription="Information about Serch as a company"
            />
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
            <Header
                pagetitle={"Serch BlogHub"}
                pagedescription="Where the fun is documented!"
            />
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
            <Header
                pagetitle={"Serch Newsroom"}
                pagedescription="Update on Serch happenings, stay here"
            />
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
            <Header
                pagetitle={"Serch MarketPlace"}
                pagedescription="Understand and shop all Serch products"
            />
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
            <Header
                pagetitle={"Careers in Serch"}
                pagedescription="Find out what Serch needs to grow more"
            />
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