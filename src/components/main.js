import styled from "styled-components";
import { neutrals, typeScale } from "../utils";

export function Main() {
  return (
    <main>
      <StyledSection>
        <Title>Make remote work</Title>
        <Info>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals and watch productivity soar.
        </Info>
        <Link href='#'>Learn more</Link>
      </StyledSection>
    </main>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: ${typeScale.heading2};
`;

const Info = styled.p`
  font-size: ${typeScale.paragraph};
  color: ${neutrals.mediumGrey};
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  background-color: ${neutrals.almostBlack};
  color: ${neutrals.almostWhite};
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: ${typeScale.helperText};
`;
