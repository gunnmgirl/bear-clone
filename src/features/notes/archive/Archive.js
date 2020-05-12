import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Editor from "../components/Editor";
import NoteItem from "../components/NoteItem";
import { deleteNoteFromArchive, unarchiveNote } from "../actions/notesActions";

const StyledNotes = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
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

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Menu = styled.ul`
  padding: 0.25rem 1rem;
  margin: 0;
`;

const MenuItem = styled.li`
  font-family: "Roboto", sans-serif;
  list-style: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: #333;
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const StyledPopover = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

function Archive() {
  const notes = useSelector((state) => state.notes.archive);
  const history = useHistory();
  const dispatch = useDispatch();

  function content(note) {
    return (
      <StyledPopover>
        <Menu>
          <MenuItem
            onClick={() => {
              dispatch(unarchiveNote(note));
              history.push(`/archive`);
            }}
          >
            Unarchive
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(deleteNoteFromArchive(note));
              history.push(`/archive`);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </StyledPopover>
    );
  }

  return (
    <>
      <StyledNotes>
        <StyledSearch>
          <StyledInput placeholder="Search Notes" type="search" />
        </StyledSearch>
        <NotesContainer>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onClick={() => history.push(`/archive/${note.id}`)}
              content={() => content(note)}
            />
          ))}
        </NotesContainer>
      </StyledNotes>
      <Editor readonly notes={notes} />
    </>
  );
}

export default Archive;
