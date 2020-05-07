import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PlusSquare } from "react-feather";
import { nanoid } from "nanoid";
import styled from "styled-components";

import { addNote } from "../actions/notesActions";
import Editor from "./Editor";

const StyledNotes = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
`;

function payload() {
  return {
    text: "Treca note",
    id: nanoid(),
  };
}

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <StyledNotes>
        <PlusSquare
          onClick={() => {
            dispatch(addNote(payload()));
            history.push(`${payload.id}`);
          }}
        />
        {notes.map((note) => (
          <div key={note.id} onClick={() => history.push(`${note.id}`)}>
            Some text
          </div>
        ))}
      </StyledNotes>
      <Editor />
    </>
  );
}

export default Notes;
