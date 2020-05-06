import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PlusSquare } from "react-feather";

import { addNote } from "../actions/notesActions";
import Editor from "./Editor";

const payload = {
  text: "Treca note",
  id: 9,
};

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <PlusSquare
          onClick={() => {
            dispatch(addNote(payload));
            history.push(`${payload.id}`);
          }}
        />
        {notes.map((note) => (
          <div key={note.id} onClick={() => history.push(`${note.id}`)}>
            {note.text}
          </div>
        ))}
      </div>
      <Editor />
    </>
  );
}

export default Notes;
