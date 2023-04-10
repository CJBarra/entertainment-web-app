import { useEffect, useState } from "react";

import { getAllMedia, IMediaProps } from "@/api";
import {
  GridItem,
  GridLayout,
  SectionWrapper,
  TrendingSlider,
} from "@/components";

export default function Home() {
  const [mediaItems, setMediaItems] = useState<Array<IMediaProps>>([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const allMedia = getAllMedia();
      setMediaItems(allMedia);
    };
    fetchData();
  }, []);

  return (
    <>
      <SectionWrapper title={"Trending"}>
        <TrendingSlider />
      </SectionWrapper>

      <SectionWrapper title={"Recommended for you"}>
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
                  thumbType={"regular"}
                  key={record.year + "_" + record.title}
                />
              );
            })}
        </GridLayout>
      </SectionWrapper>
    </>
  );
}
