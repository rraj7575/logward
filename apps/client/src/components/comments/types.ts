export type CommentType = {
  name: string;
  comment: string;
};

export type CommentDetails = CommentType & {
  date: Date;
  id: number;
  items: CommentDetails[];
};
