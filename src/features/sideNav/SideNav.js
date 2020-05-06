import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNavColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

function SideNav() {
  return (
    <SideNavColumn>
      <Link to="/">Notes</Link>
      <Link to="/archive">Archive</Link>
      <Link to="/trash">Trash</Link>
    </SideNavColumn>
  );
}

export default SideNav;
