/**
 * Install of @types/styled-components for typescript
 * https://www.npmjs.com/package/@types/styled-components
 *
 * Babel styled components plugin used for smaller bundling.
 *
 * BABEL REQUIRED: 'keyframes' needs the library install of vite-plugin-babel-macros
 * found here: "https://www.npmjs.com/package/vite-plugin-babel-macros"
 *
 * Babel config file '.babelrc' will need to be created in root directory for plugins
 */

import { createGlobalStyle } from 'styled-components/macro';
import reset from './reset';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}

  body {
    background-color: var(--theme-primary);
    font-family: var(--font-family);
    font-weight: var(--fw-300);
    color: var(--text-primary);
    transition: all 300ms ease;

    /* width */
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--text-hover);
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--theme-accent);
      border-radius: 6px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      --scroll-hover: hsl(0, 100%, 46%);
      background: var(--scroll-hover);
    }
  }

  h1 {
    font-size: var(--heading-lg);
    font-weight: var(--fw-300);
  }

  h2 {
    font-weight: var(--fw-300);
  }

  h3 {
    font-weight: var(--fw-reg);
  }

  h2, h3 {
    font-size: var(--heading-md);
  }

  h4 {
    font-size: var(--body-sm);
    font-weight: var(--fw-reg);
  }

  .body-m {
    font-size: var(--body-m);
  }

  .body-sm {
    font-size: var(--body-sm);
    opacity: 0.75;
  }

  input[type=text] {
    opacity: 0.5;
  }

  input[type=text]:active, input[type=text]:focus {
    opacity: 1;
  }

  input[type=text]:required {
    opacity: 1;
    color: var(--theme-accent);
  }

  button {
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 300ms ease;
  }

  button .cta {
    background-color: var(--theme-accent);
  }

  button:hover, button:focus {
    background-color: var(--text-primary);
    color: var(--text-hover);

    svg > path{
      fill: var(--text-hover);
      stroke: var(--text-hover);
    }
  }

  picture > img {
    position: relative;
    border-radius: 0.375rem;
  }

  
  /* Media - Tablet and up */
  /* 600px */
  @media (min-width: 37.5rem){
    h2 {
      font-size: var(--heading-lg);
    }
    h4 {
      font-size: var(--heading-xs);
    }
  }

  /* Media - Desktop and up */
  /* 1200px */
  @media (min-width: 75em) {
    body {
      max-width: 86em;
      margin-inline: auto;
    }
  }
`;

export default GlobalStyle;
