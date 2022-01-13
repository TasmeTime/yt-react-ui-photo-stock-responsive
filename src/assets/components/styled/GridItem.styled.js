import styled, { keyframes } from "styled-components";
import Img from "./Img.styled";
import AvatarIcon from "../../images/icons/Avatar2.svg";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmarkDash } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { Colors } from "../../Theme";
import { useState } from "react";

const FadeFromTop = keyframes`
    0%{
        transform:translateY(-150%);
        opacity:0;
    }
     100%{
        transform:translateY(0);
        opacity:1;
    }
`;

const FadeFromBottom = keyframes`
    0%{
        transform:translateY(300%);
        opacity:0;
    }
     100%{
        transform:translateY(0);
        opacity:1;
    }
`;

const AvatarImage = styled(Img)`
  width: 2.7rem;
  height: 2.7rem;
  opacity: 0;
  cursor: pointer;
  :hover {
    filter: drop-shadow(#21212121 1px 4px 2px);
  }
`;

const TopSection = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 4% 4% 0 4%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: max-content;
`;

const Image = styled(Img)`
  display: inline-block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Row = styled.span`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: ${Colors.Black};
`;

const BookmarkIconEl = styled.span`
  border-radius: 50%;
  /* transform: translateY(-150%); */
  opacity: 0;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${Colors.GrayBG};
`;

const SendIcon = styled(BookmarkIconEl)``;

const BottomSection = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
  position: absolute;
  bottom: 0;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: rgba(90, 90, 90, 0.45);
  backdrop-filter: blur(13px);
  color: ${Colors.Backgorund};
`;

const Title = styled.h2`
  margin-bottom: 0.2rem;
  opacity: 0;
`;
const Des = styled.div`
  font-weight: 300;
  font-size: 1.15rem;
`;

const DownloadButton = styled.button`
  opacity: 0;
  width: 2.7rem;
  height: 2.7rem;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  color: ${Colors.Backgorund};
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${Colors.Gradient.Dark[0]},
    ${Colors.Gradient.Dark[1]}
  );
`;

const GridItemEl = styled.article`
  overflow: hidden;
  position: relative;
  :hover {
    ${AvatarImage} {
      opacity: 1;
      animation: ${FadeFromTop} 0.3s;
    }

    ${BookmarkIconEl} {
      opacity: 1;
      animation: ${FadeFromTop} 0.3s;
    }

    ${SendIcon} {
      animation: ${FadeFromTop} 0.2s;
    }

    ${BottomSection} {
      opacity: 1;
    }

    ${Title} {
      opacity: 1;
      animation: ${FadeFromBottom} 0.2s;
    }

    ${Des} {
      opacity: 1;
      animation: ${FadeFromBottom} 0.3s;
    }

    ${DownloadButton} {
      opacity: 1;
      animation: ${FadeFromBottom} 0.3s;
    }

    box-shadow: rgba(0 0 0 /12%) 5px 8px 16px 1px;
  }
`;

export default function GridItem({ img, title, des }) {
  //   const [isHover, setIsHover] = useState(false);
  return (
    <GridItemEl
    //   onMouseEnter={() => {
    //     setIsHover(true);
    //   }}
    //   onMouseLeave={() => {
    //     setIsHover(false);
    //   }}
    >
      <TopSection>
        <AvatarImage src={AvatarIcon} />
        <Row>
          <BookmarkIconEl>
            <BsBookmarkDash />
          </BookmarkIconEl>
          <SendIcon>
            <RiSendPlaneLine />
          </SendIcon>
        </Row>
      </TopSection>
      <BottomSection>
        <span style={{ flex: 1 }}>
          <Title>{title}</Title>
          <Des>{des}</Des>
        </span>
        <DownloadButton>
          <MdOutlineFileDownload />
        </DownloadButton>
      </BottomSection>
      <Image src={img} />
    </GridItemEl>
  );
}
