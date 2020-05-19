import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { addContent } from "../actions/notesActions";
import image from "../../../images/empty.png";
import InfoPopover from "./InfoPopover";
import ToggleSidebarPopover from "./ToggleSidebarPopover";

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const StyledEditor = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  border-left: 1px solid ${(props) => props.theme.border};
  overflow-y: auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem 2rem ${(props) => `${props.lineWidth}rem`};
  display: flex;
  align-items: flex-start;
`;

const StyledTextarea = styled.textarea`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  width: 100%;
  height: 100%;
  border: 0;
  background-color: ${(props) => props.theme.primaryBackground};
  resize: none;
  color: ${(props) => props.theme.primary};
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
  const editor = useSelector((state) => state.preferences.editor);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const note = notes.find((note) => note.id === noteId);
    if (note) {
      setInput(note.text);
      setNote(note);
      console.log(note.text);
    }
  }, [noteId, notes]);
  if (noteId) {
    return (
      <StyledEditor>
        <Container lineWidth={editor.lineWidth}>
          <StyledTextarea
            readOnly={readonly}
            fontFamily={editor.fontFamily}
            fontSize={editor.fontSize}
            lineHeight={editor.lineHeight}
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
          <IconsWrapper>
            <InfoPopover note={note} />
            <ToggleSidebarPopover />
          </IconsWrapper>
        </Container>
      </StyledEditor>
    );
  }
  return <Void image={image}></Void>;
}

export default Editor;
