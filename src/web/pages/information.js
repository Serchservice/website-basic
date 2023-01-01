import { Title } from "../../config/custom/titleheader";
import CountryHeader from "../../screens/information/countries/countryHeader";
import NigeriaStates from "../../screens/information/countries/nigeriaStates";
import DocBody from "../../screens/information/documentation/blogBody/docBody";
import { PayHeader, PaymentFAQ, PayOptions,  PlanDemo, PlanHeader, Pricing  } from "../../screens/information/payment/widgets";
import { SafetyGuidelineBody, SafetyGuidelineEnd, SafetyGuidelineHeader } from "../../screens/information/safety_guidelines/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const CountriesInSerch = () => {
    Title("Serch || Serch and Countries");
    return (
        <div className="serch">
            <Header />
            <CountryHeader />
            <NigeriaStates />
            <Footer />
        </div>
    );
}

export const Documentation = () => {
    Title("Serch || Documentation");
    return (
        <div className="serch">
            <Header />
            <DocBody />
            <Footer />
        </div>
    );
}

export const PricingAndPayment = () => {
    Title("Serch || Payment Methods ");
    return (
        <div className="serch">
            <Header />
            <PayHeader />
            <PlanHeader />
            <Pricing />
            <PlanDemo />
            <PayOptions />
            <PaymentFAQ />
            <Footer />
        </div>
    );
}

export const SafetyGuideline = () => {
    Title("Serch || Safety Guidelines ");
    return (
        <div className="serch">
            <Header />
            <SafetyGuidelineHeader />
            <SafetyGuidelineBody />
            <SafetyGuidelineEnd />
            <Footer />
        </div>
    );
}