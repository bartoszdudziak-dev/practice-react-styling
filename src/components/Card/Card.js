import React from "react";
import Button from "../Button";
import {
  StyledCard,
  StyledCardBody,
  StyledCardImg,
  StyledCardText,
  StyledCardTitle,
} from "./Card.styled";

function Card({ children, style }) {
  return <StyledCard style={style}>{children}</StyledCard>;
}

Card.Title = ({ children, style }) => (
  <StyledCardTitle style={style}>{children}</StyledCardTitle>
);
Card.Body = ({ children, style }) => (
  <StyledCardBody style={style}>{children}</StyledCardBody>
);
Card.Text = ({ children, style }) => (
  <StyledCardText style={style}>{children}</StyledCardText>
);
Card.Img = ({ src, alt, style }) => (
  <StyledCardImg src={src} alt={alt} style={style} />
);
Card.Button = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default Card;
