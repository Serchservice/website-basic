import React from 'react'
import '../../screens/css/login.css';
import { StepItemStyles } from './step.styles';


export default function StepperProp({step, stepBg}) {
  return (
    <div className='wrapper'>
       <StepItemStyles stepBg = {stepBg}>
       <div class="c-stepper__content">
                  <h3 class="c-stepper__title">{step.title}</h3>
                  <p className='c-stepper__desc'>{step.desc}</p>
        </div>
      </StepItemStyles>
          {/* <!-- Other steps --> */}
   
    </div>

  )
}
