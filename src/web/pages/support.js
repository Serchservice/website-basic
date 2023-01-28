import { Title } from "../../config/custom/titleheader";
import { LegalBody } from "../../screens/support/legalHub/widgets";
import { SupportBody, SupportEnd } from "../../screens/support/supportHub/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

export const LegalHub = () => {
    Title("Serch || Legal Hub");
    return (
        <>
            <Header />
            <LegalBody />
            <Footer />
        </>
    );
}

export const SupportHub = () => {
    Title("Serch || Support Hub");
    return (
        <>
            <Header />
            <SupportBody />
            <SupportEnd />
            <Footer />
        </>
    );
}