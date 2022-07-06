import styled from "styled-components";
import { clients } from "../assets";

export function Footer() {
  const allClients = [
    { name: "databiz", icon: clients.databiz },
    { name: "audiophile", icon: clients.audiophile },
    { name: "meet", icon: clients.meet },
    { name: "maker", icon: clients.maker },
  ];

  return (
    <StyledFooter>
      <ClientList>
        {allClients.map(({ name, icon }, index) => (
          <li key={index}>
            <a href="#">
              <img src={icon} alt={name} />
            </a>
          </li>
        ))}
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
