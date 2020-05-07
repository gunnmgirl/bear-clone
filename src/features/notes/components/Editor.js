import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { addContent } from "../actions/notesActions";

const StyledEditor = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
`;

function Editor() {
  const { noteId } = useParams();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  if (noteId) {
    return (
      <StyledEditor>
        <div>
          <textarea
            onBlur={() => dispatch(addContent({ text: input, id: noteId }))}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
      </StyledEditor>
    );
  }
  return <div>Note not selected</div>;
}

export default Editor;
