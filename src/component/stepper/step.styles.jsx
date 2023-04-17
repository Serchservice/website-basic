import styled from "styled-components";

export const StepItemStyles = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;
  padding-bottom: -20px;

  &::before {
    content: "";
    position: relative;
    z-index: 1;
    flex: 0 0 clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem);
    height: clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem);
    border-radius: 50%;
    background-position: center;
    background-image: url(${(props) => props.stepBg});
    background-size: contain;
    background-repeat: no-repeat;
    border: 2px solid white;
  }

  &::after {
    content: "";
    position: absolute;
    top: calc(clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem) + 8px);
    left: 0;
    // height:cover;
    bottom: 8px;
    transform: translateX(calc(clamp(2rem, 1.6158rem + 0.7685vw, 2.5rem) / 2));
    width: 4px;
    background-color: grey;
  
  }

  .c-stepper__title {
    
    font-weight: 700;
    font-size: clamp(1.125rem, 0.5098rem + 1.2951vw, 2rem);
    line-height: 38px;
    color:white;
    line-height: 12px;  
  }

 
.c-stepper__desc {
  color: white;
  font-size: clamp(0.85rem, 2vmax, 1rem);
  }
  

`;
  



