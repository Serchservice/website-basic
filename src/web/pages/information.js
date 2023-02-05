import { Title } from "../../config/custom/titleheader";
import { CountryBody, CountryHeader } from "../../screens/information/countries/widgets";
import { PayHeader, PaymentFAQ, PayOptions,  PlanDemo, Pricing  } from "../../screens/information/payment/widgets";
import { SafetyGuidelineBody, SafetyGuidelineEnd, SafetyGuidelineHeader } from "../../screens/information/safety_guidelines/widgets";
import { Header, Footer } from "../../widgets/pageWidget";

export const CountriesInSerch = () => {
    Title("Serch || Serch and Countries");
    return (
        <>
            <Header
                pagetitle={"Serch and Countries"}
                pagedescription="See countries Serch is operating in"
            />
            <CountryHeader />
            <CountryBody />
            <Footer />
        </>
    );
}

export const PricingAndPayment = () => {
    Title("Serch || Payment Methods ");
    return (
        <>
            <Header
                pagetitle={"Serch Payment Methods"}
                pagedescription="Know the different payment methods"
            />
            <PayHeader />
            <Pricing />
            <PlanDemo />
            <PayOptions />
            <PaymentFAQ />
            <Footer />
        </>
    );
}

export const SafetyGuideline = () => {
    Title("Serch || Safety Guidelines ");
    return (
        <>
            <Header
                pagetitle="Serch Safety Guidelines"
                pagedescription="Get the safety tips you need for a wonderful experience"
            />
            <SafetyGuidelineHeader />
            <SafetyGuidelineBody />
            <SafetyGuidelineEnd />
            <Footer />
        </>
    );
}