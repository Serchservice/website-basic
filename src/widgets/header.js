import './css/header.css';
import { Link } from "react-router-dom";
import Images from '../config/images/images';
import { AppLinks, MainLinks } from '../config/custom/links';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
            </div>
            <div className="headerlinks">
                <Link to={ AppLinks.loginUser }>Login</Link>
                <Link to={ AppLinks.signupUser }>Signup</Link>
            </div>
        </header>
    );
}