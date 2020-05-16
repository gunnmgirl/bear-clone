import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { changeTheme } from "../actions/preferencesActions";

const StyledThemePreferences = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: 80%;
`;

const ThemeBox = styled.div`
  border: 2px solid ${(props) => props.theme.border};
`;

function ThemePreferences() {
  const dispatch = useDispatch();
  return (
    <StyledThemePreferences>
      <ThemeBox onClick={() => dispatch(changeTheme("dark"))}>
        dark theme
      </ThemeBox>
      <ThemeBox onClick={() => dispatch(changeTheme("light"))}>
        light theme
      </ThemeBox>
      <ThemeBox onClick={() => dispatch(changeTheme("redGraphite"))}>
        red graphite
      </ThemeBox>
      <ThemeBox onClick={() => dispatch(changeTheme("darkGraphite"))}>
        dark graphite
      </ThemeBox>
    </StyledThemePreferences>
  );
}

export default ThemePreferences;
