import styled from "styled-components";

const StyledCard = styled.article`
  overflow: hidden;
  border-radius: 0.25em;
  border: 1px solid lightgray;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.25rem;
`;

const StyledCardBody = styled.div`
  padding: 1.25rem;
`;

const StyledCardText = styled.p``;

const StyledCardImg = styled.img`
  width: 100%;
  object-fit: center;
`;

export {
  StyledCard,
  StyledCardBody,
  StyledCardTitle,
  StyledCardText,
  StyledCardImg,
};
