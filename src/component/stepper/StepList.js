
import { Steps } from "./stepdata";
import "../../screens/css/login.css";
import StepperProp from "./StepperProp";
import { stepsIcon } from "./stepIconData";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { StepperWrapper } from "./stepperwrapper";

const Stepper = () => {
  const location = useLocation();
  const [loadedStep] = Steps.filter((i) => i.path === location.pathname);
  let stepIcon;
  const [activeStep, setActiveStep] = useState('');

  console.log(loadedStep.step)

  useEffect(()=>{
   
    setActiveStep(loadedStep.step);

  })
 
  const handleChange = (step) => {
    console.log("setStepIcon is clicked");
    // setActiveStep((prevStep)=> prevStep + 1);
    
    if (step.step === activeStep) {
      stepIcon = stepsIcon.ongoing;
    }
    if (step.step < activeStep) {
      stepIcon = stepsIcon.done;
    }

    if (step.step > activeStep) {
      stepIcon = stepsIcon.undone;
    }
    return stepIcon;
  };

//   useBackListener(() => {
//     stepHandler("decrease");
//   });

  return (
    <div>
        <StepperWrapper>
        {Steps.map((step, key) => (
            <StepperProp key={step.step}  step = {step} stepBg={handleChange(step)}/>
        ))}
        </StepperWrapper>
    </div>
  );
};

export default Stepper;
