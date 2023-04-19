import styled from "styled-components";

export const ProfileWrapper =  styled.ol`

padding:20px;
flex:0.1;
height: 70%;
margin-top: -100px;
display: flex;
flex-direction: ${props => !props.column ? "column" : 'row'};
justify-content: space-around;
align-items: center;
background-color:black;

@media screen and (max-width: 768px){
   
     

}




`;