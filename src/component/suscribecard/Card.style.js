import styled from 'styled-components';

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) =>
    (props.variant === 'outline' ? 'blue':"#B80000")
};
padding: 1rem;
border-radius: 8px;
margin-bottom: 20px;

`;