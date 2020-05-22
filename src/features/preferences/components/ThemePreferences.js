import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { changeTheme } from "../actions/preferencesActions";
import themes from "../../../themes";

const StyledThemePreferences = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: 80%;
`;

const ThemeBox = styled.div`
  border: 2px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RedGraphiteThemeBox = styled(ThemeBox)`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const RedGraphiteParagraph = styled.p`
  color: ${(props) => props.color};
  padding: 1rem 1rem;
`;

const DarkGraphiteThemeBox = styled(ThemeBox)`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
`;

const DarkGraphiteParagraph = styled.p`
  color: ${(props) => props.color};
  padding: 1rem 1rem;
`;

function ThemePreferences() {
  const dispatch = useDispatch();
  return (
    <StyledThemePreferences>
      <RedGraphiteThemeBox
        background={themes.redGraphite.primaryBackground}
        color={themes.redGraphite.highlight}
        onClick={() => {
          dispatch(changeTheme("redGraphite"));
        }}
      >
        <h3>RED GRAPHITE</h3>
        <span style={{ color: themes.redGraphite.primary }}>
          Lorem Ipsum...
        </span>
        <RedGraphiteParagraph color={themes.redGraphite.secondary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium,
          ante pulvinar ultricies maximus, orci nibh tempus velit, vitae
          tincidunt orci nibh nec nisi.
        </RedGraphiteParagraph>
      </RedGraphiteThemeBox>
      <DarkGraphiteThemeBox
        background={themes.darkGraphite.primaryBackground}
        color={themes.darkGraphite.highlight}
        onClick={() => {
          dispatch(changeTheme("darkGraphite"));
        }}
      >
        <h3>DARK GRAPHITE</h3>
        <span style={{ color: themes.darkGraphite.primary }}>
          Lorem Ipsum...
        </span>
        <DarkGraphiteParagraph color={themes.darkGraphite.secondary}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium,
          ante pulvinar ultricies maximus, orci nibh tempus velit, vitae
          tincidunt orci nibh nec nisi.
        </DarkGraphiteParagraph>
      </DarkGraphiteThemeBox>
    </StyledThemePreferences>
  );
}

export default ThemePreferences;
