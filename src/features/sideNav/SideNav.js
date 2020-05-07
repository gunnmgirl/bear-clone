import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideNav = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.tertiary};
`;

const SideNavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
`;

function SideNav() {
  return (
    <StyledSideNav>
      <SideNavColumn>
        <StyledLink to="/">Notes</StyledLink>
        <StyledLink to="/archive">Archive</StyledLink>
        <StyledLink to="/trash">Trash</StyledLink>
      </SideNavColumn>
    </StyledSideNav>
  );
}

export default SideNav;
