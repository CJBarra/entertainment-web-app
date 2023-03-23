import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledSlider = styled.div`
  position: relative;
  padding: 0;
  max-width: 100%;
  width: 1440px;
  overflow: hidden;

  .slider__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledSliderScroller = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 66.6%;
  column-gap: 1rem;
  overflow-x: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Media - Tablet and up */
  /* 900px */
  @media (min-width: 56.25rem) {
    grid-auto-columns: 36.66%;
  }

  /* 600px */
  @media (min-width: 37.5rem) {
    column-gap: 2rem;
  }
`;

type SliderProps = { children: ReactNode };

function SliderLayout({ children }: SliderProps) {
  return (
    <StyledSlider>
      <StyledSliderScroller>{children}</StyledSliderScroller>
    </StyledSlider>
  );
}

export default SliderLayout;
