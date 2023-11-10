import { useState } from "react";
import { IconButton, TextButton, Typography } from "ui";
import { AddOrUpdateComment } from "./AddOrUpdateComment";
import {
  ChildCommentContainer,
  CommentContainer,
  DeleteButtonContainer,
  EditButtonContainer,
  NameAndDateContainer,
} from "./Comment.styled";
import { AiFillDelete } from "react-icons/ai";
import { MODE } from "./constant";

import type { CommentDetails, CommentType } from "./types";

export type CommentProps = {
  commentDetails: CommentDetails;
  handleAddComment: (commentId: number, newCommentDetails: CommentType) => void;
  handleDeleteComment: (commentId: number) => void;
  handleEditComment: (commentId: number, commentDetails: CommentType) => void;
  depth: number;
};

export function Comment({
  commentDetails,
  depth,
  handleAddComment,
  handleDeleteComment,
  handleEditComment,
}: CommentProps) {
  const [isReplyEnabled, setIsReplyEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const { comment, name, date, id, items } = commentDetails;

  return (
    <>
      <CommentContainer>
        <NameAndDateContainer>
          <Typography name="heading3">{name}</Typography>

          <Typography> {JSON.stringify(date)}</Typography>
        </NameAndDateContainer>

        <Typography>{comment}</Typography>

        <EditButtonContainer>
          {depth > 0 && (
            <TextButton
              onClick={() => {
                setIsReplyEnabled((prev) => !prev);
                setIsEditEnabled(false);
              }}
            >
              {isReplyEnabled ? "Cancle" : "Reply"}
            </TextButton>
          )}

          <TextButton
            onClick={() => {
              setIsEditEnabled((prev) => !prev);
              setIsReplyEnabled(false);
            }}
          >
            {isEditEnabled ? "Cancle" : "Edit"}
          </TextButton>
        </EditButtonContainer>

        <DeleteButtonContainer>
          <IconButton onClick={() => handleDeleteComment(id)}>
            <AiFillDelete size={20} />
          </IconButton>
        </DeleteButtonContainer>
      </CommentContainer>

      {isEditEnabled && (
        <ChildCommentContainer>
          <AddOrUpdateComment
            addComment={(commentId: any, formDate: any) => {
              handleEditComment(commentId, formDate);
              setIsEditEnabled(false);
            }}
            commentDetails={commentDetails}
            mode={MODE.edit}
            title="Edit"
          />
        </ChildCommentContainer>
      )}

      {isReplyEnabled && (
        <ChildCommentContainer>
          <AddOrUpdateComment
            addComment={(commentId: any, formDate: any) => {
              handleAddComment(commentId, formDate);
              setIsReplyEnabled(false);
            }}
            commentDetails={commentDetails}
            mode={MODE.add}
            title="Reply"
          />
        </ChildCommentContainer>
      )}

      {items.map((commentDetails) => {
        const { id } = commentDetails;

        return (
          <ChildCommentContainer key={id}>
            <Comment
              commentDetails={commentDetails}
              depth={--depth}
              handleAddComment={handleAddComment}
              handleDeleteComment={handleDeleteComment}
              handleEditComment={handleEditComment}
            />
          </ChildCommentContainer>
        );
      })}
    </>
  );
}
