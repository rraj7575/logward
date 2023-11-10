import styled from "styled-components";

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10rem 50rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const CommentContainer = styled.div`
  position: relative;
  background-color: var(--color-solitude);
  padding: 1rem 1.5rem;
`;

export const NameAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: -1rem;
`;

export const EditButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AddCommentContainer = styled.div`
  background-color: var(--color-solitude);
  padding: 1.5rem;
`;

export const ChildCommentContainer = styled.div`
  padding-left: 1.5rem;
`;
