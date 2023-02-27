import { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledSlider = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  width: 156rem;
  padding: 0;

  .slider__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .slider__img__bg{
    /* height: 100%; */
  }
  .slider__meta__overlay{

  }
`;

type SliderProps = { children: ReactNode };

function SliderLayout({ children }: SliderProps) {
  return <StyledSlider>{children}</StyledSlider>;
}

export default SliderLayout;
