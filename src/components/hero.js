import styled from "styled-components";
import { images } from "../assets";

export function Hero() {
  return (
    <Div>
      <img
        src={images.heroMobile}
        srcSet={`${images.heroMobile} 750w, ${images.heroDesktop} 960w`}
        alt=''
      />
    </Div>
  );
}

const Div = styled.div`
  @media (min-width: 720px) {
    grid-row: span 4;
    grid-column: 2/3;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
  }
`;
