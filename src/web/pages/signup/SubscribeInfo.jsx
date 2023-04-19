import React from 'react';
import { Link,  useNavigate } from "react-router-dom";
import SubscribeCard from '../../../component/suscribecard/SubscribeCard';
import { Button } from '../../../component/styled';



export default function SubscribeInfo() {

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
                      <p className='subtitle' style={{ marginTop: "-10px"}}>We have curated a list of plans suitable for you at
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
