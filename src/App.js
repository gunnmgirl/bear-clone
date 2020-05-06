import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import SideNav from "./features/sideNav/SideNav";
import Notes from "./features/notes/components/Notes";
import Archive from "./features/notes/archive/Archive";
import Trash from "./features/notes/trash/Trash";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SideNav />
        <Switch>
          <Route path="/archive/:noteId?" component={Archive} />
          <Route path="/trash/:noteId?" component={Trash} />
          <Route path="/:noteId?" component={Notes} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
