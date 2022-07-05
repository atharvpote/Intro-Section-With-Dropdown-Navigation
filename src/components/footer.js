import styled from "styled-components";
import { clients } from "../assets";

export function Footer() {
  return (
    <StyledFooter>
      <ClientList>
        <li>
          <a href='#'>
            <img src={clients.databiz} alt='databiz' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={clients.audiophile} alt='audiophile' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={clients.meet} alt='meet' />
          </a>
        </li>
        <li>
          <a href='#'>
            <img src={clients.maker} alt='maker' />
          </a>
        </li>
      </ClientList>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 1rem;

  @media (min-width: 720px) {
    width: 100%;
    grid-row: 4 / 5;
  }
`;

const ClientList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  gap: 10%;
`;
