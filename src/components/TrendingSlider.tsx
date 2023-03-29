import styled from "styled-components/macro";

import api from "@/api/v1/data.json";
import GridItem from "./GridItem";
import Loader from "./Loader";

const StyledSlider = styled.div`
  position: relative;
  max-width: var(--w-fill);
  width: var(--max-width);
  padding: 0;
  overflow: hidden;

  .slider__img {
    height: var(--h-fill);
    width: var(--w-fill);
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

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    grid-auto-columns: 36.66%;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    column-gap: 2rem;
  }
`;

// type SliderProps = { children: ReactNode };

function TrendingSlider() {
  return (
    <StyledSlider>
      <StyledSliderScroller>
        {api.length ? (
          api
            .filter((record) => (record.isTrending === true ? record : null))
            .map((record) => (
              <GridItem
                path={record}
                thumbType={"trending"}
                key={record.year + "_" + record.title}
              />
            ))
        ) : (
          <Loader />
        )}
      </StyledSliderScroller>
    </StyledSlider>
  );
}

export default TrendingSlider;
