import { createGlobalStyle } from 'styled-components';

export const Paddings = createGlobalStyle`
    :root {
        /** Button paddings */
        --padding-buttonSmallVertical: .357em; 
        --padding-buttonSmallHorizontal: 2.785em;
        
        --padding-buttonMediumVertical: .64em; 
        --padding-buttonMediumHorizontal: 2.785em; 

        --padding-buttonLargeVertical: .75em; 
        --padding-buttonLargeHorizontal: 3.687em; 

        /** Input padding */
        --padding-inputSmallHorizontal: 1em;
        --padding-inputSmallVertical: .56em;

        --padding-inputWithIconSmallHorizontal: 2em;

        /** Content padding */ 
        --padding-contentVertical: 2em;
    
    }
`;
