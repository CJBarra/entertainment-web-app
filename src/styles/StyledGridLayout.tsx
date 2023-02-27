import styled from "styled-components/macro";

const StyledGridLayout = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  .item__img {
    position: relative;
    backface-visibility: hidden;
  }

  .item__img:before {
    --gradient-overlay: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );
    cursor: pointer;
    position: absolute;
    content: "";
    background: var(--gradient-overlay);
    z-index: 1;
    inset: 0;
    opacity: 0;
    transition: all 300ms ease;
  }

  .item__img:hover:before {
    opacity: 1;
  }

  /* Media - Phone */
  // 600px
  @media (min-width: 37.5rem) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    row-gap: 2rem;
    column-gap: 2.5rem;
  }
`;

export default StyledGridLayout;
