import { createGlobalStyle } from 'styled-components';

export const Spacings = createGlobalStyle`
    :root {
        /** Spacings */
        --spacing-xs: 0.3rem;
        --spacing-xs-sm: 0.575rem;
        --spacing-sm: 0.875rem;
        --spacing-reg: 1rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3.5rem;
    }
`;
