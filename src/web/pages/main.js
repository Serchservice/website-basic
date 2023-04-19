import '../../screens/css/404.css';
import '../../widgets/css/header.css';
import '../../screens/css/login.css';
import { Title } from "../../config/custom/titleheader";
import { Link } from 'react-router-dom';
import { LoginProvider, SignupProvider } from './login';
import { Features, Plans, Services, Time } from "../../screens/home/widgets/features";
import { KeySupportBody, KeySupportEnd, KeySupportHead } from "../../screens/key/support/widgets";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { CompanyLinks, InformationLinks, MainLinks, ProductLinks } from '../../config/custom/links';
import Images from '../../config/images/images';
import Profile from './profilepage/Profile';
import HeaderSignup from './signup/HeaderSignup';
import ProfileIcons from './profilepage/ProfileIcons';
// import SignUpProvider from './signup/SignUpProvider';


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
export const Login = () => {
    Title("Serch || Login Provider");
    return (
        <div className="serch">
            <header className="headerlogin">
                <div className="logo">
                    <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
                </div>
                <div className="" >
                    <p className='servicemadeeasy'>service made easy</p>
                </div>
             </header>
            <LoginProvider/>
           
        </div>
    );
}

export const SignUp = ()=>{
    Title("Serch || SignUp Provider");
    return (
     <div>
      
            <SignupProvider/>
           

     </div>
    );
}
export const ProfileHome = ()=>{
    Title("Serch || Profile Home");
    return(
       
            <div className="profileHome">
                <HeaderSignup/>
                <Profile/>
                <div className='nav_icon'style={{width: "100%"}}>
                    <ProfileIcons column/>
                </div>
            </div>
        
    )
    
};


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