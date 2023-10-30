import _isNil from 'lodash/isNil';

import { toasts } from '../Toast';

export const copy = async (textToCopy: string, toastMessage?: string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);

    toasts.info(_isNil(toastMessage) ? 'Text copied' : toastMessage);
  } catch (err) {
    toasts.warning('Unable to copy this text');
  }
};
