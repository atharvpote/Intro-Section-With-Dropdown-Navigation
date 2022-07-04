import { useState } from "react";
import styled from "styled-components";
import { icons } from "../assets";
import { neutrals } from "../utils";

export function Header() {
  const features = [
    { name: "Todo List", icon: icons.todo },
    { name: "Calendar", icon: icons.calendar },
    { name: "Reminder", icon: icons.reminder },
    { name: "Planning", icon: icons.planning },
  ];
  const companyItems = ["History", "Our Team", "Blog"];

  const [showNav, setShowNav] = useState(false);

  return (
    <StyledHeader>
      <Title>snap</Title>
      <NavToggle
        href='#'
        onClick={() => {
          setShowNav(true);
        }}
      >
        <img src={icons.menu} alt='' />
      </NavToggle>
      <Navigation showNav={showNav}>
        <CloseNavToggle
          href='#'
          onClick={() => {
            setShowNav(false);
          }}
        >
          <img src={icons.closeMenu} alt='' />
        </CloseNavToggle>
        <NavList>
          <li>
            <DropdownLink href='#'>
              <span>Features</span>
              <img src={icons.arrowDown} alt='' />
            </DropdownLink>
            <DropdownList id='features'>
              {features.map(({ name, icon }, index) => (
                <li key={index}>
                  <FeatureLink>
                    <img src={icon} alt='' />
                    <span>{name}</span>
                  </FeatureLink>
                </li>
              ))}
            </DropdownList>
          </li>
          <li>
            <DropdownLink href='#'>
              <span>Company</span>
              <img src={icons.arrowDown} alt='' />
            </DropdownLink>
            <DropdownList id='company'>
              {companyItems.map((text, index) => (
                <li key={index}>
                  <BaseLink>{text}</BaseLink>
                </li>
              ))}
            </DropdownList>
          </li>
          {["Careers", "About"].map((item, index) => (
            <li key={index}>
              <BaseLink href='#'>{item}</BaseLink>
            </li>
          ))}
          <ProfileLinksGroup>
            <CenteredListItem>
              <BaseLink href='#'>Login</BaseLink>
            </CenteredListItem>
            <CenteredListItem>
              <BorderedLink href='#'>Register</BorderedLink>
            </CenteredListItem>
          </ProfileLinksGroup>
        </NavList>
      </Navigation>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 1rem;
`;

const Navigation = styled.nav`
  background-color: ${neutrals.almostWhite};
  width: 70%;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding-inline: 2rem;
  transform: translateX(${({ showNav }) => (showNav ? "0" : "100%")});
`;

const NavToggle = styled.a``;

const CloseNavToggle = styled.a`
  display: inline-block;
  width: 2rem;
  position: relative;
  left: 90%;
  margin: 1rem 0 0.5rem 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-block-end: 1rem;
  }
`;

const BaseLink = styled.a`
  text-decoration: none;
  color: ${neutrals.mediumGrey};
  cursor: pointer;
`;

const CenteredListItem = styled.li`
  text-align: center;
`;

const BorderedLink = styled(BaseLink)`
  border: 3px solid ${neutrals.mediumGrey};
  padding-block: 0.75rem;
  border-radius: 10px;
  margin-block: 0.25rem;
  display: block;
`;

const DropdownList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: all 0.5s;

  li {
    margin-block-end: 1rem;
    position: relative;
  }
`;

const DropdownLink = styled(BaseLink)`
  display: flex;
  align-items: center;
  gap: 3%;

  img {
    flex: 0 0 3%;
  }

  &:focus-within + ${DropdownList} {
    padding-block-start: 0.5rem;
    padding-left: 1rem;
    margin-block: 0.5rem;
    opacity: 1;
  }

  &:focus-within + #features {
    height: 154.8px;
  }

  &:focus-within + #company {
    height: 102.1px;
  }
`;

const FeatureLink = styled(DropdownLink)``;

const ProfileLinksGroup = styled.div`
  margin-block-start: 2rem;
`;
