import React from "react";
import { Popover } from "@malcodeman/react-popover";
import { formatDistanceStrict } from "date-fns";
import styled from "styled-components";

const StyledNoteItem = styled.div`
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

function NoteItem(props) {
  const { note, onClick, content } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOnContextMenu(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  function handleOnClick() {
    onClick();
    setIsOpen(false);
  }

  return (
    <StyledNoteItem onContextMenu={handleOnContextMenu} onClick={handleOnClick}>
      <TimeIconWraper>
        <span>
          {formatDistanceStrict(new Date(), new Date(note.modificationDate))}
        </span>
      </TimeIconWraper>
      <Popover
        isOpen={isOpen}
        content={content}
        onClickOutside={() => setIsOpen(false)}
      >
        <Preview>
          <Text>{note.text.substring(0, 90)}</Text>
        </Preview>
      </Popover>
    </StyledNoteItem>
  );
}

export default NoteItem;
