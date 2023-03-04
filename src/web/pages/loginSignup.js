import '../../config/colors/colors.css';
import { AppLinks} from "../../config/custom/links";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../../screens/css/login.css';
import styled from 'styled-components';
import VerifyEmailComponents from '../../emailverify/VerifyEmailComponents';
import { useState } from 'react';


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