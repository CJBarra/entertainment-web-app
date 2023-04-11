import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import GridItem from './GridItem';
import Loader from './Loader';
import { getTrending, IMediaProps } from '@/api';

const StyledSlider = styled.div`
  position: relative;
  max-width: var(--max-width);
  width: var(--w-fill);
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
    /* grid-auto-columns: minmax(36.66%, 30vmax); */
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    column-gap: 2rem;
  }
`;


const TrendingSlider = () => {
  const [trendingList, setTrendingList] = useState<Array<IMediaProps>>([]);

  useEffect(() => {
    const data = getTrending();
    setTrendingList(data);
  }, []);
  
  // console.log(trendingList);

  return (
    <StyledSlider>
      <StyledSliderScroller>
        {trendingList.length ? (
          trendingList
            .map((record) => (
              <GridItem
                path={record}
                thumbType={'trending'}
                key={record.year + '_' + record.title}
                bookmarked={record.isBookmarked}
              />
            ))
        ) : (
          <Loader />
        )}
      </StyledSliderScroller>
    </StyledSlider>
  );
};

export default TrendingSlider;
