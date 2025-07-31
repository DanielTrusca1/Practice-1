import styled from "styled-components";

// Create variant props styles for: primary(default), secondary, danger
const variantStyles = {
  primary: {
    background: "#007bff",
    hover: "#0056b3",
  },
  secondary: {
    background: "#6c757d",
    hover: "#5a6268",
  },
  danger: {
    background: "#dc3545",
    hover: "#b52a37",
  },
};

export const Button = styled.button`
  background-color: ${({ variant }) =>
    variantStyles[variant]?.background || variantStyles.primary.background};
  color: white;
  width: 160px;
  height: 55px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 17.5px;
  cursor: pointer;
  margin: 15px;

  &:hover {
    background-color: ${({ variant }) =>
      variantStyles[variant]?.hover || variantStyles.primary.hover};
  }
`;

export const GreenButton = styled(Button)`
  background-color: rgb(0, 255, 0);
  color: rgb(50, 50, 50);
  &:hover {
    background-color: rgb(0, 225, 0);
  }
`;
