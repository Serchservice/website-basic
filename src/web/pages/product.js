import { InformationLinks } from "../../config/custom/links";
import { Title } from "../../config/custom/titleheader";
import { BusinessBody, BusinessFooter, BusinessHeader } from "../../screens/products/business/widgets";
import { ProvideBody, ProvideEnd, ProvideHeader } from "../../screens/products/provide/widgets";
import { RequestBody } from "../../screens/products/request/body";
import { ProductSafety, RequestApp, RequestFAQ, RequestHeader } from "../../screens/products/request/widgets";
import { FAQBox } from "../../widgets/container/boxes";
import { Header, Footer } from "../../widgets/pageWidget";

export const Business = () => {
    Title("Serch || Business");
    return (
        <>
            <Header
                pagetitle={"Serch for Business"}
                pagedescription="Understand what Serch does for your business"
            />
            <BusinessHeader />
            <BusinessBody />
            <BusinessFooter />
            <Footer />
        </>
    );
}

export const Request = () => {
    Title("Serch || Request for Providers");
    return (
        <>
            <Header
                pagetitle={"Serch for Individual"}
                pagedescription="Understand what Serch does for you as a user"
            />
            <RequestHeader />
            <RequestBody />
            <ProductSafety />
            <RequestApp />
            <RequestFAQ />
            <Footer />
        </>
    );
}

export const Provide = () => {
    Title("Serch || Providers");

    const faq = [{
        question: "Can I become a provider in my city?",
        answer: "Defintely. We are dedicated to bringing Serch to the world entirely.",
        link: InformationLinks.countries,
        linkText: "However, check our countries in Serch list."
    },{
        question: "What are the requirements in becoming a provider?",
        answer: "You must have the skill you are signing up for, have a valid ID, be transportable and have a Serch plan",
        link: "/provider_requirements",
        linkText: "See other requirements."
    },{
        question: "Am I safe in Serch?",
        answer: `It is one of our tasks to protect both the user and the provider at all times. Our GPS tracking and other phone
        anonymization help us do all that.`,
        link: InformationLinks.safety,
        linkText: "Learn more about our safety tips"
    }]

    return (
        <>
            <Header
                pagetitle={"Serch for Providers"}
                pagedescription="Learn how to start making money with your providing skill"
            />
            <ProvideHeader />
            <ProvideBody />
            <ProvideEnd />
            <FAQBox
                data={faq}
                subHeader={"These are top questions which our providers ask."}
            />
            <Footer />
        </>
    );
}