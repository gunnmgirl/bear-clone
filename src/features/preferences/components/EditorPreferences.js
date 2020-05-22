import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  changeFontFamily,
  changeFontSize,
  changeLineHeight,
  changeLineWidth,
  changeParagraphSpacing,
} from "../actions/preferencesActions";

const StyledEditorPreferences = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

const StyledSelect = styled.select`
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primaryBackground};
`;

const Adjust = styled.div`
  padding: 0.2rem 0.2rem;
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdjustItem = styled.div`
  display: flex;
  padding: 0.2rem 0;
`;

const Reset = styled.div`
  align-self: flex-end;
`;

const LabelWrapper = styled.span`
  padding: 0.4rem 0;
  color: ${(props) => props.theme.primary};
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.highlight};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3%;
`;

function EditorPreferences() {
  const dispatch = useDispatch();
  const editor = useSelector((state) => state.preferences.editor);

  function ResetToDefault() {}

  return (
    <StyledEditorPreferences>
      <Values>
        <AdjustItem>
          <Adjust style={{ paddingRight: "3.6rem" }}>
            <StyledSelect
              value={editor.fontFamily}
              onChange={(event) => {
                dispatch(changeFontFamily(event.target.value));
              }}
            >
              <option value="Avenir Next">Avenir Next</option>
              <option value="System">System</option>
              <option value="Menlo">Menlo</option>
              <option value="Helvetica Neue">Helvetica Neue</option>
              <option value="Georgia">Georgia</option>
              <option value="Courier">Courier</option>
              <option value="Open Dyslexic">Open Dyslexic</option>
            </StyledSelect>
          </Adjust>
          <LabelWrapper>Font</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={editor.fontSize}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) => dispatch(changeFontSize(event.target.value))}
            />
          </Adjust>
          <LabelWrapper>Font size</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={editor.lineHeight}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) =>
                dispatch(changeLineHeight(event.target.value))
              }
            />
          </Adjust>
          <LabelWrapper>Line height</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={editor.lineWidth}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) =>
                dispatch(changeLineWidth(event.target.value))
              }
            />
          </Adjust>
          <LabelWrapper>Line width</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={editor.paragraphSpacing}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) =>
                dispatch(changeParagraphSpacing(event.target.value))
              }
            />
          </Adjust>
          <LabelWrapper>Paragraph spacing</LabelWrapper>
        </AdjustItem>
      </Values>
      <Reset>
        <StyledButton onClick={ResetToDefault}>Reset to defaults</StyledButton>
      </Reset>
    </StyledEditorPreferences>
  );
}

export default EditorPreferences;
