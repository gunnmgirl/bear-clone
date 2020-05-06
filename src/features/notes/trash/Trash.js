import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Editor from "../components/Editor";

function Trash() {
  const notes = useSelector((state) => state.notes.trash);
  const history = useHistory();

  return (
    <>
      <div>
        {notes.map((note) => (
          <div key={note.id} onClick={() => history.push(`/trash/${note.id}`)}>
            {note.text}
          </div>
        ))}
      </div>
      <Editor />
    </>
  );
}
export default Trash;
