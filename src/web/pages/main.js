import '../../screens/css/404.css';
import { Title } from "../../config/custom/titleheader";
import { Link } from 'react-router-dom';
import { Features, Plans, Services, Time } from "../../screens/home/features";
import { KeySupportBody, KeySupportEnd, KeySupportHead } from "../../screens/support/support/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { CompanyLinks, InformationLinks, MainLinks, ProductLinks } from '../../config/custom/links';

export const Home = () => {
    Title("Serch || Welcome");
    return (
        <>
            <Header />
            <Services />
            <Plans />
            <Time />
            <Features />
            <Footer />
        </>
    );
}

export const Support = () => {
    Title("Serch || Support");
    return (
        <>
            <Header />
            <KeySupportHead />
            <KeySupportBody />
            <KeySupportEnd />
            <Footer />
        </>
    );
}

export const NoPage = () => {
    Title("Serch || Expecting you back");
    return (
        <div style={{paddingBottom: "5rem"}}>
            <Header />
            <div className='pageerror_img'></div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{padding: "2rem"}}>
                    <h3 style={{fontSize: "2rem", color: "#030001"}}>Sorry, we couldn't find that page</h3>
                    <p style={{fontSize: "1.5rem", color: "#030001"}} >
                        We might have shifted the page you are looking for while we shifted a few things around.
                        Try re-entering the address or you can choose below.
                    </p>
                </div>
            </div>
            <div style={{padding: "0rem 2rem", width: "100%"}}>
                <Link to={ MainLinks.home } className="head">Head to Serchservice.com</Link>
                <Link to={ CompanyLinks.careers } className="head">Head to Serch Careers</Link>
                <Link to={ ProductLinks.business } className="head">Head to Serch for Business</Link>
                <Link to={ ProductLinks.request } className="head">Head to Serch Request</Link>
                <Link to={ InformationLinks.countries } className="head">See Countries in Serch</Link>
                <Link to={ MainLinks.helpAndSupport } className="head">Head to Serch Support</Link>
            </div>
        </div>
    );
}