import styled from "styled-components";
export const Button= styled.button`
    padding:1rem 3rem;
  position: relative;
  margin-top: 1rem;
  font-size: 14px;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--serch-white-bg);
  transition: all .5s;
  background-color: #3F0F36;

  @media screen and (max-width: 768px){

    font-size:12px;
    padding: 0.8rem 2rem;

  }
`;

export const Label= styled.label`
font-size: 24px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
margin-bottom: 15px;
padding-bottom: 15px;

@media screen and (max-width: 768px){

  font-size:16px;
 



`;
