import React from "react";
import { Popover } from "@malcodeman/react-popover";
import { formatDistanceStrict } from "date-fns";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteNote, archiveNote } from "../actions/notesActions";

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

const StyledPopover = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Menu = styled.ul`
  padding: 0.25rem 1rem;
  margin: 0;
`;

const MenuItem = styled.li`
  font-family: "Roboto", sans-serif;
  list-style: none;
  padding: 0.25rem 1rem;
  cursor: pointer;
  color: #333;
  border-radius: 3px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

function NoteItem(props) {
  const { note } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleOnContextMenu(event) {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  function content() {
    return (
      <StyledPopover>
        <Menu>
          <MenuItem
            onClick={() => {
              setIsOpen(false);
              dispatch(deleteNote(note));
            }}
          >
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => {
              setIsOpen(false);
              dispatch(archiveNote(note));
            }}
          >
            Archive
          </MenuItem>
        </Menu>
      </StyledPopover>
    );
  }

  return (
    <Popover
      isOpen={isOpen}
      content={content}
      onClickOutside={() => setIsOpen(false)}
    >
      <StyledNoteItem
        onContextMenu={handleOnContextMenu}
        onClick={() => {
          setIsOpen(false);
          history.push(`${note.id}`);
        }}
      >
        <TimeIconWraper>
          <span>
            {formatDistanceStrict(new Date(), new Date(note.modificationDate))}
          </span>
        </TimeIconWraper>
        <Preview>
          <Text>{note.text.substring(0, 90)}</Text>
        </Preview>
      </StyledNoteItem>
    </Popover>
  );
}

export default NoteItem;
