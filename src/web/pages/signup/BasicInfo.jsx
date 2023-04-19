import React from 'react';
import { Link,  useNavigate } from "react-router-dom";
import Input from '../../../component/input/Input';
import { Button } from '../../../component/styled';

export default function BasicInfo() {
    const history = useNavigate();

  const handleSignUp = (e)=> {
    e.preventDefault();
    history('/SignUpProvider/subscribe');
  };
  return (
    <div>
        <div className='even-column create-accountbasic-information  formboxsignup' style={{marginBottom:"1rem"}}>
                
            
                <h1>Hi John</h1>
                <p className="subtitle">Basic Information</p>
        
                <form onSubmit={handleSignUp}>
                <div style={{display:"flex", justifyContent:"space-between", gap:"20px"}}>
                  <Input style={{width:"40%"}} label="Street Number *" placeholder="14" id="streetnumber" name="streetnumber" />
                  <Input style={{width:"40%"}} label="Street Name " placeholder="Oshodi" id="streetname" required/>
                </div>
                  <Input label="LGA(Optional)" placeholder="ifo" id="lga" />
        
                  <div style={{display:"flex", justifyContent:"space-between", gap:"30px"}}>
                  <Input style={{width:"40%"}} label="State of Origin *" placeholder="Oyo" id="stateoforigin" name="stateoforigin" />
                  <Input style={{width:"40%"}} label="Residential Country " placeholder="Oshodi" id="residential" name="residential"  required />
                 </div>
                  <p className='' style={{fontSize:"1.3rem", color:"black", fontWeight:"600"}}>Email Address and Phone Number</p>
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
