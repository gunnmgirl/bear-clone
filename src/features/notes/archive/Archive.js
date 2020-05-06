import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Editor from "../components/Editor";

function Archive() {
  const notes = useSelector((state) => state.notes.archive);
  const history = useHistory();

  return (
    <>
      <div>
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => history.push(`/archive/${note.id}`)}
          >
            {note.text}
          </div>
        ))}
      </div>
      <Editor />
    </>
  );
}
export default Archive;
