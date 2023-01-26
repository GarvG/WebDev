import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid darkgreen;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#4caf50"};
  color: ${(props) =>
    props.variant === "outline" ? "#4caf50" : "#FFF"};
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 300ms ease-in-out;
`;


const FancyButton = styled(StyledButton)`
   background: linear-gradient(to right, #f6d365 0%, #fda085 100%); 
   
border: none; 
`
// export  {StyledButton,FancyButton} 
export {StyledButton,FancyButton} ;