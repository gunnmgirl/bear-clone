import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import SideNav from "./features/sideNav/SideNav";
import Notes from "./features/notes/components/Notes";
import Archive from "./features/notes/archive/Archive";
import Trash from "./features/notes/trash/Trash";
import GlobalStyle from "./GlobalStyle";
import themes from "./themes";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 4fr;
  height: 100vh;
`;

function App() {
  const themeName = useSelector((state) => state.preferences.theme);

  function getTheme() {
    switch (themeName) {
      case "light":
        return themes.light;
      case "dark":
        return themes.dark;
      case "redGraphite":
        return themes.redGraphite;
      case "darkGraphite":
        return themes.darkGraphite;
      default:
        return themes.light;
    }
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <SideNav />
          <Switch>
            <Route path="/archive/:noteId?" component={Archive} />
            <Route path="/trash/:noteId?" component={Trash} />
            <Route path="/:noteId?" component={Notes} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
