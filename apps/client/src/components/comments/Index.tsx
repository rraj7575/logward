import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AddOrUpdateComment } from "./AddOrUpdateComment";
import { Comment } from "./Comment";
import {
  AddCommentAndComments,
  ChildrenRightContainer,
  CommentsContainer,
  SortByDateContainer,
} from "./Index.styled";

import { INITIAL_STATE } from "./constant";
import {
  deleteComment,
  editComment,
  addComment,
  sortByDateAdded,
} from "../../utils/commentHelper";

import type { CommentDetails, CommentType } from "./types";
import { Inline } from "@bedrock-layout/primitives";

export default function Comments() {
  const [isAssendingOrder, setIsAssendingOrder] = useState(true);

  const [comments, setComments] = useState<CommentDetails>(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments
      ? sortByDateAdded(JSON.parse(savedComments), true)
      : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (
    commentId: number,
    newCommentDetails: CommentType
  ) => {
    const newComments = addComment(
      structuredClone(comments),
      commentId,
      newCommentDetails
    );
    setComments(newComments);
  };

  const handleEditComment = (
    commentId: number,
    commentDetails: CommentType
  ) => {
    const updatedComments = editComment(
      structuredClone(comments),
      commentId,
      commentDetails
    );

    setComments(updatedComments);
  };

  const handleDeleteComment = (commentId: number) => {
    let newComments = deleteComment(structuredClone(comments), commentId);
    setComments(newComments);
  };

  const handleClickSort = () => {
    let sortedComments = sortByDateAdded(
      structuredClone(comments),
      !isAssendingOrder
    );

    setComments(sortedComments);
    setIsAssendingOrder((prev) => !prev);
  };

  const { items } = comments;

  return (
    <CommentsContainer>
      <AddCommentAndComments gutter="1rem">
        <AddOrUpdateComment
          handleCommentSubmit={handleAddComment}
          commentId={INITIAL_STATE.id}
          mode="add"
          commentDetails={INITIAL_STATE}
          title="Comment"
        />

        {items.length > 0 && (
          <ChildrenRightContainer>
            <SortByDateContainer>
              <Inline onClick={handleClickSort}>
                Sort By: Date and Time
                {isAssendingOrder ? (
                  <AiOutlineArrowUp size={20} />
                ) : (
                  <AiOutlineArrowDown size={20} />
                )}
              </Inline>
            </SortByDateContainer>
          </ChildrenRightContainer>
        )}

        {items.map((commentDetails) => {
          const { id } = commentDetails;

          return (
            <Comment
              key={id}
              commentDetails={commentDetails}
              handleAddComment={handleAddComment}
              handleDeleteComment={handleDeleteComment}
              handleEditComment={handleEditComment}
              depth={1}
            />
          );
        })}
      </AddCommentAndComments>
    </CommentsContainer>
  );
}
