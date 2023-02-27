import { css } from "styled-components/macro";

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*  Remove default margin */
  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  /*  Typographic tweaks! */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /*  media defaults  */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /*  Remove built-in form typography styles  */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /*  text overflows  */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
  9. Create a root stacking context
*/
  #root {
    isolation: isolate;
  }
`;

export default reset;
