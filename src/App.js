import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNote } from "./features/notes/actions/notesActions";

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
  return <div>App</div>;
}

export default App;
