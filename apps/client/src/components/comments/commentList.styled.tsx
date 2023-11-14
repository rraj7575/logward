import { Inline, Stack } from "@bedrock-layout/primitives";
import styled from "styled-components";

export const CommentsContainer = styled(Inline)`
  min-height: 100%;
  min-width: 100%;
  justify-content: center;
`;

export const AddCommentAndComments = styled(Stack)`
  padding: 2rem 0;
  width: 40%;
  border-radius: 0.5rem;
`;

export const ChildrenRightContainer = styled(Inline)`
  width: 100%;
  justify-content: flex-end;
`;

export const CommentContainer = styled.div`
  position: relative;
  background-color: var(--color-solitudeSecondary);
  padding: 1rem var(--padding-commentHorizontalPadding);
  border-radius: 0.5rem;
`;

export const NameAndDateContainer = styled(Inline)`
  justify-content: space-between;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  background-color: var(--color-comment-Background);
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
`;

export const AddCommentContainer = styled.div`
  background-color: var(--color-solitudeSecondary);
  padding: var(--padding-commentHorizontalPadding);
`;

export const ChildCommentContainer = styled.div`
  padding-left: 6.5rem;
`;

export const SortByDateContainer = styled.div`
  padding-right: var(--padding-commentHorizontalPadding);
`;
