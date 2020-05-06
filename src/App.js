import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import SideNav from "./features/sideNav/SideNav";
import Notes from "./features/notes/components/Notes";
import Archive from "./features/notes/archive/Archive";
import Trash from "./features/notes/trash/Trash";
import Editor from "./features/notes/components/Editor";

//import { useDispatch } from "react-redux";

//import { addNote } from "./features/notes/actions/notesActions";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

/*const payload = {
  text: "Treca note",
};*/

function App() {
  //const dispatch = useDispatch();

  /*React.useEffect(() => {
    dispatch(addNote(payload));
  }, [dispatch]);*/

  return (
    <BrowserRouter>
      <Layout>
        <SideNav />
        <Switch>
          <Route path="/archive" component={Archive} />
          <Route path="/trash" component={Trash} />
          <Route path="/" component={Notes} />
        </Switch>
        <Editor />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
