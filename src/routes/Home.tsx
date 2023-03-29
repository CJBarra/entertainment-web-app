import {
  Loader,
  GridItem,
  GridLayout,
  SectionWrapper,
  TrendingSlider,
} from "@/components";
import api from "@/api/v1/data.json";

export default function Home() {
  return (
    <>
      <SectionWrapper title={"Trending"}>
        <TrendingSlider />
      </SectionWrapper>

      {/* <Loader /> */}

      <SectionWrapper title={"Recommended for you"}>
        <GridLayout>
          {api.length ? (
            api
              .filter((record) => (record.isTrending === false ? record : null))
              .map((record) => (
                <GridItem
                  path={record}
                  thumbType={"regular"}
                  key={record.year + "_" + record.title}
                />
              ))
          ) : (
            <Loader />
          )}
        </GridLayout>
      </SectionWrapper>
    </>
  );
}
