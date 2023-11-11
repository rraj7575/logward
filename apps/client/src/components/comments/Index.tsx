import { useEffect, useState } from "react";
import { useComment } from "../../hooks/useComment";
import { AddOrUpdateComment } from "./AddOrUpdateComment";
import { Comment } from "./Comment";
import { AddCommentAndComments, CommentsContainer } from "./Index.styled";
import { INITIAL_STATE } from "./constant";
import type { CommentDetails, CommentType } from "./types";

export default function Comments() {
  const [comments, setComments] = useState<CommentDetails>(() => {
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : INITIAL_STATE;
  });

  const { deleteComment, editComment, addComment } = useComment();

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

  const { items } = comments;

  return (
    <CommentsContainer>
      <AddCommentAndComments gutter="1rem">
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
      </AddCommentAndComments>
    </CommentsContainer>
  );
}
