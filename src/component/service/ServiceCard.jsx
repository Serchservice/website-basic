import React from 'react';
import '../../screens/css/login.css';
import electrician from '../../assets/serviceoption/electrician.svg'
import mechanic from '../../assets/serviceoption/mechanic.svg'
import plumber from '../../assets/serviceoption/plumber.svg'
import { Link } from 'react-router-dom';
import { Button } from '../button';


export default function ServiceCard() {
  return (
    <div>

<div className='service-rapper'>
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

        
               
                                
                                <div  className='continue'>
                                <Link to="/signupprovider/basicinformation">
                                   <Button>Continue</Button>
                                   </Link> 
                                   </div>
      
    </div>
  )
}
