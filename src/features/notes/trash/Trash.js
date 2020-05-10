import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Editor from "../components/Editor";

import styled from "styled-components";
import { formatDistanceStrict } from "date-fns";

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

const NoteItem = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const TimeIconWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const Preview = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  word-break: break-all;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Text = styled.p``;

function Trash() {
  const notes = useSelector((state) => state.notes.trash);
  const history = useHistory();

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
              onClick={() => history.push(`/trash/${note.id}`)}
            >
              <TimeIconWraper>
                <span>
                  {formatDistanceStrict(
                    new Date(),
                    new Date(note.modificationDate)
                  )}
                </span>
              </TimeIconWraper>
              <Preview>
                <Text>{note.text.substring(0, 90)}</Text>
              </Preview>
            </NoteItem>
          ))}
        </NotesContainer>
      </StyledNotes>
      <Editor readonly />
    </>
  );
}

export default Trash;
