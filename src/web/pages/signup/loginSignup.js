import '../../../config/colors/colors.css';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../../../screens/css/login.css';
import styled from 'styled-components';
import VerifyEmailComponents from '../../../emailverify/VerifyEmailComponents';
import electrician from '../../../assets/serviceoption/electrician.svg'
import mechanic from '../../../assets/serviceoption/mechanic.svg'
import plumber from '../../../assets/serviceoption/plumber.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';



export const PersonalInformation = () =>{
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
const [changeForm, setChangeForm] = useState(true);

function continueForm (){
     setChangeForm(false);
}



    return (
        <div>
        
        <div className=''>
             <div className='formheader'>
             <h2>Create your Serch account</h2>
             <p className='' style={{fontSize:"1.5rem", marginTop: "-20px"}}>Your personal details</p>
             </div>
 
             <div>
                 <form className='formboxsignup'>
                     <div className='forminnerbox'>
                          <label className="label">First Name</label>
                          <inputsignup className="inputsignup" type="email" placeholder="john"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Last Name</label>
                          <inputsignup className="inputsignup" type="email" placeholder="Doe"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Email Address</label>
                          <inputsignup className="inputsignup" type="email" placeholder="joe"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Phone Number</label>
                          <inputsignup className="inputsignup" type="email" placeholder="984 908 345"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Gender</label>
                          <inputsignup className="inputsignup" type="email" placeholder="joe"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Create Password</label>
                          <inputsignup className="inputsignup" type="email" placeholder="joe"/>
 
                     </div>
                     <div className='forminnerbox'>
                          <label className="label">Confirm Password</label>
                          <inputsignup className="inputsignup" type="email" placeholder="joe"/>
 
                     </div>
                       <div className='continue'>
                              <Button onclick={continueForm}>Continue</Button>
                       </div>
 
 
                 </form>
             </div>
 
        </div>
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

            <div className='service-wrapper'>
            <div className='service-item-1'>
               <img src={electrician} alt="electrician"/>
               <p style={{fontSize:"2.25rem"}}>Electrician</p>
               <p style={{fontSize:"1.4rem"}}>Enjoy more jobs on the go with your electrical skills</p>
             </div>
             <div className='service-item-2'>
               <img src={plumber} alt="plumber"/>
               <p style={{fontSize:"2.25rem"}}>Plumber</p>
               <p style={{fontSize:"1.4rem"}}>Enjoy 2 more jobs on the go with your plumbering skills</p>
             </div>
             <div className='service-item-3'>
               <img src={mechanic} alt="mechanic"/>
               <p style={{fontSize:"2.25rem"}}>Mechanic</p>
               <p style={{fontSize:"1.4rem"}}>Enjoy 3more jobs on the go with your mechanic skills</p>
             </div>
            </div>

            <div className='continue'>
                <Link>
                   <button >Continue</button>
                </Link>
           </div>


          </div>
     )
 }
 export const BasicInformation = () =>{
     return(
          <div>
               Basic info
          </div>
     )
 }