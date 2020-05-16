import React from "react";
import { Modal } from "@malcodeman/react-modal";
import { Sliders, Layers, Type } from "react-feather";
import styled from "styled-components";

import EditorPreferences from "./EditorPreferences";
import ThemePreferences from "./ThemePreferences";

const StyledPreferences = styled.div`
  display: flex;
  justify-content: end;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
`;

const StyledModal = styled.div`
  background-color: ${(props) => props.theme.tertiaryBackground};
  width: 40rem;
  height: 21rem;
  border: 2px solid ${(props) => props.theme.border};
`;

const ToolbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const ToolbarText = styled.span`
  color: ${(props) => props.theme.primary};
  font-size: 0.8rem;
`;

function Preferences() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [editorSelected, setEditorSelected] = React.useState(true);
  return (
    <>
      <StyledPreferences>
        <Sliders size="1.2rem" onClick={() => setIsOpen(!isOpen)} />
      </StyledPreferences>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <StyledModal>
          <Toolbar>
            <ToolbarItem onClick={() => setEditorSelected(false)}>
              <Layers strokeWidth="1" />
              <ToolbarText>Themes</ToolbarText>
            </ToolbarItem>
            <ToolbarItem onClick={() => setEditorSelected(true)}>
              <Type strokeWidth="1" />
              <ToolbarText>Editor</ToolbarText>
            </ToolbarItem>
          </Toolbar>

          {editorSelected ? <EditorPreferences /> : <ThemePreferences />}
        </StyledModal>
      </Modal>
    </>
  );
}

export default Preferences;
