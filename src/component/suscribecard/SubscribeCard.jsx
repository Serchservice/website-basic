import React from 'react'
import '../../screens/css/login.css';
import freetrial from '../../assets/subscribe/freetrial.svg'
import { CardContainer } from './Card.style';



export default function SubscribeCard({item1, item2, item3, item4, fees,item5, trials, subscribeName, variant}) {
  return (
                   <div>
                    
                         <CardContainer >

                         <div className='subscribe-item ' style={{}}>
                              <div className='suscribe-image'>
                                   <img src={freetrial} alt="free tiral"/>

                              </div>
                             
                              <div className='subscribe-name-box'>
                                 
                                        <h2>{subscribeName}</h2>
                                      
                                             <p className='item'>{item1}</p>
                                             <p className='item'>{item2}</p>
                                             <p className='item'>{item3}</p>
                                             <p className='item'>{item4}</p>
                                             <p className='item'>{item5}</p>
                                      
                                  
                               </div>
                               {/* <div>
                                   

                              </div> */}
                              <div className='fees' >
                                  {fees}

                              </div>
                              
                         </div>
                         <div className='subscribe-footer'>
                             <div>
                             <button className='button-signup'>Get free trial</button>
                             </div>
                             <div>
                              {trials}
                             </div>
                         </div>

                    </CardContainer>
                   
                   </div>
                    
    
  )
}
