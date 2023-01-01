import { Link } from "react-router-dom";
import { AppLinks, MainLinks } from "../../../config/custom/links";

export const SignUpLogIn = () => {
    return(
        <div className="content">
            <Link to={ MainLinks.information }>Learn More</Link>
            <Link to={ AppLinks.signupProvider }>Signup as a Provider</Link>
            <Link to={ AppLinks.loginProvider }>Login as a Provider</Link>
            <Link to={ AppLinks.loginUser }>Request Provider</Link>
        </div>
    );
}

export const Electrician = () => {
    return (
        <div className="electrician">
            <div className='contents'>
                <h2>Connect with electricians within your location. Get the services you want</h2>
                <SignUpLogIn />
            </div>
            <div className='background'></div>
        </div>
    );
}

export const Plumber = () => {
    return (
        <div className="plumber">
            <div className="contents">
                <h2>Connect with plumbers within your location. Get the services you want</h2>
                <SignUpLogIn />
            </div>
            <div className='background'></div>
        </div>
    );
}

export const PersonalShopper = () => {
    return (
        <div className="personalshopper">
            <div className="contents">
                <h2>Connect with personal shoppers within your location. Get the services you want</h2>
                <SignUpLogIn />
            </div>
            <div className='background'></div>
        </div>
    );
}

export const Mechanic = () => {
    return (
        <div className="mechanic">
            <div className="contents">
                <h2>Connect with mechanics/car repairs within your location. Get the services you want</h2>
                <SignUpLogIn />
            </div>
            <div className='background'></div>
        </div>
    );
}