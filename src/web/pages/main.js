import '../../screens/css/404.css';
import { Title } from "../../config/custom/titleheader";
import { Link } from 'react-router-dom';
import { Features, Plans, Services, Time } from "../../screens/home/widgets/features";
import { KeySupportBody, KeySupportEnd, KeySupportHead } from "../../screens/key/support/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { CompanyLinks, InformationLinks, MainLinks, ProductLinks } from '../../config/custom/links';

export const Home = () => {
    Title("Serch || Welcome");
    return (
        <div className="serch">
            <Header />
            <Services />
            <Plans />
            <Time />
            <Features />
            <Footer />
        </div>
    );
}

export const Support = () => {
    Title("Serch || Support");
    return (
        <div className="serch">
            <Header />
            <KeySupportHead />
            <KeySupportBody />
            <KeySupportEnd />
            <Footer />
        </div>
    );
}

export const NoPage = () => {
    Title("Serch || Expecting you back");
    return (
        <div className='pageerror'>
            <Header />
            <div className='pageerror_img'></div>
            <div className='errorpage'>
                {/* <img alt="" src={ Image404.side } /> */}
                <div className='errortext'>
                    <h3>Sorry, we couldn't find that page</h3>
                    <p>
                        We might have shifted the page you are looking for while we shifted a few things around.
                        Try re-entering the address or you can choose below.
                    </p>
                </div>
            </div>
            <div className='redirectLinks'>
                <Link to={ MainLinks.home } className="head">Head to Serchservice.com</Link>
                <Link to={ CompanyLinks.careers } className="head">Head to Serch Careers</Link>
                <Link to={ ProductLinks.business } className="head">Head to Serch for Business</Link>
                <Link to={ InformationLinks.docs } className="head">Read our Documentation</Link>
                <Link to={ ProductLinks.request } className="head">Head to Serch Request</Link>
                <Link to={ InformationLinks.countries } className="head">See Countries in Serch</Link>
                <Link to={ MainLinks.helpAndSupport } className="head">Head to Serch Support</Link>
            </div>
        </div>
    );
}