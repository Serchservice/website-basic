import React from 'react';
import styled from 'styled-components';
import '../../screens/css/login.css';
import freetrial from '../../assets/subscribe/freetrial.png'
import { CardContainer } from './Card.style';
import { Button } from '../../component/styled';



export default function SubscribeCard({item1, item2, item3, item4, fees,item5, trials, subscribeName, variant}) {
  return (
                   <div>
                    
                         <CardContainer >

                         <div className='subscribe-item ' style={{}}>
                              <div >
                                   <img className='suscribe-image' src={freetrial} alt="free tiral"/>

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
                           
                             <div  className='continue'>
                                        
                                   <Button>Get free trial</Button>
                              </div>
                                        <div>
                              {trials}
                             </div>
                         </div>

                    </CardContainer>
                   
                   </div>
                    
    
  )
}
