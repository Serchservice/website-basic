// import Outline from "./Outline";
import PinInput from "./PinInput";
import '../screens/css/login.css';
import styled from 'styled-components';


function VerifyEmailComponents() {
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
`
  return (
    <div className="column verify-email-page " style={{padding: "3rem 3rem"}}>
      {/* <Outline/> */}

      <div className="verify-email">
        <h2>Verify your email address</h2>
        <p className="subtitle" >
          We have sent you an email to the address you provided us when you created this Serch
          account
        </p>
        <span style={{textAlign:"center"}}>Either use the link provided in your email address or get the pin sent to you</span>

        <fieldset class="form-group" >
          <legend style={{textAlign:"center", margin:"2rem 0rem"}}>Enter your six-digit pin</legend>
          <div className="cc-inputs horizontal-input-stack" style={{display: "flex", justifyContent:"space-between"}}>
            <PinInput firstInput />
            <PinInput/>
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
          </div>
        </fieldset>

        <div className="email-resend" style={{textAlign:"center"}}>
          <br/>
          <br/>

          <span>
            Didn't get an email?
            <a href="" className="fw-semi-bold" style={{marginLeft:"1rem"}}>
              Resend email
            </a>
          </span>
        </div>
        <br/>
          <br/>
          <br/>
          <div  style={{display:"flex", justifyContent:"center"}}>
          <Button >Finish</Button>

          </div>
      </div>
    </div>
  );
}

export default VerifyEmailComponents;
