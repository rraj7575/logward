import { cssTransition } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { ToastContainerStyled } from './Toaster.styled';

injectStyle();

const fadeTransition = cssTransition({
  enter: 'animateEnter',
  exit: 'animateLeave',
});

export function Toaster() {
  return (
    <ToastContainerStyled
      position="bottom-left"
      containerId="nectedToasterContainer"
      autoClose={5000}
      hideProgressBar
      closeButton={false}
      icon={false}
      transition={fadeTransition}
    />
  );
}
