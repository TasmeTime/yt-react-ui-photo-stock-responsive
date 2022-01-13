import styled from "styled-components";
import { Devices } from "../Theme";

const Logo = styled.a`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  letter-spacing: -0.12rem;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;

  @media ${Devices.Tablet} {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;

export default Logo;
