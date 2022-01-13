import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { Colors, Devices } from "../Theme";

const SearchBarEl = styled.article`
  background-color: ${Colors.Gray};
  display: flex;
  align-items: center;
  padding: 1rem;
  column-gap: 1rem;
  grid-column: 2 / span 10;
  width: 100%;

  svg {
    color: ${Colors.Gray2};
    font-size: 1.5rem;
  }

  /* @media ${Devices.MobileL} {
    grid-column: 2 / span 10;
  } */

  @media ${Devices.Tablet} {
    grid-column: 2 / span 9;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  flex: 1;
  :focus {
    outline: none;
  }
`;

export default function SearchBar() {
  return (
    <SearchBarEl>
      <RiSearchLine />
      <Input placeholder="Search your amazing picture" />
    </SearchBarEl>
  );
}
