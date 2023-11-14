import { useState } from "react";
import format from "date-fns/format";
import { TextButton, Typography } from "ui";
import { AddOrUpdateComment } from "./AddOrUpdateComment";
import {
  ChildCommentContainer,
  CommentContainer,
  DeleteButtonContainer,
  NameAndDateContainer,
} from "./commentList.styled";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MODE } from "./constant";

import type { CommentDetails, CommentType } from "./types";
import { Inline, Stack } from "@bedrock-layout/primitives";

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
    <div>
      <CommentContainer>
        <Stack gutter="1rem">
          <NameAndDateContainer>
            <Typography name="heading3" fontWeight={700}>
              {name}
            </Typography>

            <Typography>{format(new Date(date), "do MMM yyyy")}</Typography>
          </NameAndDateContainer>

          <Typography>{comment}</Typography>

          <Inline gutter="1rem">
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
          </Inline>
        </Stack>

        <DeleteButtonContainer onClick={() => handleDeleteComment(id)}>
          <RiDeleteBin5Line size={15} color="var(--color-white)" />
        </DeleteButtonContainer>
      </CommentContainer>

      {isEditEnabled && (
        <AddOrUpdateComment
          handleCommentSubmit={(commentId: any, formDate: any) => {
            handleEditComment(commentId, formDate);
            setIsEditEnabled(false);
          }}
          commentDetails={commentDetails}
          mode={MODE.edit}
          title="Edit"
        />
      )}

      <Stack
        gutter="2rem"
        style={{ marginTop: items.length > 0 || isReplyEnabled ? "1rem" : 0 }}
      >
        {isReplyEnabled && (
          <ChildCommentContainer>
            <AddOrUpdateComment
              handleCommentSubmit={(commentId: any, formDate: any) => {
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
      </Stack>
    </div>
  );
}
