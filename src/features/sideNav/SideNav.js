import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FileText, Trash2, Archive } from "react-feather";

import Preferences from "../preferences/components/Preferences";

const StyledSideNav = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.tertiary};
  display: flex;
  flex-direction: column;
`;

const SideNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  display: flex;
  margin-bottom: 0.5rem;
`;

const LinkText = styled.span`
  padding-left: 0.5rem;
`;

function SideNav() {
  return (
    <StyledSideNav>
      <Preferences />
      <SideNavColumn>
        <StyledLink to="/">
          <FileText size="1rem" />
          <LinkText>Notes</LinkText>
        </StyledLink>
        <StyledLink to="/archive">
          <Archive size="1rem" />
          <LinkText>Archive</LinkText>
        </StyledLink>
        <StyledLink to="/trash">
          <Trash2 size="1rem" />
          <LinkText>Trash</LinkText>
        </StyledLink>
      </SideNavColumn>
    </StyledSideNav>
  );
}

export default SideNav;
