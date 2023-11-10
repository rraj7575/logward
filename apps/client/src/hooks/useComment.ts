import type { CommentDetails, CommentType } from "../components/types";

export const useComment = () => {
  const addComment = (
    comments: CommentDetails,
    commentId: number,
    newCommentDetails: CommentType
  ): CommentDetails => {
    const { name, comment } = newCommentDetails;
    const { id, items } = comments;

    if (id === commentId) {
      const date = new Date();
      items.push({
        comment,
        date,
        id: date.getTime(),
        name,
        items: [],
      });

      return comments;
    }

    const childComments = items.map((commentDetails) => {
      return addComment(commentDetails, commentId, newCommentDetails);
    });

    return { ...comments, items: childComments };
  };

  const editComment = (
    comments: CommentDetails,
    commentId: number,
    newCommentDetails: CommentType
  ): CommentDetails => {
    const { comment } = newCommentDetails;

    if (comments.id === commentId) {
      comments.comment = comment;
      return comments;
    }

    const childComments = comments.items.map((commentDetails) => {
      return editComment(commentDetails, commentId, newCommentDetails);
    });

    return { ...comments, items: childComments };
  };

  const deleteComment = (comments: CommentDetails, id: number) => {
    const { items } = comments;
    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i];

      if (currentItem.id === id) {
        items.splice(i, 1);
        return comments;
      } else {
        deleteComment(currentItem, id);
      }
    }

    return comments;
  };

  return { addComment, editComment, deleteComment };
};
