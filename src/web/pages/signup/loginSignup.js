import '../../../config/colors/colors.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../../../screens/css/login.css';
import VerifyEmailComponents from '../../../component/emailverify/VerifyEmailComponents';
import SignUp from '../../../component/input/SignUp';
import SubscribeCard from '../../../component/suscribecard/SubscribeCard';
import ServiceCard from '../../../component/service/ServiceCard';
import { Button } from '../../../component/styled';
import { Link,  useNavigate } from "react-router-dom";
import { MainLinks } from '../../../config/custom/links';
import Images from '../../../config/images/images';
import HeaderSignup from './HeaderSignup';
import BasicInfo from './BasicInfo';
import SubscribeInfo from './SubscribeInfo';




export const PersonalInformation = () =>{
     return (
        <div>
        <HeaderSignup/>
        <SignUp/>
        
     </div>
    )
}

export const EmailVerify = () =>{

     return (
     <div >
          <HeaderSignup/>
          <VerifyEmailComponents/>
         
      </div>
     )
 }

 export const ServiceOption = () =>{
     return (
          <div className='service-option' style={{marginBottom:"1rem"}}>
                <HeaderSignup/>
                <ServiceCard/>
                                

          </div>
     )
 }
 export const BasicInformation = () =>{


     return(
           <div>
               <HeaderSignup/>
               <BasicInfo/>
                

          </div>
     )
 }

 export const Subscribe = () =>{
  
      
     return (
          <div>
            <HeaderSignup/>
            <SubscribeInfo/>
                
          </div>
     )
 }