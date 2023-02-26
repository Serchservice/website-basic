import { LegalBody } from "../../screens/support/legalHub/widgets";
import { SupportBody, SupportEnd } from "../../screens/support/supportHub/widgets";
import { Header, Footer, Title } from "../../widgets/pageWidget";

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