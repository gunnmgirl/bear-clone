import React from "react";
import { Popover } from "@malcodeman/react-popover";
import { Info } from "react-feather";
import styled from "styled-components";
import { format } from "date-fns";

const StyledPopover = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Wrapper = styled.div`
  padding: 0.5rem 0.5rem;
`;

const DateWrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

function InfoPopover({ note }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [words, setWords] = React.useState([]);
  const [paragraphs, setParagraphs] = React.useState([]);

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    if (note) {
      setWords(note.text.match(/\b[-?(\w+)?]+\b/gi));
      setParagraphs(note.text.split(/\n*\n/g));
    }
  }, [note]);

  function getCharNumber() {
    const noSpace = note.text.replace(/ /g, "");
    const noNewline = noSpace.replace(/(\r\n|\n|\r)/gm, "");
    return noNewline.length;
  }

  function content() {
    return (
      <StyledPopover>
        <Wrapper>
          <DateWrapper>
            <span>
              {format(new Date(note.modificationDate), "d MMMM yyyy")}
            </span>
            <span>modification date</span>
          </DateWrapper>
          <InfoWrapper>
            <DateWrapper>
              <span>{words.length}</span>
              <span>words</span>
            </DateWrapper>
            <DateWrapper>
              <span>{paragraphs.length}</span>
              <span>paragraphs</span>
            </DateWrapper>
            <DateWrapper>
              <span>{getCharNumber()}</span>
              <span>characters</span>
            </DateWrapper>
          </InfoWrapper>
          <DateWrapper>
            <span>{format(new Date(note.creationDate), "d MMMM yyyy")}</span>
            <span>creation date</span>
          </DateWrapper>
        </Wrapper>
      </StyledPopover>
    );
  }

  return (
    <Popover
      isOpen={isOpen}
      content={content}
      onClickOutside={() => setIsOpen(false)}
    >
      <Info onClick={handleOnClick} />
    </Popover>
  );
}

export default InfoPopover;
