import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { addNote } from "./features/notes/actions/notesActions";
import Notes from "./features/notes/components/Notes";
import Archive from "./features/archive/Archive";
import Trash from "./features/trash/Trash";

const payload = {
  text: "Treca note",
};

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  React.useEffect(() => {
    dispatch(addNote(payload));
  }, [dispatch]);

  console.log(notes);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/archive" component={Archive} />
        <Route path="/trash" component={Trash} />
        <Route path="/" exact component={Notes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
