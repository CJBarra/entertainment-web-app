import { useState, useEffect } from 'react';

import { getBookmarked, IMediaProps } from '@/api';
import { SectionWrapper, GridLayout, GridItem, Loader } from '@/components';

const Bookmarked = () => {
  const [bookmarkedList, setBookmarkedList] = useState<Array<IMediaProps>>([]);

  useEffect(() => {
    const data = getBookmarked();
    setBookmarkedList(data);
  }, []);

  // console.log(bookmarkedList);

  return (
    <>
      <SectionWrapper title={'Bookmarked'}>
        <GridLayout>
          {bookmarkedList.length ? (
            bookmarkedList.map((record) => (
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

export default Bookmarked;
