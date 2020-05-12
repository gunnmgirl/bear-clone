import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { addContent } from "../actions/notesActions";
import image from "../../../images/empty.png";
import InfoPopover from "./InfoPopover";

const StyledEditor = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  border-left: 1px solid ${(props) => props.theme.border};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  align-items: flex-start;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: ${(props) => props.theme.primaryBackground};
  resize: none;
`;

const Void = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-left: 1px solid ${(props) => props.theme.border};
`;

function Editor({ readonly, notes }) {
  const { noteId } = useParams();
  const [input, setInput] = React.useState("");
  const [note, setNote] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      setInput(note.text);
      setNote(note);
    }
  }, [noteId, notes]);

  if (noteId) {
    return (
      <StyledEditor>
        <Container>
          <StyledTextarea
            readOnly={readonly}
            onBlur={() =>
              dispatch(
                addContent({
                  text: input,
                  id: noteId,
                  modificationDate: new Date(),
                })
              )
            }
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <InfoPopover note={note} />
        </Container>
      </StyledEditor>
    );
  }
  return <Void image={image}></Void>;
}

export default Editor;
