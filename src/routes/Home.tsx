import { useEffect, useState } from 'react';

import { getAllMedia, IMediaProps } from '@/api';
import { GridItem, GridLayout, SectionWrapper, TrendingSlider } from '@/components';

const Home = () => {
  const [mediaItems, setMediaItems] = useState<Array<IMediaProps>>([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  // const [isBookmarked, setIsBookmarked] = useState(isBookmarked);

  useEffect(() => {
    const fetchData = () => {
      const allMedia = getAllMedia();
      setMediaItems(allMedia);
    };
    fetchData();
  }, []);

  /**
   const handleBookmark = () => {
     if (isClicked && isBookmarked === true) {
       console.log(isBookmarked);
       setIsBookmarked(false);
      } else {
        setIsBookmarked(true);
      }
      setIsClicked(!isClicked);
    }
  */

  return (
    <>
      <SectionWrapper title={'Trending'}>
        <TrendingSlider />
      </SectionWrapper>

      <SectionWrapper title={'Recommended for you'}>
        <GridLayout>
          {mediaItems
            .filter((record: { isTrending: boolean }) =>
              record.isTrending === false ? record : null
            )
            .map((record) => {
              // console.log(record)
              return (
                <GridItem
                  path={record}
                  thumbType={'regular'}
                  key={record.year + '_' + record.title}
                  bookmarked={record.isBookmarked}
                />
              );
            })}
        </GridLayout>
      </SectionWrapper>
    </>
  );
};
export default Home;
