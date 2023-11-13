import { Inline, Stack } from "@bedrock-layout/primitives";
import styled from "styled-components";
import { Typography } from "ui";

export const CommentsContainer = styled(Inline)`
  min-height: 100%;
  min-width: 100%;
  justify-content: center;
`;

export const AddCommentAndComments = styled(Stack)`
  padding: 2rem 0;
  width: 40%;
`;

export const ChildrenRightContainer = styled(Inline)`
  width: 100%;
  justify-content: flex-end;
`;

export const CommentContainer = styled.div`
  position: relative;
  background-color: var(--color-solitudeSecondary);
  padding: 1rem 1.5rem;
`;

export const NameAndDateContainer = styled(Inline)`
  justify-content: space-between;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
`;

export const AddCommentContainer = styled.div`
  background-color: var(--color-solitudeSecondary);
  padding: 1.5rem;
`;

export const ChildCommentContainer = styled.div`
  padding-left: 6.5rem;
`;

export const SortByDateContainer = styled(Typography)`
  padding-right: 2rem;
`;
