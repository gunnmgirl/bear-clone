import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Edit } from "react-feather";
import { nanoid } from "nanoid";
import styled from "styled-components";

import { addNote } from "../actions/notesActions";
import Editor from "./Editor";

const StyledNotes = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  text-align: center;
  margin-right: 0.5rem;
  width: 80%;
`;

const EditIconWrapper = styled(Edit)`
  color: ${(props) => props.theme.secondary};
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
        <StyledSearch>
          <StyledInput placeholder="Search Notes" type="search" />
          <EditIconWrapper
            strokeWidth="1"
            onClick={() => {
              dispatch(addNote(payload()));
              history.push(`${payload().id}`);
            }}
          />
        </StyledSearch>
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
