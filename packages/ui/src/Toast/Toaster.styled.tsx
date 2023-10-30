import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const ToastContainerStyled = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    width: 40.8rem;
    padding: unset;
  }

  .Toastify__toast {
    min-height: auto;
    padding: unset;
    font-family: unset;
    box-shadow: unset;
  }

  .Toastify__toast-body {
    padding: unset;
  }

  .animateEnter {
    opacity: 1;
    animation: 0.2s animateEnter;
    animation-fill-mode: forwards;
  }

  @keyframes animateEnter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animateLeave {
    animation: 0.2s animateLeave;
    animation-fill-mode: forwards;
  }

  @keyframes animateLeave {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
