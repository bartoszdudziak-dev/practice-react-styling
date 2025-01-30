import React, { useState } from "react";
import { StyledTabs } from "./Tabs.styled";
import styled, { css } from "styled-components";

const Button = styled.a.attrs(() => ({
  href: "#",
}))`
  transition: all 0.2s ease-out;
  padding: 0.5em 1em;
  border: 1px solid transparent;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  margin-block-end: -1px;

  cursor: pointer;

  &:hover {
    text-decoration: none;

    ${({ isActive }) =>
      isActive ? "color: inherit;" : "border-color: #dee2e6;"}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #495057;
      border-color: #dee2e6;
      border-bottom-color: white;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      color: #6c757d;
    `}
`;

function Tabs({ tabs, defaultActiveId }) {
  const [activeTabId, setActiveTabId] = useState(defaultActiveId);

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  return (
    <StyledTabs>
      <nav>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            isActive={activeTabId === tab.id}
            onClick={() => setActiveTabId(tab.id)}
            disabled={tab.disabled}
          >
            {tab.title}
          </Button>
        ))}
      </nav>
      <div>{activeTab.content}</div>
    </StyledTabs>
  );
}

export default Tabs;
