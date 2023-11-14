import type { CommentDetails } from "./types";

export const MODE = {
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

export const ERROR_MESSAGE = {
  requiredField: "This field is required.",
};
