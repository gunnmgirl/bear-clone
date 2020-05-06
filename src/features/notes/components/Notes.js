import React from "react";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//import { PlusSquare } from "react-feather";

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  const history = useHistory();
  //const dispatch = useDispatch();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} onClick={() => history.push(`${note.id}`)}>
          {note.text}
        </div>
      ))}
    </div>
  );
}

export default Notes;
