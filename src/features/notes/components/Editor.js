import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { addContent } from "../actions/notesActions";
import image from "../../../images/empty.png";

const StyledEditor = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  border-left: 1px solid ${(props) => props.theme.border};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
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

function Editor() {
  const { noteId } = useParams();
  const [input, setInput] = React.useState("");
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      setInput(note.text);
    }
  }, [noteId, notes]);

  if (noteId) {
    return (
      <StyledEditor>
        <Container>
          <StyledTextarea
            autoFocus
            onBlur={() => dispatch(addContent({ text: input, id: noteId }))}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Container>
      </StyledEditor>
    );
  }
  return <Void image={image}></Void>;
}

export default Editor;
