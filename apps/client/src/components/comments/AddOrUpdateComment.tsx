import { Stack } from "@bedrock-layout/primitives";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, TextAreaField, TextField, Typography } from "ui";
import {
  AddCommentContainer,
  ChildrenRightContainer,
} from "./commentList.styled";
import { MODE, ERROR_MESSAGE } from "./constant";
import type { CommentDetails, CommentType } from "./types";

type AddOrUpdateCommentProps = {
  handleCommentSubmit: (commentId: number, formDate: any) => void;
  commentDetails: CommentDetails;
  mode: string;
  title: string;
};

export function AddOrUpdateComment({
  handleCommentSubmit,
  commentDetails,
  mode,
  title,
}: AddOrUpdateCommentProps) {
  const { control, handleSubmit, setValue } = useForm<CommentType>({
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  const { id: commentId, comment, name } = commentDetails;

  useEffect(() => {
    if (mode === MODE.edit) {
      setValue("name", name);
      setValue("comment", comment);
    }
  }, []);

  const onSubmit = (formDate: any) => {
    handleCommentSubmit(commentId, formDate);

    setValue("name", "");
    setValue("comment", "");
  };

  return (
    <AddCommentContainer>
      <Typography name="heading3">{title}</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gutter="1rem">
          {mode === MODE.add && (
            <TextField
              control={control}
              placeholder="Name"
              name="name"
              showErrorIcon={false}
              rules={{ required: ERROR_MESSAGE.requiredField }}
            />
          )}

          <TextAreaField
            control={control}
            placeholder={title}
            name="comment"
            rules={{ required: ERROR_MESSAGE.requiredField }}
          />

          <ChildrenRightContainer>
            <Button
              label={mode === MODE.add ? "POST" : "UPDATE"}
              type="submit"
            />
          </ChildrenRightContainer>
        </Stack>
      </form>
    </AddCommentContainer>
  );
}
