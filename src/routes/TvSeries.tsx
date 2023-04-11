import { SectionWrapper, GridLayout, GridItem, Loader } from '@/components';
import api from '../api/v1/data.json';

const TvSeries = () => {
  return (
    <>
      <SectionWrapper title={'TV Series'}>
        <GridLayout>
          {api ? (
            api
              .filter((record) => (record.category.toLowerCase() === 'tv series' ? record : null))
              .map((record) => (
                <GridItem
                  path={record}
                  thumbType={'regular'}
                  key={record.year + '_' + record.title}
                  bookmarked={record.isBookmarked}
                />
              ))
          ) : (
            <Loader />
          )}
        </GridLayout>
      </SectionWrapper>
    </>
  );
};

export default TvSeries;
