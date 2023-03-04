import styled from 'styled-components';
import '../../config/colors/colors.css';
import { AppLinks} from "../../config/custom/links";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { EmailVerify,  PersonalInformation } from './loginSignup';
import '../../screens/css/login.css';



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

    return (
       <div className="serchlogin">
                 <div className="login">
                    <div>
                    <h1 className="greeting">Hi there! </h1>
                    <p className='' style={{marginTop:"-20px"}}>Good to have you back</p>
                    </div>
                    <div className="formcontainer">
                        <form className="formbox">
                         <label className="label">Email Address</label>
                         <inputsignup className="inputsignup" type="email" placeholder="joe@email.com"/>

                         <label className="label">Password</label>
                         <inputsignup className="inputsignup" type="password" placeholder="***********"/>

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
       </div>
    );
}

export const SignupProvider = ({changeForm}) => {
    

return (
    <div className=''>
        <div className='container'>
          <div className='black'>
              <div className='ui-wrapper'>
                
                <div>
                    bar here
                </div>
                <div>
                <p className='provider-title'>Your personal details</p>
                <p className='provide-subtitle'>Please provide us with your and other information</p>
                </div>
              </div>
              <div className='ui-wrapper'>
                
                <div>
                    bar here
                </div>
                <div>
                <p className='provider-title'>Verify your Email Address</p>
                <p className='provide-subtitle'> We will send you a verification link and OTP for you to verify the email address you provided to Serch</p>
                </div>
              </div>
              <div className='ui-wrapper'>
                
                <div>
                    bar here
                </div>
                <div>
                <p className='provider-title'>Pick a service</p>
                <p className='provide-subtitle' >Please use this list of jobs below to help you begin the process</p>
                </div>
              </div>
              <div className='ui-wrapper'>
                
                <div>
                    bar here
                </div>
                <div>
                <p className='provider-title'>Basic Information</p>
                <p className='provide-subtitle' >In relation to your personal infprmation</p>
                </div>
              </div>
              <div className='ui-wrapper'>
                
                <div>
                    bar here
                </div>
                <div>
                <p className='provider-title'>Subscribe to enjoy</p>
                <p className='provide-subtitle'>Please select a plan that befits what you hope to get from Serch</p>
                </div>
              </div>
  
          </div>
    
            <div className='white'>
            {changeForm ?  <EmailVerify/> :<PersonalInformation/> }
            </div>
        </div>
    </div>
    // <LoginPage2/>

    //put condition say after login1 is successful show login2
)
}