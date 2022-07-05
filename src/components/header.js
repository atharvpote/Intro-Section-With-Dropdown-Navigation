import { useState } from "react";
import styled, { css } from "styled-components";
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
      <Backdrop
        showNav={showNav}
        onClick={() => {
          setShowNav(false);
        }}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 720px) {
    justify-content: flex-start;
    gap: 5%;
  }
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
  z-index: 1000;
  transition: transform 0.5s;

  @media (min-width: 720px) {
    position: initial;
    transform: initial;
    transition: initial;
    width: 100%;
    padding: 0;
  }
`;

const NavToggle = styled.a`
  @media (min-width: 720px) {
    display: none;
  }
`;

const CloseNavToggle = styled.a`
  display: inline-block;
  width: 2rem;
  position: relative;
  left: 90%;
  margin: 1rem 0 0.5rem 0;

  @media (min-width: 720px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-block-end: 1rem;
  }

  @media (min-width: 720px) {
    width: 100%;
    display: flex;
    align-items: center;
    margin-block: 0;
    justify-content: flex-start;
    gap: 2%;

    li {
      margin-block-end: 0;
      flex-basis: 6rem;
      position: relative;
    }
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

  @media (min-width: 720px) {
    padding: 0.5rem 1rem;
  }
`;

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  height: 0;
  opacity: 0;
  transition: all 0.5s;

  li {
    margin-block-end: 1rem;
  }

  @media (min-width: 720px) {
    position: absolute;
    background-color: ${neutrals.almostWhite};
  }
`;

const DropdownLink = styled(BaseLink)`
  display: flex;
  align-items: center;
  gap: 3%;

  img {
    max-width: 0.5rem;
  }

  &:focus-within + ${DropdownList} {
    padding-block-start: 0.5rem;
    padding-left: 1rem;
    margin-block: 0.5rem;
    opacity: 1;

    @media (min-width: 720px) {
      width: 150%;
      padding: 1rem;
      box-shadow: 0 0 10px 2px ${neutrals.mediumGrey};
      border-radius: 10px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      li {
        flex-basis: 100%;
        margin-bottom: 0.5rem;

        a {
          justify-content: center;
        }
      }
    }
  }

  &:focus-within + #features {
    height: 154.8px;

    @media (min-width: 720px) {
      height: calc(35px * 4);
    }
  }

  &:focus-within + #company {
    height: 102.1px;

    @media (min-width: 720px) {
      height: calc(35px * 3);
    }
  }
`;

const FeatureLink = styled(DropdownLink)``;

const ProfileLinksGroup = styled.div`
  margin-block-start: 2rem;
  align-self: flex-end;

  @media (min-width: 720px) {
    justify-self: flex-end;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-block-start: initial;
    justify-content: flex-end;
    gap: 5%;
  }
`;

const Backdrop = styled.a`
  cursor: default;
  z-index: -1000;
  tabindex: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${neutrals.almostBlack};
  opacity: 0;
  transition: opacity 0.5s, z-index 0.5s;

  ${({ showNav }) => {
    if (showNav)
      return css`
        opacity: 0.7;
        z-index: 999;
      `;
  }};

  @media (min-width: 720px) {
    display: none;
  }
`;
