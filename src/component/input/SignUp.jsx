import Input from "./Input";
import '../../screens/css/login.css'
// import Outline from "./Outline";
import PhoneInputField from "./PhoneInput";
import { Link } from "react-router-dom";
import { Button } from "../styled";
import { useNavigate } from 'react-router-dom';
import '../../screens/css/responsivelogin.css';
import { useState } from "react";

function SignUp() {
  const history = useNavigate();

  const handleSignUp = (e)=> {
    e.preventDefault();
    history('/SignUpProvider/emailverify');
  };
  return (
    <div >
      {/* <Outline /> */}
      <div className="even-column create-account formboxsignup">
        <h1>Create your Serch Account</h1>
        <p className="subtitle"style={{marginTop:"-20px"}}>Your personal details</p>

        <form onSubmit={handleSignUp}>
          <Input label="First Name" placeholder="John" id="firstName" />
          <Input label="Last Name" placeholder="Doe" id="lastName" />
          <Input label="Email Address" placeholder="johndoe@gmail.com" id="email" type="email" />

          
          <PhoneInputField />
          
         
          <Input label="Gender" gender placeholder="Select your gender" id="gender" />
          <Input
            label="Create password"
            password
            type="password"
            placeholder="Create your strong password"
            id="password"
          />
          <Input
            label="Confirm Password"
            password
            type="password"
            placeholder="Confirm your strong password"
            id="confirmPassword"
          />
       
           <div className="continue">
              <Button >Finish</Button>
          </div>
            
          
        </form>
      </div>
    </div>
  );
}

export default SignUp;
