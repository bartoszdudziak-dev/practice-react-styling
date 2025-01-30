import React from "react";
import { StyledBreadcrumbItem } from "./BreadcrumbItem.styled";

function BreadcrumbItem({ children, href, active }) {
  if (active) {
    return <StyledBreadcrumbItem>{children}</StyledBreadcrumbItem>;
  }

  return (
    <StyledBreadcrumbItem>
      <a href={href}>{children}</a>
    </StyledBreadcrumbItem>
  );
}

export default BreadcrumbItem;
