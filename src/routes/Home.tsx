import { useEffect, useState } from 'react';
import { getAllMedia } from '@/api';
import { Loader, GridItem, GridLayout, SectionWrapper, TrendingSlider } from '@/components';

export interface IMediaProvider {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default function Home() {
  const [mediaItems, setMediaItems] = useState<IMediaProvider[] | []>([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allMedia = getAllMedia();
      setMediaItems(allMedia);
    };
    fetchData();
  }, []);
  // console.log(test);

  return (
    <>
      <SectionWrapper title={'Trending'}>
        <TrendingSlider />
      </SectionWrapper>

      <SectionWrapper title={'Recommended for you'}>
        <GridLayout>
          {mediaItems ? (
            mediaItems
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
                />
                );
              })
          ) : (
            <Loader />
          )}
        </GridLayout>
      </SectionWrapper>
    </>
  );
}
