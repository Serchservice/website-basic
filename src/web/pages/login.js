import styled from 'styled-components';
import '../../config/colors/colors.css';
import '../../css/index.css';
import { AppLinks, MainLinks} from "../../config/custom/links";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { BasicInformation, EmailVerify,  PersonalInformation, ServiceOption } from './signup/loginSignup';
import '../../screens/css/login.css';
import Images from '../../config/images/images';
import Input from '../../component/input/Input';
// import SignUpProvider from './signup/SignUpProvider';



export const LoginProvider = () => {
    const Button = styled.button`
    padding: 1rem 3rem;
  position: relative;
  margin-top: 1rem;
  font-size: 14px;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--serch-white-bg);
  transition: all .5s;
  background-color: #3F0F36;
`;
const Button2 = styled.button`
padding: 1rem 3rem;
position: relative;
margin-top: 1rem;
font-size: 14px;
border-radius: 0.5rem;
font-weight: 600;
cursor: pointer;
color: var(--serch-white-bg);
transition: all .5s;
background-color: #3F0F36;
`;
const handleSignUp = e => {
    e.preventDefault();
};
    return (
       <div className="serchlogin">
                 <div className="login">
                    <div>
                    <h1 className="greeting">Hi there! </h1>
                    <p className='' style={{marginTop:"-20px"}}>Good to have you back</p>
                    </div>
                    <form onSubmit={handleSignUp}>
                          
                            <Input label="Email Address" placehLolder="alternative@gmail.com" id="emailaddress" />
                            <Input label="Password" password type="password" placeholder="Create your strong password" id="password"/>
          
                              <div style={{display: 'flex', justifyContent:"space-between", fontSize:"1.5rem"}}>
                            <div style={{display:"flex"}}>
                               <div>
                                <inputsignup type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                               </div>
                               <div>
                               Remember me
                               </div>
                            </div>
                            <div className='forgotpassword'>
                                Forgot password?
                            </div>
                         </div>

                         
                         <div style={{display: 'flex', justifyContent:"space-between", alignItems: "center"}}>
                            <div style={{display: 'flex', alignItems:"center", gap:"20px"}}>
                                <div className='newaccount' style={{fontSize:"1.75rem"}}>
                                    New user ?
                                </div>
                                <div >
                                    <Link className='createaccount' style={{fontSize:"1.5rem"}}
                                     to={ AppLinks.signupProvider }>Create Account</Link>
                                </div>
                            </div>
                            <div>
                                <Button>Login</Button>
                                        
                            </div>
                         </div>
                    </form>
                        

                       
                       
                    </div>
       
       </div>
    );
}

export const SignupProvider = () => {
    

return (
    <div>
       <div className='container'>
    <div className='black'>
        <header className="header">
            <div className="logo">
                <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
            </div>
            {/* <div className="headerlinks">
                <Link to={ AppLinks.loginUser }>Login</Link>
                <Link to={ AppLinks.signupUser }>Signup</Link>
            </div> */}
        </header>
          {/* <div className='ui-wrapper'>
            
            <div>
                bar here
            </div>
            <div>
            <p className='provider-title'>Your personal details</p>
            <p className='provide-subtitle'>Please provide us with your and other information</p>
            </div>
          </div> */}

         <div className="wrapper">
            <ol className="c-stepper">
                <li className="c-stepper__item">

                <div className="c-stepper__content">
                    <h3 className="c-stepper__title">Your personal details</h3>
                    <p className="c-stepper__desc" style={{lineHeight: "1.0;"}}>Please provide us with your and other information.</p>
                </div>
                </li>
                <li className="c-stepper__item">

                <div className="c-stepper__content">
                    <h3 className="c-stepper__title">Verify Email Address</h3>
                    <p className="c-stepper__desc" style={{lineHeight: "1.0rem;"}}>We will send you a verification link and OTP for you to verify the email address you provide to Serch.</p>
                </div>
                </li>
                <li className="c-stepper__item">

                <div className="c-stepper__content">
                    <h3 className="c-stepper__title">Pick a service </h3>
                    <p className="c-stepper__desc" style={{lineHeight: "1;"}}>Please use this list of jobs below to help you begin the prcess</p>
                </div>
                </li>
                <li className="c-stepper__item">

                <div className="c-stepper__content">
                    <h3 className="c-stepper__title">Basic Information </h3>
                    <p className="c-stepper__desc">In relation to your personal data provide info</p>
                </div>
                </li>
                <li className="c-stepper__item">

                <div className="c-stepper__content">
                    <h3 className="c-stepper__title">Subscribe to enjoy </h3>
                    <p className="c-stepper__desc">Select a plan that befits what you want and what you hope to get from Serch.</p>
                </div>
                </li>
            </ol>
            </div>


      </div>

        <div className='white'>
           <Outlet/>
        </div>
</div>
{/* // <LoginPage2/>  <PersonalInformation/> <ServiceOption/> */}

{/* //put condition say after login1 is successful show login2 */}
    </div>
)
}