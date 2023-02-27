import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledSlider = styled.div`
  position: relative;
  padding: 0;

  .slider__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledSliderScroller = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 45%;
  overflow-x: hidden;
`;

type SliderProps = { children: ReactNode };

function SliderLayout({ children }: SliderProps) {
  return (
    <StyledSlider>
      <StyledSliderScroller>
        {children}
      </StyledSliderScroller>
    </StyledSlider>
  );
}

export default SliderLayout;
