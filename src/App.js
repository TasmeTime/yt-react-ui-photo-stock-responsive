import styled from "styled-components";
import Content from "./assets/components/Content";
import Logo from "./assets/components/Logo";
import ProfileSection from "./assets/components/ProfileSection";
import SearchBar from "./assets/components/SearchBar";
import SideMenu from "./assets/components/SideMenu";
import { Colors } from "./assets/Theme";

const AppEl = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding: 0.5rem 0 0 0;
  position: relative;
  gap: 0.5rem;
  height: 100vh;
`;

function App() {
  return (
    <AppEl>
      <Logo>Grts</Logo>
      <SearchBar />
      <ProfileSection />
      <SideMenu />
      <Content />
    </AppEl>
  );
}

export default App;
