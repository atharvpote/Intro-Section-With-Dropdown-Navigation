import styled from "styled-components";
import { neutrals, typeScale } from "../utils";

export function Main() {
  return (
    <StyledSection>
      <main>
        <Title>Make remote work</Title>
        <Info>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </Info>
        <Link href='#'>Learn more</Link>
      </main>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 1rem;

  @media (min-width: 720px) {
    grid-row: 1 / 4;
  }
`;

const Title = styled.h2`
  font-size: ${typeScale.heading2};

  @media (min-width: 720px) {
    font-size: calc(${typeScale.heading1} * 2);
    text-align: left;
  }
`;

const Info = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${neutrals.mediumGrey};
  line-height: 1.5;
  margin-bottom: 1.5rem;

  @media (min-width: 720px) {
    text-align: left;
    margin-bottom: 3rem;
  }
`;

const Link = styled.a`
  background-color: ${neutrals.almostBlack};
  color: ${neutrals.almostWhite};
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: ${typeScale.helperText};

  @media (min-width: 720px) {
    display: block;
    margin-left: 0;
    max-width: 8rem;
  }
`;
