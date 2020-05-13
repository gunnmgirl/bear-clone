import React from "react";
import { Popover } from "@malcodeman/react-popover";
import { Info } from "react-feather";
import styled from "styled-components";
import { format } from "date-fns";

const StyledPopover = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.tertiaryBackground};
`;

const Wrapper = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ItemWrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-top: 1px solid ${(props) => props.theme.border};
  margin: 1rem 0;
  padding: 1rem 0;
`;

const Num = styled.span`
  color: ${(props) => props.theme.highlight};
  font-weight: 200;
`;

const Text = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondary};
`;

const Dates = styled.span`
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.3rem;
`;

const StyledInfoIcon = styled(Info)`
  color: ${(props) => props.theme.secondary};
`;

function InfoPopover({ note }) {
  const WORDS_PER_MIN = 200;
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

  function getReadingTime() {
    const time = words.length / WORDS_PER_MIN;
    return Math.ceil(time);
  }

  function content() {
    return (
      <StyledPopover>
        <Wrapper>
          <ItemWrapper>
            <Dates>
              {format(new Date(note.modificationDate), "d MMMM yyyy")}
            </Dates>
            <Text>modification date</Text>
          </ItemWrapper>
          <InfoWrapper>
            <ItemWrapper>
              <Num>{words.length}</Num>
              {words.length === 1 ? <Text>word</Text> : <Text>words</Text>}
            </ItemWrapper>
            <ItemWrapper>
              <Num>{paragraphs.length}</Num>
              {paragraphs.length === 1 ? (
                <Text>paragraph</Text>
              ) : (
                <Text>paragraphs</Text>
              )}
            </ItemWrapper>
            <ItemWrapper>
              <Num>{getCharNumber()}</Num>
              <Text>characters</Text>
            </ItemWrapper>
            <ItemWrapper>
              <Num>{getReadingTime()}min</Num>
              <Text>read time</Text>
            </ItemWrapper>
          </InfoWrapper>
          <ItemWrapper>
            <Dates>{format(new Date(note.creationDate), "d MMMM yyyy")}</Dates>
            <Text>creation date</Text>
          </ItemWrapper>
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
      <StyledInfoIcon onClick={handleOnClick} stroke-width="1.5" />
    </Popover>
  );
}

export default InfoPopover;
