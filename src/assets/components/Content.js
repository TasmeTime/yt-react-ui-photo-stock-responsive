import styled from "styled-components";
import Img from "./styled/Img.styled";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import Image4 from "../images/img4.jpg";
import Image5 from "../images/img5.jpg";
import Image6 from "../images/img6.jpg";
import Image7 from "../images/img7.jpg";
import Image8 from "../images/img8.jpg";
import Image9 from "../images/img9.jpg";
import { Devices } from "../Theme";
import GridItem from "./styled/GridItem.styled";

const ContentEl = styled.article`
  overflow: auto;
  grid-column: 1 / span 12;
  grid-row: 2 / span 11;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${Devices.Tablet} {
    grid-column: 2 / span 11;
    padding: 0;
  }
`;

const GridEl = styled.div`
  width: 100%;
  height: 100%;
  column-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr;

  @media ${Devices.Tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${Devices.LaptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Fade = styled.span`
  position: sticky;
  display: block;
  z-index: 1;
  top: 90%;
  bottom: 0;
  width: 100%;
  height: 10%;
  background: linear-gradient(180deg, transparent, white);
`;

export default function Content() {
  return (
    <ContentEl>
      <GridEl>
        <Column>
          <GridItem
            img={Image1}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image2}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image3}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
        </Column>
        <Column>
          <GridItem
            img={Image4}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image5}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image6}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
        </Column>
        <Column>
          <GridItem
            img={Image7}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image8}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
          <GridItem
            img={Image9}
            title="Minimal Leaf"
            des="Beautiful leaf in the..."
          />
        </Column>
      </GridEl>
      <Fade />
    </ContentEl>
  );
}
