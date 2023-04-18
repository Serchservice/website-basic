
import '../../config/colors/colors.css';
import { AppLinks, MainLinks} from "../../config/custom/links";
import { Link, Outlet } from "react-router-dom";
import '../../screens/css/login.css';
import Images from '../../config/images/images';
import Input from '../../component/input/Input';
import Stepper from '../../component/stepper/StepList';
import { Button } from '../../component/styled';
import "../../screens/css/responsivelogin.css";

export const LoginProvider = () => {
    
const handleSignUp = e => {
    e.preventDefault();
};
    return (
       <div className="serchlogin">
                 <div className="login">
                   
                    <h1 >Hi there! </h1>
                    <p style={{marginTop:"-20px"}}>Good to have you back</p>
                    
                    <form className='login_form' onSubmit={handleSignUp}>
                          
                            <Input label="Email Address" placehLolder="alternative@gmail.com" id="emailaddress" />
                            <Input label="Password" password type="password" placeholder="Create your strong password" id="password"/>
          
                              <div style={{display: 'flex', justifyContent:"space-between", fontSize:"1.5rem"}}>
                            <div style={{display:"flex"}}>
                               <div>
                                <inputsignup type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                               </div>
                               <div className='remember'>
                               <input  type='checkbox' id="" />
                               Remember me
                               </div>
                            </div>
                            <div className='forgotpassword'>
                                Forgot password?
                            </div>
                         </div>

                         
                         <div style={{display: 'flex', justifyContent:"space-between", alignItems: "center", flexWrap:"nowrap"}}>
                            <div className='account'>
                                <div className='newaccount' >
                                    New user ?
                                </div>
                                <div >
                                    <Link className='createaccount'
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
        
         
           <div>

           <Stepper/>
            
           </div>
            
           <div className='footer-stepper'>
                <div className='alternative-login'>
                        <h2 >Already have an account?</h2>
                        <Link to="/LoginProvider">
                            <h2 className='login-alt'>Log me in</h2>
                        </Link>
                    </div>

                    <div className='footer-title'>
                        <p>Private Policy </p>
                        <p>Accessibility Policy </p>
                        <p>Terms and Conditions</p>
                    </div>
           </div>



      </div>

        <div className='white'>
           <Outlet/>
        </div>
</div>

    </div>
)
}