import React from 'react'
import '../../screens/css/login.css';


export default function StepperProp({step}) {
  return (
    <div className='wrapper'>

                
      <ol class="c-stepper" >
          <li class="c-stepper__item " >
              <div class="c-stepper__content">
                  <h3 class="c-stepper__title">{step.title}</h3>
                  <p className='c-stepper__desc'>{step.desc}</p>
              </div>
          </li>
          {/* <!-- Other steps --> */}
    </ol> 
    </div>

  )
}
