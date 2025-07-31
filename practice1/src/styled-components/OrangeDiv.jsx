import styled from "styled-components";
import { Button } from "./Button";

const OrangeDiv = styled.div`
  ${Button} {
    background-color: orange !important;

    &:hover {
      background-color: darkorange !important;
    }
  }
`;

export default OrangeDiv;
