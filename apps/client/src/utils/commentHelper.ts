import type { CommentDetails, CommentType } from "../components/comments/types";

const addComment = (
  comments: CommentDetails,
  parentCommentId: number,
  newCommentDetails: CommentType
): CommentDetails => {
  const { name, comment } = newCommentDetails;
  const { id, items } = comments;

  if (id === parentCommentId) {
    const childCommentsOfCurrentParent = [...items];
    const date = new Date();
    childCommentsOfCurrentParent.unshift({
      comment,
      date,
      id: date.getTime(),
      name,
      items: [],
    });

    return { ...comments, items: childCommentsOfCurrentParent };
  }

  const childComments = items.map((commentDetails) => {
    return addComment(commentDetails, parentCommentId, newCommentDetails);
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
    return { ...comments, comment };
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

const sortByDateAndTime = (
  comments: CommentDetails,
  isAssending: boolean,
  depth: number = 0
): CommentDetails => {
  const { items } = comments;

  if (items.length === 0) {
    return comments;
  }

  let childComments = [...items];

  if (isAssending) {
    childComments.sort((comment1, comment2) => comment2.id - comment1.id);
  } else {
    childComments.sort((comment1, comment2) => comment1.id - comment2.id);
  }

  childComments = childComments.map((item) => {
    return sortByDateAndTime(item, isAssending, depth);
  });

  return { ...comments, items: childComments };
};

export { addComment, editComment, deleteComment, sortByDateAndTime };
