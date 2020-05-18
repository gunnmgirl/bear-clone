import React from "react";
import { Popover } from "@malcodeman/react-popover";
import { formatDistanceToNowStrict } from "date-fns";
import styled from "styled-components";

const StyledNoteItem = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

const TimeIconWraper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.8rem;
  min-width: 3.5rem;
`;

const Preview = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  word-break: break-all;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const Text = styled.p`
  margin-right: 0.8rem;
`;

function NoteItem(props) {
  const { note, onClick, content } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOnContextMenu(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleOnClick() {
    setIsOpen(false);
    onClick();
  }

  return (
    <StyledNoteItem>
      <TimeIconWraper>
        <span>
          {formatDistanceToNowStrict(new Date(note.modificationDate))}
        </span>
      </TimeIconWraper>
      <Popover
        isOpen={isOpen}
        content={content}
        onClickOutside={() => setIsOpen(false)}
      >
        <Preview onContextMenu={handleOnContextMenu} onClick={handleOnClick}>
          <Text>{note.text.substring(0, 90)}</Text>
        </Preview>
      </Popover>
    </StyledNoteItem>
  );
}

export default NoteItem;
