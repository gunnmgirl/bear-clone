import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";

import SideNav from "./features/sideNav/SideNav";
import Notes from "./features/notes/components/Notes";
import Archive from "./features/notes/archive/Archive";
import Trash from "./features/notes/trash/Trash";
import GlobalStyle from "./GlobalStyle";
import themes from "./themes";

const Layout = styled(animated.div)`
  display: grid;
  height: 100vh;
`;

function App() {
  const themeName = useSelector((state) => state.preferences.theme);
  const sidebars = useSelector((state) => state.layout.sidebars);
  const style = useSpring(getLayout());

  function getLayout() {
    switch (sidebars) {
      case 0:
        return { to: { gridTemplateColumns: "0 0 1fr" } };
      case 1:
        return { to: { gridTemplateColumns: "0 1.5fr 4.8fr" } };
      case 2:
      default:
        return { to: { gridTemplateColumns: "0.8fr 1.5fr 4fr" } };
    }
  }

  function getTheme() {
    switch (themeName) {
      case "redGraphite":
        return themes.redGraphite;
      case "darkGraphite":
        return themes.darkGraphite;
      default:
        return themes.redGraphite;
    }
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout style={style}>
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
