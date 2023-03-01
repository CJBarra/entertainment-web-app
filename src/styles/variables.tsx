import { css } from "styled-components/macro";

const variables = css`
  :root {
    --theme-primary: hsl(223, 30%, 9%);
    --theme-secondary: hsl(223, 23%, 46%);
    --theme-accent: hsl(0, 97%, 63%);

    /* fonts */
    --text-primary: hsl(0, 0%, 100%);
    --text-hover: hsl(223, 36%, 14%);

    --font-family: "Outfit", sans-serif;

    /* sizings */
    --fw-300: 300;
    --fw-reg: 500;

    --heading-lg: 2rem; /* 32px */
    --heading-md: 1.5rem; /* 24px */
    --heading-xs: 1.125rem; /* 18px */

    --body-m: 0.9375rem; /* 15px */
    --body-sm: 0.8125rem; /* 13px */
    --body-xs: 0.6rem; /* 11px */
  }
`;

export default variables;
