import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

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
  const theme = themes.light;

  return (
    <ThemeProvider theme={theme}>
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
