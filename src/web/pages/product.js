import { InformationLinks } from "../../config/custom/links";
import { Title } from "../../config/custom/titleheader";
import { BusinessBody, BusinessFooter, BusinessHeader } from "../../screens/products/business/widgets";
import { ProvideBody, ProvideEnd, ProvideHeader } from "../../screens/products/provide/widgets";
import { RequestBody } from "../../screens/products/request/body";
import { ProductSafety, RequestApp, RequestFAQ, RequestHeader } from "../../screens/products/request/widgets";
import FAQAllLinks from "../../widgets/faq/faqAllLinks";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const Business = () => {
    Title("Serch || Business");
    return (
        <div className="serch">
            <Header />
            <BusinessHeader />
            <BusinessBody />
            <BusinessFooter />
            <Footer />
        </div>
    );
}

export const Request = () => {
    Title("Serch || Request for Providers");
    return (
        <div className="serch">
            <Header />
            <RequestHeader />
            <RequestBody />
            <ProductSafety />
            <RequestApp />
            <RequestFAQ />
            <Footer />
        </div>
    );
}

export const Provide = () => {
    Title("Serch || Providers");
    return (
        <div className="serch">
            <Header />
            <ProvideHeader />
            <ProvideBody />
            <ProvideEnd />
            <FAQAllLinks
                header="Frequently Asked Questions"
                subHeader="These are top questions which our providers ask."
                faqTwoQuestion={"What are the requirements to become a provider?"}
                faqTwoAnswer= "You must have the skill you are signing up for, have a valid ID and transportable."
                linkTwo={"/provider_requirements"}
                linkTwoText="See other requirements."
                faqOneQuestion={"Can I become a provider in my city?"}
                faqOneAnswer={"Defintely. We are dedicated to bringing Serch to the world entirely."}
                linkOne={ InformationLinks.countries }
                linkOneText="However, check our countries in Serch list."
                faqThreeQuestion={"Am I safe in Serch?"}
                faqThreeAnswer="It is one of our tasks to protect both the user and the provider at all times. Our GPS tracking and other phone anonymization help us do all that."
                linkThree={ InformationLinks.safety }
                linkThreeText={"Learn more about our safety tips"}
            />
            <Footer />
        </div>
    );
}