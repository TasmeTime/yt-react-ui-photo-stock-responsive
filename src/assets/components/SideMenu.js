import styled from "styled-components";
import CatIcon from "../images/icons/Category.svg";
import BookmarkIcon from "../images/icons/Bookmark.svg";
import FolderIcon from "../images/icons/Folder.svg";
import DownloadIcon from "../images/icons/Download.svg";
import TicketIcon from "../images/icons/Ticket.svg";
import SettingIcon from "../images/icons/Setting.svg";
import Img from "./styled/Img.styled";
import { Colors, Devices } from "../Theme";

const SideMenuEl = styled.aside`
  background-color: ${Colors.Backgorund};
  grid-column: 1 / span 1;
  grid-row: 2 / span 11;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  transform: translateX(-110%);
  opacity: 0;
  justify-content: space-between;

  @media ${Devices.Tablet} {
    transform: translateX(0);
    opacity: 1;
  }
`;
const MenuIcons = styled.a``;

const TopSection = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;
const BottomSection = styled(TopSection)``;

export default function SideMenu() {
  return (
    <SideMenuEl>
      <TopSection>
        <MenuIcons href="#">
          <Img src={CatIcon} />
        </MenuIcons>
        <MenuIcons href="#">
          <Img src={BookmarkIcon} />
        </MenuIcons>
        <MenuIcons href="#">
          <Img src={FolderIcon} />
        </MenuIcons>
        <MenuIcons href="#">
          <Img src={DownloadIcon} />
        </MenuIcons>
      </TopSection>
      <BottomSection>
        <MenuIcons href="#">
          <Img src={TicketIcon} />
        </MenuIcons>
        <MenuIcons href="#">
          <Img src={SettingIcon} />
        </MenuIcons>
      </BottomSection>
    </SideMenuEl>
  );
}
