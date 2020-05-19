import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Edit3 } from "react-feather";
import { nanoid } from "nanoid";
import styled from "styled-components";

import { addNote, deleteNote, archiveNote } from "../actions/notesActions";
import Editor from "./Editor";
import NoteItem from "./NoteItem";

const StyledNotes = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 100%;
`;

const EditIconWrapper = styled(Edit3)`
  color: ${(props) => props.theme.primary};
`;

const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledPopover = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

function payload() {
  return {
    text:
      "Write beautifully on iPhone, iPad, and Mac. \n \n" +
      "Bear is a beautiful, flexible writing app for crafting notes and prose. Bear works on iPhone, iPad, and Mac, so you can write wherever inspiration strikes. \n \n" +
      "Bear is perfect for everything from quick notes to in-depth essays. Full in-line image support brings your writing to life.",
    id: nanoid(),
    creationDate: new Date(),
    modificationDate: new Date(),
  };
}

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  notes.sort(function (a, b) {
    return new Date(b.modificationDate) - new Date(a.modificationDate);
  });
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const results = notes.filter((note) =>
      note.text
        .substring(0, 90)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(results);
  }, [searchTerm, notes]);

  function content(note) {
    return (
      <StyledPopover>
        <Menu>
          <MenuItem
            onClick={() => {
              history.push(`/`);
              dispatch(deleteNote(note));
            }}
          >
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(archiveNote(note));
              history.push(`/`);
            }}
          >
            Archive
          </MenuItem>
        </Menu>
      </StyledPopover>
    );
  }

  return (
    <>
      <StyledNotes>
        <StyledSearch>
          <StyledInput
            placeholder="Search Notes"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <EditIconWrapper
            strokeWidth="1"
            size="20"
            onClick={() => {
              dispatch(addNote(payload()));
              history.push(`${payload().id}`);
            }}
          />
        </StyledSearch>
        <NotesContainer>
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onClick={() => history.push(`${note.id}`)}
              content={() => content(note)}
            />
          ))}
        </NotesContainer>
      </StyledNotes>
      <Editor readonly={false} notes={notes} />
    </>
  );
}

export default Notes;
