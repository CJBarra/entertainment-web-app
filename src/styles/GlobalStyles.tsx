import { createGlobalStyle } from "styled-components/macro";
import reset from "./reset";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}

  body {
    background-color: var(--theme-primary);
    font-family: var(--font-family);
    font-weight: var(--fw-300);
    color: var(--text-primary);
    padding-inline: 1rem;
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
    font-size: var(--body-m);
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
    background-color: var(--theme-accent);
  }

  button:hover, button:focus {
    background-color: var(--text-primary);
    color: var(--text-hover);
  }

  picture > img {
    position: relative;
    border-radius: 8px;
  }

  .container {
    position: relative;
    padding-inline: 2rem;
  }
  .container:first-child {
    padding-left: 0;
  }
  .container:last-child {
    padding-right: 0;
  }

  .absolute {
    position: absolute;
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
