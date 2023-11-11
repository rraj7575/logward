import type { CommentDetails, MODE_TYPE } from "./types";

export const MODE: MODE_TYPE = {
  add: "add",
  edit: "edit",
};

export const INITIAL_STATE: CommentDetails = {
  id: -1,
  items: [],
  date: new Date(),
  name: "",
  comment: "",
};
