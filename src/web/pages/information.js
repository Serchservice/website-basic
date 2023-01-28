import { Title } from "../../config/custom/titleheader";
import { CountryBody, CountryHeader } from "../../screens/information/countries/widgets";
import { PayHeader, PaymentFAQ, PayOptions,  PlanDemo, Pricing  } from "../../screens/information/payment/widgets";
import { SafetyGuidelineBody, SafetyGuidelineEnd, SafetyGuidelineHeader } from "../../screens/information/safety_guidelines/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const CountriesInSerch = () => {
    Title("Serch || Serch and Countries");
    return (
        <>
            <Header />
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
            <Header />
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
            <Header />
            <SafetyGuidelineHeader />
            <SafetyGuidelineBody />
            <SafetyGuidelineEnd />
            <Footer />
        </>
    );
}