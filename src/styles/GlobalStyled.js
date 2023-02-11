import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    }
  
  :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-white: #ffffff;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --color-negative: #E60000;
        --color-warning:  #FFCD07;

        --color-sucess: #168821;
        --color-information: #155BCB;

        --font-weight-700: 700;
        --font-weight-600: 600;
        --font-weight-500: 500;
        --font-weight-400: 400;

        --font-size-26: 1.625rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.875rem;
        --font-size-12: 0.75rem;
        

        --line-height-34: 2.125rem;
        --line-height-24: 1.5rem;
        --line-height-20: 1.25rem;
        --line-height-16: 1rem;
      
    }
  
    body{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        background-color: var(--color-grey-4);
    }
`;
