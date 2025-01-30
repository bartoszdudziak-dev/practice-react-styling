import React from "react";
import { StyledBreadcrumb } from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

function Breadcrumb({ children }) {
  return (
    <nav>
      <StyledBreadcrumb>{children}</StyledBreadcrumb>
    </nav>
  );
}

export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});
