import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PLACEMENT } from "@malcodeman/react-popover";
import { Sidebar, Columns, Square, Layout } from "react-feather";
import styled from "styled-components";

import { toggleSidebars } from "../../layout/actions/layoutActions";

const StyledPopover = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.tertiaryBackground};
`;

const StyledSidebarIcon = styled(Sidebar)`
  color: ${(props) => props.theme.primary};
`;

const Wrapper = styled.div`
  padding: 0.6rem 0.6rem;
  display: flex;
`;

const Item = styled.div`
  padding: 0 0.4rem;
`;

function ToggleSidebarPopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const sidebars = useSelector((state) => state.layout.sidebars);

  function handleOnClick() {
    dispatch(toggleSidebars(!sidebars));
  }

  console.log(sidebars);

  function content() {
    return (
      <StyledPopover>
        <Wrapper>
          <Item>
            <Layout strokeWidth="1" />
          </Item>
          <Item>
            <Columns strokeWidth="1" />
          </Item>
          <Item>
            <Square strokeWidth="1" onClick={handleOnClick} />
          </Item>
        </Wrapper>
      </StyledPopover>
    );
  }

  return (
    <Popover
      isOpen={isOpen}
      content={content}
      onClickOutside={() => setIsOpen(false)}
      placement={PLACEMENT.TOP}
    >
      <StyledSidebarIcon strokeWidth="1" onClick={() => setIsOpen(!isOpen)} />
    </Popover>
  );
}

export default ToggleSidebarPopover;
