import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(245, 245, 245);
  color: rgb(125, 125, 125);
  width: 120px;
  height: 50px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: rgb(125, 125, 125);
    color: rgb(245, 245, 245);
  }
`;

export default Button;
