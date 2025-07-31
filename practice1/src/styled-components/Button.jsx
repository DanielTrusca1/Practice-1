import styled from "styled-components";

const getColor = (theme, variant, type = "normal") => {
  const key = variant + (type === "hover" ? "Hover" : "");
  return theme.colors[key] || theme.colors.primary;
};

export const Button = styled.button`
  background-color: ${({ theme, $variant }) => getColor(theme, $variant)};
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
    background-color: ${({ theme, $variant }) =>
      getColor(theme, $variant, "hover")};
  }
`;

// Define transient props
Button.defaultProps = {
  $variant: 'primary',
};

export const GreenButton = styled(Button)`
  background-color: rgb(0, 255, 0);
  color: rgb(50, 50, 50);
  &:hover {
    background-color: rgb(0, 225, 0);
  }
`;
