import './css/footer.css';
import { Link } from "react-router-dom";
import Images from '../config/images/images';
import {
    AppLinks, CompanyLinks, InformationLinks, LegalLinks,
    MainLinks, ProductLinks, SocialLinks, SupportLinks
} from '../config/custom/links';
import { Emails } from '../config/custom/emails';

export const Footer = () => {
    var getTime = new Date().getHours;
    var getGreeting = () => {
        if(getTime < 12) {
            return "It's a new day. Let's make the most of it.";
        } else if(getTime === 12 && getTime < 18) {
            return "The day is not over. We can always start now.";
        }else if (getTime <= 21) {
            return "It's not over until you say it's over. Go all in now!";
        }else {
            return "Rest is as always important as your life is.";
        }
    }
    return (
        <footer className="footer">
            <div className="logo">
                <div className="greeting">
                    <h3  style={{color:"white"}}>{`${getGreeting()}`}</h3>
                </div>
                <Link to={ MainLinks.home }><img alt='' src={ Images.serchLogoName } /></Link>
            </div>
           
            <div className='footerlist'>
                <div className='company'>
                    <h2>Company</h2>
                    <Link to={ CompanyLinks.about } className="pageLink">About Us</Link>
                    <Link to={ CompanyLinks.blog } className="pageLink">Blog</Link>
                    <Link to={ CompanyLinks.newsroom } className="pageLink">Newsroom</Link>
                    <Link to={ CompanyLinks.marketplace } className="pageLink">Marketplace </Link>
                    <Link to={ CompanyLinks.careers } className="pageLink">Careers</Link>
                </div>
                <div className='product'>
                    <h2>Product</h2>
                    <Link to={ ProductLinks.business } className="pageLink">Serch for Business</Link>
                    <Link to={ ProductLinks.request } className="pageLink">Request</Link>
                    <Link to={ ProductLinks.provide } className="pageLink">Provide</Link>
                </div>
                <div className='pricing'>
                    <h2>Information</h2>
                    <Link to={ InformationLinks.docs } className="pageLink">Documentation</Link>
                    <Link to={ InformationLinks.safety } className="pageLink">Safety guidelines</Link>
                    <Link to={ InformationLinks.payment } className="pageLink">Pricing &  Payment Methods</Link>
                    <Link to={ InformationLinks.countries } className="pageLink">Countries in Serch</Link>
                </div>
                <div className='support'>
                    <h2>Help and Support</h2>
                    <Link to={ SupportLinks.legal } className="pageLink">Legal Hub</Link>
                    <a href={ SupportLinks.help } className="pageLink">Help Hub</a>
                    <Link to={ SupportLinks.support } className="pageLink">Support Hub</Link>
                    <a href={ Emails.improve } className="pageLink">Improve our services</a>
                    <a href={ Emails.report } className="pageLink">Report a broken feature</a>
                </div>
            </div>
            <div className='footerlinks'>
                <div className='app'>
                    <a href={AppLinks.playStore}><img alt='' src={ Images.playStore } /> </a>
                    <a href={AppLinks.appleStore}><img alt='' src={ Images.appleStore } /> </a>
                </div>
                <div className='socialmedia'>
                    <a href={ SocialLinks.twitter }><img alt='' src={ Images.twitter } /> </a>
                    <a href={ SocialLinks.facebook }><img alt='' src={ Images.facebook } /> </a>
                    <a href={ Emails.help }><img alt='' src={ Images.gmail } /> </a>
                    <a href={ SocialLinks.instagram }><img alt='' src={ Images.instagram } /> </a>
                    <a href={ SocialLinks.linkedIn }><img alt='' src={ Images.linkedIn } /> </a>
                </div>
            </div>
            <div className='footerbottom'>
                <div className='policy'>
                    <Link to={ LegalLinks.privacyPolicy } className="pageLink">Privacy </Link>
                    <Link to={ LegalLinks.termsAndConditions } className="pageLink">Terms</Link>
                    <Link to={ LegalLinks.accessibility } className="pageLink">Accessibility</Link>
                </div>
                <div className='bottom'>
                    <p>2022 Serch Inc. Tech.</p>
                </div>
            </div>
        </footer>
    );
}