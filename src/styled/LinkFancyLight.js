import styled from "react-emotion";
import Heading from "rebass";
import {
  space,
  width,
  fontSize,
  letterSpacing,
  lineHeight,
  textAlign,
  alignSelf
} from "styled-system";

const Component = styled.span`
  ${space};
  ${width};
  ${fontSize};
  ${letterSpacing};
  ${lineHeight};
  ${textAlign};
  ${alignSelf};

  > a {
    text-transform: uppercase;
    font-family: ${props => props.theme.headerLight.font};
    font-weight: ${props => props.theme.headerLight.fontWeight};
    color: ${props => props.theme.headerLight.color};
    text-shadow: rgba(0, 0, 0, 0.47) 0px 2px 4px;
    text-decoration: none;
  }
`;

export default Component;
