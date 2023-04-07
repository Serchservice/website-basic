
import { StepData } from "./stepdata";
import "../../screens/css/login.css";
import StepperProp from "./StepperProp";

const Stepper = ({  }) => {
 

  return (
    <div>
      {StepData.map((step) => (
        <StepperProp key={step.step} step={step}  />
      ))}
    </div>
  );
};

export default Stepper;
