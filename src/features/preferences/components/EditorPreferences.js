import React from "react";
import styled from "styled-components";

const StyledEditorPreferences = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

const StyledSelect = styled.select`
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.primary};
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
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.tertiaryBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3%;
`;

function EditorPreferences() {
  const INITIAL_VALUES = {
    fontFamily: "Georgia",
    fontSize: 1,
    lineHeight: 1,
    lineWidth: 1,
    paragraphSpacing: 1,
  };
  const [fontFamily, setFontFamily] = React.useState(INITIAL_VALUES.fontFamily);
  const [fontSize, setFontSize] = React.useState(INITIAL_VALUES.fontSize);
  const [lineHeight, setLineHeight] = React.useState(INITIAL_VALUES.lineHeight);
  const [lineWidth, setLineWidth] = React.useState(INITIAL_VALUES.lineWidth);
  const [paragraphSpacing, setParagraphSpacing] = React.useState(
    INITIAL_VALUES.paragraphSpacing
  );

  function ResetToDefault() {
    setFontFamily(INITIAL_VALUES.fontFamily);
    setFontSize(INITIAL_VALUES.fontSize);
    setLineHeight(INITIAL_VALUES.lineHeight);
    setLineWidth(INITIAL_VALUES.lineWidth);
    setParagraphSpacing(INITIAL_VALUES.paragraphSpacing);
  }

  return (
    <StyledEditorPreferences>
      <Values>
        <AdjustItem>
          <Adjust style={{ paddingRight: "3.6rem" }}>
            <StyledSelect
              value={fontFamily}
              onChange={(event) => setFontFamily(event.target.value)}
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
              value={fontSize}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) => setFontSize(event.target.value)}
            />
          </Adjust>
          <LabelWrapper>Font size</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={lineHeight}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) => setLineHeight(event.target.value)}
            />
          </Adjust>
          <LabelWrapper>Line height</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={lineWidth}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) => setLineWidth(event.target.value)}
            />
          </Adjust>
          <LabelWrapper>Line width</LabelWrapper>
        </AdjustItem>
        <AdjustItem>
          <Adjust>
            <input
              value={paragraphSpacing}
              type="range"
              min="1"
              max="4"
              step="0.5"
              onChange={(event) => setParagraphSpacing(event.target.value)}
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
