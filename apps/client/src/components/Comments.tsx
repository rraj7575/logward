import { useEffect, useState } from "react";
import { useComment } from "../hooks/useComment";
import { AddOrUpdateComment } from "./AddOrUpdateComment";
import { Comment } from "./Comment";
import { CommentsContainer } from "./Comment.styled";
import { INITIAL_STATE } from "./constant";
import type { CommentDetails, CommentType } from "./types";

export function Comments() {
  const [comments, setComments] = useState<CommentDetails>(INITIAL_STATE);

  const { deleteComment, editComment, addComment } = useComment();

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    const parsedValue = savedComments
      ? JSON.parse(savedComments)
      : INITIAL_STATE;

    if (parsedValue !== null) {
      setComments(parsedValue);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (comments.items.length > 0) {
        localStorage.setItem("comments", JSON.stringify(comments));
      }
    };
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

  const { items } = comments;

  return (
    <CommentsContainer>
      <AddOrUpdateComment
        addComment={handleAddComment}
        commentId={INITIAL_STATE.id}
        mode="add"
        commentDetails={INITIAL_STATE}
        title="Comment"
      />

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
    </CommentsContainer>
  );
}
