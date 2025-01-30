import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  color: gray;

  &:not(:first-child)::before {
    content: "/";
    padding-inline: 0.5rem;
  }
`;

export { StyledBreadcrumbItem };
