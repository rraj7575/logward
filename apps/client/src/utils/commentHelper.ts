import type { CommentDetails, CommentType } from "../components/comments/types";

const addComment = (
  comments: CommentDetails,
  commentId: number,
  newCommentDetails: CommentType
): CommentDetails => {
  const { name, comment } = newCommentDetails;
  const { id, items } = comments;

  if (id === commentId) {
    const date = new Date();

    items.unshift({
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

const sortByDateAdded = (comments: CommentDetails, isAssending: boolean) => {
  const { items } = comments;

  if (items.length === 0) {
    return comments;
  }

  if (isAssending) {
    items.sort((comment1, comment2) => comment2.id - comment1.id);
  } else {
    items.sort((comment1, comment2) => comment1.id - comment2.id);
  }

  items.forEach((item) => {
    sortByDateAdded(item, isAssending);
  });

  return comments;
};

export { addComment, editComment, deleteComment, sortByDateAdded };
