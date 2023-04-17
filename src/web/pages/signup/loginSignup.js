import '../../../config/colors/colors.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../../../screens/css/login.css';
import styled from 'styled-components';
import VerifyEmailComponents from '../../../component/emailverify/VerifyEmailComponents';
import { useState } from 'react';
import Input from '../../../component/input/Input';
import SignUp from '../../../component/input/SignUp';
import SubscribeCard from '../../../component/suscribecard/SubscribeCard';
import { CardContainer } from '../../../component/suscribecard/Card.style';
import ServiceCard from '../../../component/service/ServiceCard';
import { Button } from '../../../component/button';
import { Link,  useNavigate } from "react-router-dom";




export const PersonalInformation = () =>{
     return (
        <div>
        <SignUp/>
        
     </div>
    )
}

export const EmailVerify = () =>{

     return (
     <div >
          <VerifyEmailComponents/>
         
      </div>
     )
 }

 export const ServiceOption = () =>{
     return (
          <div className='service-option' style={{marginBottom:"1rem"}}>
               <div className='formheader'>
                    <h2>Select the service you choose  to offer </h2>
                    <p className='' style={{fontSize:"1.5rem", marginTop: "-20px"}}>Pick the field of service you do</p>
             </div>

           <ServiceCard/>
                                

          </div>
     )
 }
 export const BasicInformation = () =>{

     const history = useNavigate();

  const handleSignUp = (e)=> {
    e.preventDefault();
    history('/SignUpProvider/subscribe');
  };
     return(
           <div>
                <div className='even-column create-accountbasic-information  formboxsignup' style={{marginBottom:"1rem"}}>
        <h1>You are almost done! Let’s cross together</h1>
        <p className="subtitle">Basic Information</p>

        <form onSubmit={handleSignUp}>
        <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
          <Input style={{width:"50%"}} label="Street Number *" placeholder="14" id="streetnumber" name="streetnumber" />
          <Input label="Street Name " placeholder="Oshodi" id="streetname" required/>
        </div>
          <Input label="LGA(Optional)" placeholder="ifo" id="lga" />

          <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
          <Input style={{width:"50%"}} label="State of Origin *" placeholder="Oyo" id="stateoforigin" name="stateoforigin" />
          <Input label="Residential Country " placeholder="Oshodi" id="residential" name="residential"  required />
         </div>
          <p className='' style={{fontSize:"1.3rem", color:"black"}}>Email Address and Phone Number</p>
          <Input label="Email Address" placehLolder="alternative@gmail.com" id="emailaddress" />
          <Input label="Alternative Email" placeholder="johndoe@gmail.com" id="lga" />
          <Input label="Phone Number" placeholder="+234 434 567 890" id="phonenumber" />


          <div className="continue">
              <Button >Finish</Button>
          </div>
          </form>
          </div>

          </div>
     )
 }

 export const Subscribe = () =>{
  
      const history = useNavigate();

      const handleSignUp = (e)=> {
        e.preventDefault();
        history('/profile');
      };
     return (
          <div>
                <div className='Subcribe  formboxsignup' style={{marginBottom:"2rem"}}>
                   <form onSubmit ={handleSignUp}>
                         <h2>Best plans, best offers </h2>
                         <p className='' style={{fontSize:"1.5rem", marginTop: "-20px"}}>We have curated a list of plans suitable for you at
any time.</p>
                         <p className="before-subscribe">NOTE: Before subscribing to a plan or activating your free plan, it is important to check if Serch has launched in your city, state or country.
If you want to be sure, click here to know more</p>
                  
                    
                  <div className='suscriber-card-wrapper'>

                  <SubscribeCard  variant ="outline"
                   freetrial="free-trial"
                   subscribeName="Free Trial"
                   item1="Profile check"
                   item2="Tip2fix"
                   item3= "RequestShare"
                   item4="SWM security"
                   item5="Service schedulling"
                   fees="No fees, no charge"
                   trials="14 days trial"
                   />
                    <SubscribeCard 
                   freetrial="trial"
                   subscribeName="All-trial"
                   item1="Profile check"
                   item2="Tip2fix"
                   item3= "RequestShare"
                   item4="SWM security"
                   item5="Service schedulling"
                   fees="No fees, no charge"
                   trials="14 days trial"
                   />
                     <SubscribeCard 
                   freetrial="trial"
                   subscribeName="All-trial"
                   item1="Profile check"
                   item2="Tip2fix"
                   item3= "RequestShare"
                   item4="SWM security"
                   item5="Service schedulling"
                   fees="No fees, no charge"
                   trials="14 days trial"
                   />
                  
                   </div>

                   <div  className='continue'>
                               
                         <Button>Continue</Button>
                    </div>

                    </form>

               </div>

          </div>
     )
 }