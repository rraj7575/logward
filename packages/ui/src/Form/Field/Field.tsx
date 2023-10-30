import _isEmpty from 'lodash/isEmpty';
import { ReactNode } from 'react';
import { ControllerFieldState } from 'react-hook-form';

import { Typography } from '../../Typography';
import { ErrorTextStyled, FieldStyled } from './Field.styled';

export type FieldPropsType = {
  children: ReactNode;
  fieldState: ControllerFieldState;
  showError?: boolean;
  heightFull?: boolean;
  widthFull?: boolean;
};

export function Field({
  children,
  fieldState,
  showError = true,
  heightFull = false,
  widthFull = false,
}: FieldPropsType) {
  const errorMessage = fieldState.error?.message;

  return (
    <FieldStyled
      gutter="0.5rem"
      $heightFull={heightFull}
      $widthFull={widthFull}
    >
      {children}
      {!_isEmpty(errorMessage) && showError && (
        <ErrorTextStyled>
          <Typography name="error">{errorMessage}</Typography>
        </ErrorTextStyled>
      )}
    </FieldStyled>
  );
}
